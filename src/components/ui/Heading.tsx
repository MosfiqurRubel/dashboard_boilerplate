import type { FC, ReactNode, ElementType } from "react";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
type Align = "left" | "center" | "right";
type FontWeight = "normal" | "medium" | "semibold" | "bold" | "extrabold";

type HeadingProps = {
  level?: HeadingLevel; // h1 – h6
  text?: string;
  children?: ReactNode;
  align?: Align; // left | center | right
  fontWeight?: FontWeight; // normal | medium | semibold | bold | extrabold
  className?: string;
  color?: string; // tailwind color class
};

const sizeMap: Record<HeadingLevel, string> = {
  1: "text-4xl",
  2: "text-3xl",
  3: "text-2xl",
  4: "text-xl",
  5: "text-lg",
  6: "text-sm",
};

const weightMap: Record<FontWeight, string> = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
};

const alignMap: Record<Align, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const Heading: FC<HeadingProps> = ({
  level = 4,
  text,
  children,
  align = "left",
  fontWeight = "extrabold",
  className = "",
  color = "text-black",
}) => {
  // Dynamic heading tag (NO JSX error)
  const Tag: ElementType = `h${level}`;

  return (
    <Tag
      className={[
        sizeMap[level],
        weightMap[fontWeight],
        alignMap[align],
        color,
        className,
      ].join(" ")}
    >
      {children ?? text}
    </Tag>
  );
};

export default Heading;
