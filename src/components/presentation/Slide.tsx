interface SlideProps {
  children: React.ReactNode;
  className?: string;
}

const Slide = ({ children, className = "" }: SlideProps) => {
  return (
    <section
      className={`snap-slide min-h-screen flex items-center justify-center px-6 py-12 md:px-12 ${className}`}
    >
      <div className="w-full max-w-3xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Slide;
