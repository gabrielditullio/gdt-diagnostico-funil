import { ReactNode } from "react";

interface SlideWrapperProps {
  theme?: "dark" | "light";
  children: ReactNode;
  className?: string;
}

const SlideWrapper = ({ theme = "dark", children, className = "" }: SlideWrapperProps) => {
  const themeClasses = theme === "light" ? "bg-white text-black" : "bg-background text-foreground";

  return (
    <div className={`min-h-screen w-full overflow-y-auto px-5 py-12 md:px-10 lg:px-20 flex flex-col justify-center ${themeClasses} ${className}`}>
      {children}
    </div>
  );
};

export default SlideWrapper;
