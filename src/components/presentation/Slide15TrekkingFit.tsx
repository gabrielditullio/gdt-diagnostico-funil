import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";
import { Badge } from "@/components/ui/badge";
import AccordionEntregaveis from "./AccordionEntregaveis";
import { Zap, Clock, TrendingUp, AlertTriangle, Check, CheckCircle2, ArrowRight, ArrowDown, User } from "lucide-react";

const Slide15TrekkingFit = () => (
  <SlideWrapper theme="dark">
    {/* Badge Quick Win */}
    <FadeIn>
      <div className="flex justify-center mb-4">
        <Badge 
          className="px-6 py-3 text-lg font-black border-2"
          style={{ backgroundColor: "rgba(211, 84, 0, 0.15)", color: "#D35400", borderColor: "#D35400" }}
        >
          <Zap size={24} className="mr-2" />
          VITÓRIA RÁPIDA
        </Badge>
      </div>
    </FadeIn>

    <FadeIn delay={100}>
      <h2 className="text-center mb-4 text-white font-bold" style={{ fontSize: "clamp(1.3rem, 4vw, 2.5rem)" }}>
        Abrir o Trekking Fit
      </h2>
    </FadeIn>

    {/* Narração */}
    <FadeIn delay={200} className="max-w-3xl mx-auto mb-6">
      <p className="text-sm md:text-base text-gray-300 leading-relaxed text-center">
        Felipe, essa é a ação que dá pra fazer <strong className="text-white">AMANHÃ</strong>. Olha aqui o teu quiz — a pessoa responde as perguntas, tudo ótimo. Mas quando responde "<em>nunca participei</em>"... aparece uma tela de bloqueio. O cara que <strong className="text-white">MAIS precisa</strong> de preparação é bloqueado.
      </p>
    </FadeIn>

    {/* 4 Blocos Sequenciais */}
    <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      
      {/* BLOCO 1 — O quiz começa bem */}
      <FadeIn delay={300}>
        <div className="rounded-xl p-4 h-full" style={{ backgroundColor: "#1C1C1C", border: "1px solid #27AE60" }}>
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 block mb-2">Bloco 1</span>
          <h4 className="text-sm font-bold text-white mb-3">O quiz começa bem</h4>
          
          <div className="bg-white rounded-lg p-3 mb-3">
            <p className="text-[11px] font-bold text-gray-800 text-center mb-2">
              "Você já viveu o Legendário.<br/>Agora é hora de continuar."
            </p>
            <div className="flex items-center gap-2 bg-gray-50 rounded p-2 border border-gray-200">
              <User size={12} className="text-gray-400" />
              <span className="text-[9px] text-gray-400">Seu nome...</span>
            </div>
          </div>

          <div className="flex items-center gap-2 px-2 py-1.5 rounded" style={{ backgroundColor: "rgba(241, 196, 15, 0.15)" }}>
            <AlertTriangle size={12} style={{ color: "#F1C40F" }} />
            <span className="text-[10px] font-medium" style={{ color: "#F1C40F" }}>Essa mensagem já exclui quem nunca foi</span>
          </div>
        </div>
      </FadeIn>

      {/* BLOCO 2 — A pergunta fatal */}
      <FadeIn delay={500}>
        <div className="rounded-xl p-4 h-full" style={{ backgroundColor: "#1C1C1C", border: "2px solid #F1C40F" }}>
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 block mb-2">Bloco 2</span>
          <h4 className="text-sm font-bold text-white mb-3">A pergunta fatal</h4>
          
          <div className="bg-white rounded-lg p-3 mb-3">
            <p className="text-[11px] font-bold text-gray-800 text-center mb-3">
              "Você já participou do Legendário?"
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-2 rounded-lg border-2" style={{ borderColor: "#27AE60", backgroundColor: "rgba(39,174,96,0.05)" }}>
                <Check size={12} style={{ color: "#27AE60" }} />
                <span className="text-[10px] font-semibold text-gray-700">Sim, já participei</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg border-2 relative" style={{ borderColor: "#E74C3C", backgroundColor: "rgba(231,76,60,0.08)" }}>
                <span className="text-[10px] font-semibold text-gray-700">Não, nunca participei</span>
                <div className="absolute -right-1 top-1/2 -translate-y-1/2 animate-pulse">
                  <ArrowRight size={16} style={{ color: "#E74C3C" }} />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 px-2 py-1.5 rounded" style={{ backgroundColor: "rgba(231,76,60,0.15)" }}>
            <span className="text-[10px] font-bold" style={{ color: "#E74C3C" }}>Aqui é onde a porta fecha</span>
          </div>
        </div>
      </FadeIn>

      {/* BLOCO 3 — A tela de BLOQUEIO */}
      <FadeIn delay={700}>
        <div className="rounded-xl p-4 h-full animate-[pulse_3s_ease-in-out_infinite]" style={{ backgroundColor: "#1A0A0A", border: "4px solid #C0392B" }}>
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 block mb-2">Bloco 3</span>
          <h4 className="text-sm font-bold mb-3" style={{ color: "#E74C3C" }}>A tela de BLOQUEIO</h4>
          
          <div className="bg-white rounded-lg p-4 mb-3 text-center">
            <span className="text-3xl mb-2 block">⚠️</span>
            <p className="text-sm font-black text-gray-900 mb-1">Atenção</p>
            <p className="text-[10px] text-gray-600 leading-relaxed">
              Este programa é exclusivo para homens que já participaram do Legendário.
            </p>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <ArrowDown size={18} style={{ color: "#E74C3C" }} className="animate-bounce" />
            <span className="text-[10px] font-bold" style={{ color: "#E74C3C" }}>
              MILHARES de homens/mês veem ESSA tela e vão embora
            </span>
          </div>
        </div>
      </FadeIn>

      {/* BLOCO 4 — A CORREÇÃO */}
      <FadeIn delay={900}>
        <div className="rounded-xl p-4 h-full" style={{ backgroundColor: "#0A1A0A", border: "4px solid #27AE60" }}>
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 block mb-2">Bloco 4</span>
          <h4 className="text-sm font-bold mb-3" style={{ color: "#27AE60" }}>A CORREÇÃO</h4>
          
          <div className="bg-white rounded-lg p-4 mb-3 text-center">
            <span className="text-3xl mb-2 block">✅</span>
            <p className="text-sm font-black text-gray-900 mb-1">Perfeito!</p>
            <p className="text-[10px] text-gray-600 leading-relaxed mb-3">
              O Trekking Fit é ainda MAIS importante pra quem ainda não foi. A preparação começa ANTES da montanha.
            </p>
            <button className="w-full text-white text-[11px] font-bold py-2 rounded-lg flex items-center justify-center gap-1" style={{ backgroundColor: "#27AE60" }}>
              Continuar para o programa <ArrowRight size={12} />
            </button>
          </div>

          <div className="flex items-center gap-2 px-2 py-1.5 rounded" style={{ backgroundColor: "rgba(39,174,96,0.15)" }}>
            <CheckCircle2 size={12} style={{ color: "#27AE60" }} />
            <span className="text-[10px] font-medium" style={{ color: "#27AE60" }}>Mesma pergunta, resposta diferente. Zero custo.</span>
          </div>
        </div>
      </FadeIn>
    </div>

    {/* 3 Badges de Métricas */}
    <FadeIn delay={1100} className="flex flex-wrap justify-center gap-3 mb-4">
      <Badge className="px-4 py-2 text-sm font-bold border-2" style={{ backgroundColor: "rgba(39,174,96,0.15)", color: "#27AE60", borderColor: "#27AE60" }}>
        Custo: <span className="ml-1 font-black">R$0</span>
      </Badge>
      <Badge className="px-4 py-2 text-sm font-bold border-2" style={{ backgroundColor: "rgba(52,152,219,0.15)", color: "#3498DB", borderColor: "#3498DB" }}>
        <Clock size={14} className="mr-1" /> Tempo: <span className="ml-1 font-black">1 hora</span>
      </Badge>
      <Badge className="px-4 py-2 text-sm font-bold border-2" style={{ backgroundColor: "rgba(211,84,0,0.15)", color: "#D35400", borderColor: "#D35400" }}>
        <TrendingUp size={14} className="mr-1" /> Impacto: <span className="ml-1 font-black">até 5x mais vendas</span>
      </Badge>
    </FadeIn>

    {/* Selo VITÓRIA RÁPIDA */}
    <FadeIn delay={1200} className="flex justify-center mb-4">
      <div className="px-8 py-3 rounded-xl text-center font-black text-xl" style={{ backgroundColor: "rgba(211,84,0,0.2)", color: "#D35400", border: "3px solid #D35400" }}>
        ⚡ VITÓRIA RÁPIDA
      </div>
    </FadeIn>

    <FadeIn delay={1300} className="w-full max-w-2xl mx-auto mt-auto">
      <AccordionEntregaveis 
        title="O que muda na prática"
        items={[
          "Quem responde 'Não' é redirecionado para oferta de preparação em vez de ser bloqueado",
          "Texto de abertura do quiz reescrito: aberto para qualquer homem",
          "Mesma pergunta, resposta diferente — custo zero"
        ]}
      />
    </FadeIn>
  </SlideWrapper>
);

export default Slide15TrekkingFit;
