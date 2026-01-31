import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useShrink from "@/hooks/useShrink";
import { Menu, LogOut, Sun, Moon } from "lucide-react";
import useTheme from "@/hooks/useTheme";
import { userLoggedOut } from "@/features/auth/authSlice";
import type { RootState } from "@/app/store";

const Header: React.FC = () => {
  const { isShrinkSidebar, toggleShrinkSidebar } = useShrink();
  const { isDarkMode, toggleTheme } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = () => {
    dispatch(userLoggedOut());
    localStorage.clear();
    navigate("/login");
  };

  return (
    <header
      className={`h-14 flex items-center justify-between px-4 border-b border-border ${isDarkMode ? "bg-white text-black" : "bg-gray-800 text-gray-300"}`}
    >
      <div className="flex items-center">
        <button
          onClick={toggleShrinkSidebar}
          className={`
            text-2xl transition-transform
            ${isShrinkSidebar ? "rotate-0" : "rotate-90"}
          `}
        >
          <Menu />
        </button>

        <h1 className="ml-4 font-semibold">Dashboard</h1>
      </div>

      <div className="flex items-center gap-4">
        {user && <span className="text-sm">{user.email}</span>}
        <button
          onClick={toggleTheme}
          className={`p-1 rounded cursor-pointer transition ${
            isDarkMode
              ? "bg-gray-700 text-yellow-300"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {isDarkMode ? <Sun /> : <Moon />}
        </button>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600 transition"
          title="Logout"
        >
          <LogOut size={18} />
          {!isShrinkSidebar && <span>Logout</span>}
        </button>
      </div>
    </header>
  );
};

export default Header;
