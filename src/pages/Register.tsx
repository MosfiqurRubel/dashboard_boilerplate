import React, { useEffect, useState } from "react";
import useTheme from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react";
import { useRegisterMutation } from "@/features/auth/authApi";
import type { RegisterRequest } from "@/types";
import { useNavigate } from "react-router-dom";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";

const Register: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [register, { data, isLoading, error: responseError }] =
    useRegisterMutation();
  const [formData, setFormData] = useState<RegisterRequest>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreed: false,
  });
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  useEffect(() => {
    if (responseError?.data) {
      setError(responseError.data);
    }

    if (data?.accessToken && data?.user) {
      navigate("/dashboard");
    }
  }, [data, responseError, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");

    if (formData.confirmPassword !== formData.password) {
      setError("Passwords do not match");
    } else {
      await register(formData).unwrap();
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
        <Heading
          level={3}
          align="center"
          fontWeight="bold"
          className="mb-6"
          text="Create your account"
        />

        <form onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <input
              type="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input rounded-b-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input rounded-none"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="form-input rounded-none"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="form-input rounded-t-none"
            />
          </div>

          <div className="flex items-center my-5">
            <input
              type="checkbox"
              name="agreed"
              checked={formData.agreed}
              onChange={handleChange}
              required
              className="size-4 text-blue-600 focus:ring-blue-500 border-border rounded"
            />
            <label
              htmlFor="accept-terms"
              className="ml-2 text-sm normal-case text-gray-900"
            >
              Agreed with the terms and condition
            </label>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            loading={isLoading}
            className="w-full cursor-pointer"
          >
            {isLoading ? "Signing in..." : "Sign up"}
          </Button>

          {error !== "" && (
            <p className="mt-5 h-10 max-w-7xl mx-auto p-2 text-red-700 bg-red-100 rounded-md">
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
