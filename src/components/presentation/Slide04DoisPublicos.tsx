import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";
import { Dumbbell, Target, Flame, Mountain, Shield, Heart, Crown, ArrowRight } from "lucide-react";

const ggBullets = [
  { icon: Target, text: "Quer ficar grande e definido" },
  { icon: Flame, text: 'Olha pro Léo e pensa: "eu quero ficar assim"' },
  { icon: Dumbbell, text: "Busca hipertrofia e estética" },
];

const thiagoBullets = [
  { icon: Shield, text: "Quer completar o Legendários sem ir pro hospital" },
  { icon: Heart, text: "Busca condicionamento e resistência" },
  { icon: Mountain, text: "Precisa aguentar 72h com 14kg nas costas" },
];

const Slide04Escadinha = () => (
  <SlideWrapper theme="dark">
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-8">

      <FadeIn className="text-center space-y-2">
        <h2 className="text-3xl md:text-5xl font-bold">
          Você não tem <span style={{ color: "#D35400" }}>UM</span> público.<br />
          Você tem <span style={{ color: "#D35400" }}>DOIS.</span>
        </h2>
        <p className="text-lg text-[#888888] mt-2">E os dois são minas de ouro.</p>
      </FadeIn>

      {/* Split Screen */}
      <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden border border-[#2A2A2A] relative">

        {/* VS divider — desktop */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#0A0A0A] border border-[#333333] items-center justify-center">
          <span className="text-[10px] font-black text-[#555555] tracking-widest">VS</span>
        </div>

        {/* LEFT — Marcos */}
        <FadeIn delay={150}>
          <div
            className="p-8 md:p-10 flex flex-col gap-6 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(211,84,0,0.12) 0%, #0A0A0A 70%)" }}
          >
            {/* Big icon */}
            <div className="absolute top-4 right-4 opacity-10">
              <Dumbbell size={80} strokeWidth={1} className="text-[#D35400]" />
            </div>

            <div>
              <h3 className="text-4xl md:text-5xl font-black" style={{ color: "#D35400" }}>MARCOS</h3>
              <p className="text-sm font-bold text-[#888888] uppercase tracking-widest mt-1">O Cara do Shape</p>
            </div>

            {/* Big icon centered */}
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center" style={{ backgroundColor: "rgba(211,84,0,0.15)" }}>
              <Dumbbell size={36} style={{ color: "#D35400" }} />
            </div>

            <div className="space-y-4">
              {ggBullets.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: "rgba(211,84,0,0.2)" }}
                  >
                    <b.icon size={16} style={{ color: "#D35400" }} />
                  </div>
                  <p className="text-sm text-[#CCCCCC] leading-snug">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* RIGHT — Thiago */}
        <FadeIn delay={300}>
          <div
            className="p-8 md:p-10 flex flex-col gap-6 relative overflow-hidden border-t md:border-t-0 md:border-l border-[#1F1F1F]"
            style={{ background: "linear-gradient(135deg, rgba(39,174,96,0.12) 0%, #0A0A0A 70%)" }}
          >
            {/* Big icon */}
            <div className="absolute top-4 right-4 opacity-10">
              <Mountain size={80} strokeWidth={1} className="text-[#27AE60]" />
            </div>

            <div>
              <h3 className="text-4xl md:text-5xl font-black" style={{ color: "#27AE60" }}>THIAGO</h3>
              <p className="text-sm font-bold text-[#888888] uppercase tracking-widest mt-1">O Cara da Montanha</p>
            </div>

            {/* Big icon centered */}
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center" style={{ backgroundColor: "rgba(39,174,96,0.15)" }}>
              <Mountain size={36} style={{ color: "#27AE60" }} />
            </div>

            <div className="space-y-4">
              {thiagoBullets.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: "rgba(39,174,96,0.2)" }}
                  >
                    <b.icon size={16} style={{ color: "#27AE60" }} />
                  </div>
                  <p className="text-sm text-[#CCCCCC] leading-snug">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Convergence */}
      <FadeIn delay={500}>
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#D35400" }} />
            <ArrowRight size={20} style={{ color: "#D35400" }} />
          </div>

          <div className="rounded-xl border-2 border-[#2A2A2A] px-6 py-4 flex items-center gap-3 text-center" style={{ backgroundColor: "#111111" }}>
            <Crown size={20} style={{ color: "#D35400" }} />
            <div>
              <p className="text-sm font-black text-white tracking-wider uppercase">Ecossistema Felipe Marinho</p>
              <p className="text-[10px] text-[#888888] mt-0.5">Dois caminhos de entrada. Um destino.</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <ArrowRight size={20} className="rotate-180" style={{ color: "#27AE60" }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#27AE60" }} />
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={650}>
        <p
          className="text-base md:text-lg text-[#CCCCCC] leading-relaxed"
          style={{ backgroundColor: "#1A1A1A", padding: "16px", borderLeft: "3px solid #D35400" }}
        >
          E a beleza é que você JÁ atende o Thiago com o Trekking Fit. O que falta é abrir a porta pro Marcos — e parar de bloquear os Thiagos que ainda não subiram a montanha.
        </p>
      </FadeIn>

    </div>
  </SlideWrapper>
);

export default Slide04Escadinha;
