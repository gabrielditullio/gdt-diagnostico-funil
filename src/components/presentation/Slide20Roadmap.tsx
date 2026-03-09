import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";
import { Badge } from "@/components/ui/badge";
import AccordionEntregaveis from "./AccordionEntregaveis";
import { Zap } from "lucide-react";

const phases = [
  {
    phase: "⚡ SEMANA 1",
    title: "CUSTO ZERO",
    period: "Semana 1",
    duration: "1 semana",
    color: "#27AE60",
    bgColor: "rgba(39, 174, 96, 0.15)",
    darkBg: "rgba(39, 174, 96, 0.08)",
    tags: [
      "Abrir o quiz do Trekking Fit pra qualquer homem (tirar o bloqueio)",
      "Reescrever o texto de abertura do quiz"
    ],
    subLabel: "Impacto imediato: vendas começam a crescer sem gastar nada",
    isHighlight: true,
    badge: "FAZER AMANHÃ"
  },
  {
    phase: "FASE 1",
    title: "PREPARAR",
    period: "Semana 2-3",
    duration: "2 semanas",
    color: "#27AE60",
    bgColor: "rgba(39, 174, 96, 0.12)",
    darkBg: "rgba(39, 174, 96, 0.05)",
    tags: ["Reativar site", "Criar 2 PDFs grátis", "2 páginas de captura", "Escrever emails automáticos"],
    isHighlight: false
  },
  {
    phase: "FASE 2",
    title: "LIGAR A MÁQUINA",
    period: "Mês 1-2",
    duration: "2 meses",
    color: "#D35400",
    bgColor: "rgba(211, 84, 0, 0.12)",
    darkBg: "rgba(211, 84, 0, 0.05)",
    tags: ["Anúncios R$30-50/dia", "Páginas de venda pra Dieta GG e eBook Trekking", "Order bumps cruzados", "Primeiros vídeos YouTube"],
    isHighlight: false
  },
  {
    phase: "FASE 3",
    title: "ACELERAR",
    period: "Mês 3-4",
    duration: "2 meses",
    color: "#D4A853",
    bgColor: "rgba(212, 168, 83, 0.12)",
    darkBg: "rgba(212, 168, 83, 0.05)",
    tags: ["Webinar Protocolo GG", "Página Consultoria VIP", "Escalar ads"],
    isHighlight: false
  },
  {
    phase: "FASE 4",
    title: "EXPANDIR",
    period: "Mês 5-6",
    duration: "2 meses",
    color: "#D4A853",
    bgColor: "rgba(212, 168, 83, 0.12)",
    darkBg: "rgba(212, 168, 83, 0.05)",
    tags: ["Comunidade GG", "Integrar Camila em tudo", "Ads R$300-500/dia"],
    isHighlight: false
  }
];

const Slide20Roadmap = () => (
  <SlideWrapper theme="dark">
    <FadeIn>
      <h2 className="text-center mb-3 text-white font-bold" style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)" }}>
        O que Acontece Primeiro, Segundo e Terceiro
      </h2>
      <p className="text-center text-gray-400 text-sm md:text-base mb-10">
        Não é tudo de uma vez. É uma fila. E a primeira coisa <strong className="text-white">nem exige investimento</strong>.
      </p>
    </FadeIn>

    {/* Timeline Vertical */}
    <div className="w-full max-w-3xl mx-auto">
      {phases.map((phase, i) => (
        <FadeIn key={i} delay={300 + i * 250} className="relative flex gap-6 mb-6 last:mb-0">
          {/* Linha vertical + dot */}
          <div className="flex flex-col items-center shrink-0">
            <div
              className="w-5 h-5 rounded-full border-4 z-10"
              style={{
                borderColor: phase.color,
                backgroundColor: phase.isHighlight ? phase.color : "transparent",
                boxShadow: phase.isHighlight ? `0 0 12px ${phase.color}, 0 0 24px ${phase.color}40` : "none"
              }}
            />
            {i < phases.length - 1 && (
              <div className="w-0.5 flex-1 mt-1" style={{ backgroundColor: phase.color, opacity: 0.3 }} />
            )}
          </div>

          {/* Conteúdo */}
          <div
            className="flex-1 pb-4 rounded-xl"
            style={{
              padding: phase.isHighlight ? "16px" : "0",
              backgroundColor: phase.isHighlight ? phase.darkBg : "transparent",
              border: phase.isHighlight ? `2px solid ${phase.color}` : "none",
              boxShadow: phase.isHighlight ? `0 0 20px ${phase.color}20` : "none"
            }}
          >
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <span className="text-xs font-black tracking-widest" style={{ color: phase.color }}>
                {phase.phase}
              </span>
              <h3 className={`font-black text-white ${phase.isHighlight ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"}`}>
                {phase.title}
              </h3>
              <Badge
                className="text-xs px-3 py-1 font-bold border"
                style={{ backgroundColor: phase.bgColor, color: phase.color, borderColor: phase.color }}
              >
                {phase.duration}
              </Badge>
              {phase.badge && (
                <Badge
                  className="text-xs px-3 py-1 font-bold border animate-pulse"
                  style={{ backgroundColor: phase.color, color: "white", borderColor: phase.color }}
                >
                  <Zap size={12} className="mr-1" />
                  {phase.badge}
                </Badge>
              )}
            </div>
            <p className="text-sm text-gray-500 mb-3">{phase.period}</p>

            <div className="flex flex-wrap gap-2">
              {phase.tags.map((tag, j) => (
                <Badge
                  key={j}
                  className={`px-3 py-1.5 font-medium border ${phase.isHighlight ? "text-sm" : "text-xs"}`}
                  style={{ backgroundColor: phase.bgColor, color: phase.color, borderColor: phase.color }}
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {phase.subLabel && (
              <p className="text-xs mt-3 font-semibold" style={{ color: phase.color }}>
                {phase.subLabel}
              </p>
            )}
          </div>
        </FadeIn>
      ))}
    </div>

    <FadeIn delay={1600} className="w-full max-w-2xl mx-auto mt-8">
      <AccordionEntregaveis
        title="O que será entregue"
        items={[
          "Cronograma de 6 meses semana a semana",
          "Checklist de execução",
          "Divisão de responsabilidades"
        ]}
      />
    </FadeIn>
  </SlideWrapper>
);

export default Slide20Roadmap;
