import React, { useEffect, useState } from "react";
import type { ReactNode, ShrinkContextType } from "@/types";
import { ShrinkContext } from "@/context";

const STORAGE_KEY = "sidebar-shrink";

const ShrinkProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isShrinkSidebar, setIsShrinkSidebar] = useState<boolean>(() => {
    return localStorage.getItem(STORAGE_KEY) === true;
  });

  const toggleShrinkSidebar = () => {
    setIsShrinkSidebar((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, String(isShrinkSidebar));

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsShrinkSidebar(true);
      }
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isShrinkSidebar]);

  const value: ShrinkContextType = {
    isShrinkSidebar,
    toggleShrinkSidebar,
  };

  return (
    <ShrinkContext.Provider value={value}>{children}</ShrinkContext.Provider>
  );
};

export default ShrinkProvider;
