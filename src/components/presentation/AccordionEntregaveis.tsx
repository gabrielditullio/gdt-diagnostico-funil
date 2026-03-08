import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

interface AccordionEntregaveisProps {
  title: string;
  items: string[];
  className?: string;
}

const AccordionEntregaveis = ({ title, items, className = "" }: AccordionEntregaveisProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`rounded-lg border overflow-hidden transition-all ${className}`}
      style={{ borderColor: "#D35400" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-sm"
      >
        {title}
        <ChevronDown
          size={18}
          className="transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", color: "#D35400" }}
        />
      </button>
      {open && (
        <div className="px-5 pb-4 space-y-2">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-sm">
              <Check size={14} className="mt-0.5 shrink-0" style={{ color: "#D35400" }} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AccordionEntregaveis;
