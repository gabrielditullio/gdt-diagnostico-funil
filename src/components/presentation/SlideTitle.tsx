interface SlideTitleProps {
  children: React.ReactNode;
}

const SlideTitle = ({ children }: SlideTitleProps) => {
  return (
    <div className="mb-8">
      <div className="w-12 h-1 bg-primary mb-4 rounded-full" />
      <h2 className="text-display font-extrabold tracking-tight">
        {children}
      </h2>
    </div>
  );
};

export default SlideTitle;
