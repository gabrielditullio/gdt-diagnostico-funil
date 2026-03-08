import { ReactNode } from "react";

interface FadeInProps {
  delay?: number;
  children: ReactNode;
  className?: string;
  isActive?: boolean;
}

const FadeIn = ({ delay = 0, children, className = "", isActive = true }: FadeInProps) => {
  return (
    <div
      className={`${isActive ? "animate-slide-transition" : "opacity-0"} ${className}`}
      style={
        isActive
          ? { animationDelay: `${delay}ms`, animationFillMode: "forwards" }
          : undefined
      }
    >
      {children}
    </div>
  );
};

export default FadeIn;
