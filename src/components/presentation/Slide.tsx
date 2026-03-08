import { ReactNode } from "react";

interface SlideProps {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const Slide = ({ children, className = "", fullWidth = false }: SlideProps) => {
  return (
    <section
      className={`snap-slide min-h-screen flex flex-col items-center justify-center px-4 py-8 md:px-12 md:py-12 relative ${className}`}
    >
      <div className={`w-full mx-auto flex-1 flex items-center justify-center ${fullWidth ? "max-w-6xl" : "max-w-3xl"}`}>
        {children}
      </div>
      {/* DT Coproduções footer */}
      <div className="w-full text-center pb-2 pt-4">
        <span className="text-[9px] text-muted-foreground/40 font-medium tracking-wider uppercase">
          DT Coproduções
        </span>
      </div>
    </section>
  );
};

export default Slide;
