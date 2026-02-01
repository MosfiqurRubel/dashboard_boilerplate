import type { ButtonHTMLAttributes } from "react";
import type { ReactNode } from "@/types";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";

type ButtonSize = "sm" | "md" | "lg";

type ButtonRounded = "none" | "sm" | "md" | "lg" | "full";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  rounded?: ButtonRounded;
  loading?: boolean;
}

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 hover:border-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:hover:border-blue-600",

  secondary:
    "bg-gray-100 text-gray-900 border border-gray-100 hover:bg-gray-200 hover:border-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-800 hover:dark:bg-gray-500 hover:dark:border-gray-500",

  outline:
    "border border-gray-300 text-gray-900 hover:bg-gray-100 hover:border-gray-100 dark:border-gray-700 dark:text-gray-100   hover:dark:bg-gray-900 hover:dark:border-gray-900",

  ghost:
    "text-gray-900 border border-transparent hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-900",

  danger:
    "bg-red-600 text-white border border-red-600 hover:bg-red-700 hover:border-red-700 dark:bg-red-500 dark:hover:bg-red-600 dark:hover:border-red-600",
};

const SIZE_STYLES: Record<ButtonSize, string> = {
  sm: "px-3 py-2 text-xs",
  md: "px-4 py-2.5 text-sm",
  lg: "px-5 py-3 text-base",
};

const ROUNDED_STYLES: Record<ButtonRounded, string> = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  rounded = "md",
  loading = false,
  disabled,
  className,
  ...props
}: ButtonProps) => {
  const isDisabled = disabled || loading;

  return (
    <button
      type="button"
      disabled={isDisabled}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-medium cursor-pointer",
        "transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50",
        "disabled:opacity-60 disabled:cursor-not-allowed",
        VARIANT_STYLES[variant],
        SIZE_STYLES[size],
        ROUNDED_STYLES[rounded],
        className,
      )}
      {...props}
    >
      {loading && <Loader2 className="h-4 w-4 animate-spin" />}
      {children}
    </button>
  );
};

export default Button;
