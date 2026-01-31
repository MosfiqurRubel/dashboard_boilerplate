import { useContext } from "react";
import { ShrinkContext } from "@/context";
import type { ShrinkContextType } from "@/types";

const useShrink = (): ShrinkContextType => {
  const context = useContext(ShrinkContext);

  if (!context) {
    throw new Error("useShrink must be used within ShrinkProvider");
  }

  return context;
};

export default useShrink;
