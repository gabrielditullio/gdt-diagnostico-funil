import { ReactNode } from "react";

interface FooterQuoteProps {
  children: ReactNode;
  className?: string;
}

const FooterQuote = ({ children, className = "" }: FooterQuoteProps) => {
  return (
    <blockquote className={`italic text-muted-foreground border-l-2 border-primary pl-4 text-sm ${className}`}>
      {children}
    </blockquote>
  );
};

export default FooterQuote;
