import { ReactNode } from "react";
import GoldBarTop from "./GoldBarTop";

interface SlideWrapperProps {
  theme?: "dark" | "light";
  children: ReactNode;
  className?: string;
}

const SlideWrapper = ({ theme = "dark", children, className = "" }: SlideWrapperProps) => {
  const isDark = theme === "dark";

  return (
    <section
      className={`min-h-screen w-full snap-start relative flex flex-col ${className}`}
      style={{
        backgroundColor: isDark ? "#0A0A0A" : "#F5F5F5",
        color: isDark ? "#FFFFFF" : "#1A1A1A",
      }}
    >
      <GoldBarTop />
      <div className="flex-1 flex flex-col justify-center px-6 py-16 md:px-12 lg:px-24">
        {children}
      </div>
      <div className="w-full text-center pb-4">
        <span className="text-[9px] tracking-wider uppercase font-medium" style={{ color: isDark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.2)" }}>
          DT Coproduções
        </span>
      </div>
    </section>
  );
};

export default SlideWrapper;
