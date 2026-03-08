import { ReactNode } from "react";

interface SlideLabelProps {
  children: ReactNode;
  className?: string;
}

const SlideLabel = ({ children, className = "" }: SlideLabelProps) => {
  return (
    <span className={`text-primary uppercase tracking-[3px] text-xs font-bold ${className}`}>
      {children}
    </span>
  );
};

export default SlideLabel;
