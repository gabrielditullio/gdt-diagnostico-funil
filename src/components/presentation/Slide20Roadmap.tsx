import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";
import { Badge } from "@/components/ui/badge";
import AccordionEntregaveis from "./AccordionEntregaveis";

const phases = [
  {
    phase: "FASE 0",
    title: "DESBLOQUEIO",
    period: "Semana 1-2",
    duration: "2 semanas",
    color: "#888888",
    bgColor: "#F0F0F0",
    tags: ["Reativar site", "Criar 2 PDFs grátis", "2 páginas de captura", "Emails automáticos", "Abrir quiz Trekking"]
  },
  {
    phase: "FASE 1",
    title: "LIGAR A MÁQUINA",
    period: "Mês 1-2",
    duration: "2 meses",
    color: "#E8A45C",
    bgColor: "#FEF5EB",
    tags: ["Anúncios R$30-50/dia", "Order bumps nos eBooks", "Emails semanais", "Primeiros vídeos YouTube"]
  },
  {
    phase: "FASE 2",
    title: "ACELERAR",
    period: "Mês 3-4",
    duration: "2 meses",
    color: "#D35400",
    bgColor: "#FEF0E0",
    tags: ["Webinar Protocolo GG", "Webinar Trekking Fit", "Página Consultoria VIP", "Escalar ads"]
  },
  {
    phase: "FASE 3",
    title: "EXPANDIR",
    period: "Mês 5-6",
    duration: "2 meses",
    color: "#A04000",
    bgColor: "#FDEBD0",
    tags: ["Comunidade GG", "Integrar Camila", "Ads R$300-500/dia"]
  }
];

const Slide20Roadmap = () => (
  <SlideWrapper theme="light">
    <FadeIn>
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-3 text-gray-900">
        O que Acontece Primeiro, Segundo e Terceiro
      </h2>
      <p className="text-center text-gray-600 text-sm md:text-base mb-12">
        Não é tudo de uma vez. É uma fila.
      </p>
    </FadeIn>

    {/* Timeline Vertical */}
    <div className="w-full max-w-3xl mx-auto">
      {phases.map((phase, i) => (
        <FadeIn key={i} delay={300 + i * 250} className="relative flex gap-6 mb-8 last:mb-0">
          {/* Linha vertical + dot */}
          <div className="flex flex-col items-center shrink-0">
            <div
              className="w-5 h-5 rounded-full border-4 z-10"
              style={{ borderColor: phase.color, backgroundColor: "#FFF" }}
            />
            {i < phases.length - 1 && (
              <div className="w-0.5 flex-1 mt-1" style={{ backgroundColor: phase.color, opacity: 0.3 }} />
            )}
          </div>

          {/* Conteúdo */}
          <div className="flex-1 pb-4">
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <span className="text-xs font-black tracking-widest" style={{ color: phase.color }}>
                {phase.phase}
              </span>
              <h3 className="text-xl md:text-2xl font-black text-gray-900">{phase.title}</h3>
              <Badge
                className="text-xs px-3 py-1 font-bold border"
                style={{ backgroundColor: phase.bgColor, color: phase.color, borderColor: phase.color }}
              >
                {phase.duration}
              </Badge>
            </div>
            <p className="text-sm text-gray-500 mb-3">{phase.period}</p>

            <div className="flex flex-wrap gap-2">
              {phase.tags.map((tag, j) => (
                <Badge
                  key={j}
                  className="px-3 py-1.5 text-sm font-medium border"
                  style={{ backgroundColor: phase.bgColor, color: phase.color, borderColor: phase.color }}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </FadeIn>
      ))}
    </div>

    <FadeIn delay={1400} className="w-full max-w-2xl mx-auto mt-10">
      <AccordionEntregaveis
        title="O que será entregue"
        items={[
          "Cronograma de 6 meses detalhado (semana a semana)",
          "Checklist de execução com marcação de progresso",
          "Divisão de responsabilidades: Felipe vs equipe"
        ]}
      />
    </FadeIn>
  </SlideWrapper>
);

export default Slide20Roadmap;
