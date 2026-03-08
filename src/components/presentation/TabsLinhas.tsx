import { useState, ReactNode } from "react";

interface Tab {
  label: string;
  color: string;
  content: ReactNode;
}

interface TabsLinhasProps {
  tabs: Tab[];
  className?: string;
}

const TabsLinhas = ({ tabs, className = "" }: TabsLinhasProps) => {
  const [active, setActive] = useState(0);

  return (
    <div className={className}>
      <div className="flex gap-2 mb-6">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="px-5 py-2 rounded-full text-sm font-semibold transition-all"
            style={{
              backgroundColor: i === active ? tab.color : "transparent",
              color: i === active ? "#FFFFFF" : tab.color,
              border: `2px solid ${tab.color}`,
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="transition-opacity duration-300">
        {tabs[active]?.content}
      </div>
    </div>
  );
};

export default TabsLinhas;
