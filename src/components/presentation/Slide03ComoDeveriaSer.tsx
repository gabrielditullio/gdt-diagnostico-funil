import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";
import FooterQuote from "./FooterQuote";
import { Check, WifiOff } from "lucide-react";

const BAR_COLORS_STAIR = [
  "#F0C080",
  "#E8A040",
  "#D35400",
  "#B34500",
  "#8C3600",
];

const Slide03ComoDeveriaSer = () => (
  <SlideWrapper theme="light">
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-10">

      <FadeIn>
        <h2 className="text-2xl md:text-4xl font-bold text-center text-[#1A1A1A]">
          O que os negócios que mais crescem fazem diferente
        </h2>
      </FadeIn>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* LEFT — How it works today */}
        <FadeIn delay={150}>
          <div className="rounded-xl bg-white border border-[#EEEEEE] overflow-hidden shadow-sm flex flex-col" style={{ borderTop: "4px solid #C0392B" }}>
            <div className="p-6 flex-1 flex flex-col gap-6">

              <div className="flex items-center gap-3">
                <span className="text-2xl">🤔</span>
                <h3 className="text-lg font-bold text-[#1A1A1A]">Como funciona hoje</h3>
              </div>

              {/* Visual: 1 green tall bar + 5 gray low bars */}
              <div className="flex items-end justify-center gap-2 h-44 bg-[#FDF2F2] rounded-lg p-4">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 rounded-t-md flex items-start justify-center pt-1" style={{ height: "110px", backgroundColor: "#27AE60" }}>
                    <Check size={14} className="text-white" />
                  </div>
                  <span className="text-[9px] font-bold text-[#27AE60]">Trekking Fit</span>
                  <span className="text-[9px] font-bold text-[#27AE60]">R$297-997</span>
                </div>

                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex flex-col items-center gap-1 opacity-40">
                    <div className="w-8 rounded-t-md flex items-center justify-center" style={{ height: `${30 + (i % 2) * 8}px`, backgroundColor: "#999999" }}>
                      <WifiOff size={12} className="text-[#666666]" />
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-sm text-[#666666] text-center">
                Um funil que funciona bem — mas só para ex-Legendários. E 5 produtos sem caminho de venda. Todo o público que não se encaixa nesse funil... vai embora.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* RIGHT — How it should work */}
        <FadeIn delay={300}>
          <div
            className="rounded-xl bg-white border border-[#EEEEEE] overflow-hidden shadow-md flex flex-col ring-2 ring-[#D35400]/20"
            style={{ borderTop: "4px solid #D35400" }}
          >
            <div className="p-6 flex-1 flex flex-col gap-6">

              <div className="flex items-center gap-3">
                <span className="text-2xl">🚀</span>
                <h3 className="text-lg font-bold text-[#1A1A1A]">Como deveria funcionar</h3>
              </div>

              {/* Visual: stair bars */}
              <div className="flex items-end justify-center gap-2 h-44 bg-[#FFF8F2] rounded-lg px-6 pb-4 pt-4">
                {[
                  { label: "Grátis", h: 20 },
                  { label: "R$37", h: 40 },
                  { label: "R$297", h: 65 },
                  { label: "R$2.997", h: 90 },
                  { label: "R$97/mês", h: 112 },
                ].map((bar, i) => (
                  <div key={i} className="flex flex-col items-center gap-1 flex-1">
                    <span className="text-[7px] font-bold text-center leading-tight" style={{ color: BAR_COLORS_STAIR[i] }}>{bar.label}</span>
                    <div
                      className="w-full rounded-t-md"
                      style={{ height: `${bar.h}px`, backgroundColor: BAR_COLORS_STAIR[i] }}
                    />
                  </div>
                ))}
              </div>

              <p className="text-sm text-[#666666] text-center">
                Uma escada com degraus. DOIS caminhos de entrada — um pra quem quer shape, outro pra quem quer montanha. Aproveitando o que já funciona e desbloqueando tudo que está parado.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Footer Quote */}
      <FadeIn delay={500}>
        <FooterQuote
          text="O que eu vou te mostrar agora é essa escada montada especificamente para o teu negócio — aproveitando o que já funciona e desbloqueando tudo que está parado."
          className="text-base md:text-lg"
        />
      </FadeIn>

    </div>
  </SlideWrapper>
);

export default Slide03ComoDeveriaSer;
