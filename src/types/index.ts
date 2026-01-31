import type { ReactNode } from "react";
export type { ReactNode };

export interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export interface ShrinkContextType {
  isShrinkSidebar: boolean;
  toggleShrinkSidebar: () => void;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

// API থেকে আসা সাকসেস রেসপন্স
export interface AuthResponse {
  accessToken: string;
  user: User;
}

// Redux Store এর স্টেট (শুরুতে null থাকতে পারে)
export interface AuthState {
  accessToken: string | null;
  user: User | null;
}

export interface LoginRequest {
  email: string;
  password: string;
}

// যদি রেজিষ্ট্রেশনে এক্সট্রা ফিল্ড থাকে (যেমন: name)
export interface RegisterRequest extends LoginRequest {
  name: string;
  confirmPassword: string;
  agreed: boolean;
}
