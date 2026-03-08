interface SlideProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const Slide = ({ children, className = "", fullWidth = false }: SlideProps) => {
  return (
    <section
      className={`snap-slide min-h-screen flex items-center justify-center px-4 py-8 md:px-12 md:py-12 ${className}`}
    >
      <div className={`w-full mx-auto ${fullWidth ? "max-w-6xl" : "max-w-3xl"}`}>
        {children}
      </div>
    </section>
  );
};

export default Slide;
