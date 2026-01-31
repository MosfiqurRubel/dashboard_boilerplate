import React, { useState } from "react";
import useTheme from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react";
import { useLoginMutation } from "@/features/auth/authApi";
import type { LoginRequest } from "@/types";
import { Link, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const [formData, setFormData] = useState<LoginRequest>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(formData).unwrap();
      navigate("/dashboard");
    } catch (error: any) {
      console.error("Login failed", error);
      alert(error.data?.message || "Login Failed");
    }
  };
  return (
    <div className="min-h-screen flex-center">
      <button
        onClick={toggleTheme}
        className={`absolute top-4 right-4 p-2 rounded-full cursor-pointer transition ${isDarkMode ? "bg-gray-700 text-yellow-300" : "bg-gray-100 text-gray-800"}`}
      >
        {isDarkMode ? <Sun /> : <Moon />}
      </button>
      <div
        className={`p-6 rounded shadow-md w-full max-w-md ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="form-input"
          />
          <div className="text-sm">
            <Link
              to="/forgot"
              className="ms-1 text-sm capitalize text-gray-400 hover:text-blue-500"
            >
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full text-white py-2 rounded transition ${isLoading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 cursor-pointer"}`}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
          <div className="flex-center text-sm">
            Don't have an Account?
            <Link
              to="/register"
              className="ms-1 font-medium text-blue-600 hover:text-blue-500"
            >
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
