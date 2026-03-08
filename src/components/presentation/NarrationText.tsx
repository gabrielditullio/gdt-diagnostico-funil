interface NarrationTextProps {
  children: React.ReactNode;
}

const NarrationText = ({ children }: NarrationTextProps) => {
  return (
    <p className="text-body-lg text-muted-foreground leading-relaxed max-w-2xl">
      {children}
    </p>
  );
};

export default NarrationText;
