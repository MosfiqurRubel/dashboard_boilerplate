import { createContext } from "react";
import type { ThemeContextType, ShrinkContextType } from "@/types";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const ShrinkContext = createContext<ShrinkContextType | undefined>(undefined);

export { ThemeContext, ShrinkContext }; // Exporting ThemeContext for use in other parts of the application
