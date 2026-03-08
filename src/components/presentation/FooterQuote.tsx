interface FooterQuoteProps {
  text: string;
  className?: string;
}

const FooterQuote = ({ text, className = "" }: FooterQuoteProps) => (
  <p
    className={`text-center text-sm italic mt-8 ${className}`}
    style={{ color: "#666666" }}
  >
    "{text}"
  </p>
);

export default FooterQuote;
