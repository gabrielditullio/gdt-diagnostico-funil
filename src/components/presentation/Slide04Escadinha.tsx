import { Gift, BookOpen, Zap, Crown, Repeat, ArrowUp, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    level: "GRÁTIS",
    product: "Presente Digital (PDF)",
    price: "R$0",
    icon: Gift,
    hue: 24,
    saturation: 40,
    lightness: 55,
  },
  {
    level: "ENTRADA",
    product: "eBooks (Dieta GG / Trekking)",
    price: "R$37–47",
    icon: BookOpen,
    hue: 24,
    saturation: 60,
    lightness: 48,
  },
  {
    level: "PROGRAMA",
    product: "Protocolo GG / Trekking Fit 8 semanas",
    price: "R$297",
    icon: Zap,
    hue: 24,
    saturation: 80,
    lightness: 42,
  },
  {
    level: "PREMIUM",
    product: "Consultoria VIP 90 dias",
    price: "R$2.997",
    icon: Crown,
    hue: 24,
    saturation: 100,
    lightness: 38,
  },
  {
    level: "RECORRENTE",
    product: "Comunidade GG Mensal",
    price: "R$47–97/mês",
    icon: Repeat,
    hue: 24,
    saturation: 100,
    lightness: 42,
  },
];

const Slide04Escadinha = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const interval = setInterval(() => {
      setActiveStep(i);
      i++;
      if (i >= steps.length) clearInterval(interval);
    }, 400);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <div ref={ref} className="w-full space-y-6 md:space-y-8">
      {/* Title */}
      <div className="text-center space-y-2">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Coração da Estratégia</span>
        <h2 className="text-display">A Escadinha</h2>
      </div>

      {/* Staircase */}
      <div className="relative mx-auto max-w-3xl">
        {/* Value arrow - left side */}
        <div className="absolute -left-2 md:left-0 top-0 bottom-0 flex flex-col items-center justify-between py-4 z-10">
          <ArrowUp className="text-primary" size={20} />
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary writing-mode-vertical"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}>
            VALOR
          </span>
        </div>

        {/* Steps */}
        <div className="ml-6 md:ml-10 space-y-2">
          {[...steps].reverse().map((step, visualIndex) => {
            const stepIndex = steps.length - 1 - visualIndex;
            const isActive = stepIndex <= activeStep;
            const isRecorrente = step.level === "RECORRENTE";
            const widthPercent = 50 + (stepIndex + 1) * 10;

            return (
              <div
                key={stepIndex}
                className="transition-all duration-500 ease-out"
                style={{
                  opacity: isActive ? 1 : 0.2,
                  transform: isActive ? "translateX(0)" : "translateX(-20px)",
                  width: `${widthPercent}%`,
                  marginLeft: `${(100 - widthPercent) * 0.5}%`,
                }}
              >
                <div
                  className={`relative rounded-lg p-3 md:p-4 border transition-all duration-300 ${
                    isRecorrente
                      ? "border-primary/60 ring-2 ring-primary/30"
                      : "border-border"
                  }`}
                  style={{
                    backgroundColor: isActive
                      ? `hsl(${step.hue} ${step.saturation}% ${step.lightness}% / 0.15)`
                      : "hsl(var(--card))",
                  }}
                >
                  {/* Step number badge */}
                  <div
                    className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-extrabold"
                    style={{
                      backgroundColor: isActive
                        ? `hsl(${step.hue} ${step.saturation}% ${step.lightness}%)`
                        : "hsl(var(--muted))",
                      color: isActive ? "hsl(0 0% 100%)" : "hsl(var(--muted-foreground))",
                    }}
                  >
                    {stepIndex + 1}
                  </div>

                  <div className="flex items-center gap-3 ml-2">
                    <step.icon
                      size={18}
                      className="shrink-0"
                      style={{
                        color: isActive
                          ? `hsl(${step.hue} ${step.saturation}% ${step.lightness + 15}%)`
                          : "hsl(var(--muted-foreground))",
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className="text-[10px] md:text-xs font-extrabold uppercase tracking-wider"
                          style={{
                            color: isActive
                              ? `hsl(${step.hue} ${step.saturation}% ${step.lightness + 15}%)`
                              : "hsl(var(--muted-foreground))",
                          }}
                        >
                          {step.level}
                        </span>
                        <span className="text-xs md:text-sm font-semibold text-foreground truncate">
                          {step.product}
                        </span>
                      </div>
                    </div>
                    <span
                      className="text-sm md:text-base font-extrabold shrink-0"
                      style={{
                        color: isActive
                          ? `hsl(${step.hue} ${step.saturation}% ${step.lightness + 15}%)`
                          : "hsl(var(--muted-foreground))",
                      }}
                    >
                      {step.price}
                    </span>
                  </div>

                  {/* Recorrente bar */}
                  {isRecorrente && (
                    <div className="absolute -right-1 top-0 bottom-0 w-1 rounded-full bg-primary" />
                  )}
                </div>

                {/* Climber icon on active step */}
                {stepIndex === activeStep && (
                  <div className="absolute -right-8 md:-right-10 top-1/2 -translate-y-1/2 transition-all duration-500">
                    <User className="text-primary animate-bounce" size={20} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Investment arrow - bottom */}
        <div className="flex items-center justify-center gap-2 mt-4 ml-6 md:ml-10">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground">
            INVESTIMENTO
          </span>
          <ArrowUp className="text-muted-foreground rotate-90" size={16} />
        </div>
      </div>

      {/* Narration */}
      <p className="text-body-lg text-muted-foreground text-center max-w-2xl mx-auto">
        Cada degrau resolve um pedaço do problema. E quando o cliente resolve aquele pedaço, ele sente que precisa do próximo.
      </p>
    </div>
  );
};

export default Slide04Escadinha;
