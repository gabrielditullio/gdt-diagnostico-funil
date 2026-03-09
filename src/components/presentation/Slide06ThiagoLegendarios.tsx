import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";
import StatCard from "./StatCard";
import FooterQuote from "./FooterQuote";
import AccordionEntregaveis from "./AccordionEntregaveis";
import { Mountain, Calendar, Users, HeartCrack, Check, Lock } from "lucide-react";

const Slide06ThiagoLegendarios = () => (
  <SlideWrapper theme="light">
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
      
      {/* PARTE 1 - Avatar Thiago */}
      <FadeIn>
        <div 
          className="bg-white rounded-xl shadow-lg border-2 p-8 w-full max-w-2xl mx-auto"
          style={{ borderColor: "#27AE60" }}
        >
          
          {/* Card Header */}
          <div className="flex items-center gap-4 mb-8">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#27AE60" }}
            >
              <Mountain size={32} color="white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#1A1A1A]">THIAGO</h2>
              <p className="text-lg opacity-70">O teu cliente ideal — Linha Trekking</p>
            </div>
          </div>

          {/* Stats Grid 2x2 */}
          <div className="grid grid-cols-2 gap-4">
            
            <div className="bg-[#F9F9F9] border border-[#EEEEEE] rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Calendar size={20} style={{ color: "#27AE60" }} />
                <span className="font-semibold text-[#1A1A1A]">Idade</span>
              </div>
              <p className="text-[#666666]">28-50 anos</p>
            </div>

            <div className="bg-[#F9F9F9] border border-[#EEEEEE] rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Users size={20} style={{ color: "#27AE60" }} />
                <span className="font-semibold text-[#1A1A1A]">Onde está</span>
              </div>
              <p className="text-[#666666]">Grupos de igreja, WhatsApp do Legendários</p>
            </div>

            <div className="bg-[#F9F9F9] border border-[#EEEEEE] rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <HeartCrack size={20} style={{ color: "#27AE60" }} />
                <span className="font-semibold text-[#1A1A1A]">Maior medo</span>
              </div>
              <p className="text-[#666666]">"Vou passar mal na montanha"</p>
            </div>

            <div className="bg-[#F9F9F9] border border-[#EEEEEE] rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Check size={20} style={{ color: "#27AE60" }} />
                <span className="font-semibold text-[#1A1A1A]">O que convence</span>
              </div>
              <p className="text-[#666666]">"Um homem morreu em jan/2025 por falta de preparo..."</p>
            </div>

          </div>
        </div>
      </FadeIn>

      {/* PARTE 2 - Dados do Legendários */}
      <div className="space-y-8">
        
        <FadeIn delay={150}>
          <h3 className="text-3xl font-bold text-center text-[#1A1A1A] mb-8">A Explosão dos Legendários</h3>
        </FadeIn>

        {/* Grid de StatCards */}
        <FadeIn delay={300}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <StatCard number="50.000" label="homens no Brasil" />
            <StatCard number="19.000" label="só em 2025" />
            <StatCard number="13" label="países" />
            <StatCard number="~R$1.490" label="por inscrição" />
          </div>
        </FadeIn>

        {/* Badges de Celebridades */}
        <FadeIn delay={450}>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {["Thiago Nigro", "Eliezer", "Kaká Diniz", "Neymar Pai"].map((name, i) => (
              <div 
                key={i}
                className="bg-white border border-[#EEEEEE] rounded-full px-4 py-2 shadow-sm"
              >
                <span className="text-sm font-medium text-[#333333]">{name}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* PARTE 3 - Problema do Quiz */}
      <div className="space-y-6">
        
        <FadeIn delay={600}>
          <div 
            className="bg-[#FFF5F5] border-2 border-[#C0392B] rounded-xl p-8 text-center"
          >
            <div className="flex flex-col items-center gap-4">
              <Lock size={48} style={{ color: "#C0392B" }} />
              <p className="text-sm text-[#666666] mb-2">Quiz funciona — mas bloqueia quem nunca foi ao Legendários</p>
              <p className="text-lg text-[#1A1A1A] font-medium leading-relaxed max-w-2xl">
                Você já atende esse público com o quiz do Trekking Fit — e funciona. O problema é que você só vende pra quem JÁ participou. Os milhares de homens que estão se preparando pra ir pela primeira vez? Porta fechada. E esses são os que MAIS precisam de preparação física.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={750}>
          <FooterQuote 
            text="Você está vendendo guarda-chuva só pra quem já está molhado."
            className="text-lg md:text-xl"
          />
        </FadeIn>

        <FadeIn delay={900}>
          <AccordionEntregaveis
            title="Diagnóstico e Recomendações"
            items={[
              "Mapeamento completo do mercado Legendários com dados",
              "Diagnóstico de como o quiz fechado limita vendas", 
              "Recomendação: abrir o funil para qualquer homem que queira se preparar"
            ]}
            className="max-w-3xl mx-auto"
          />
        </FadeIn>
      </div>

    </div>
  </SlideWrapper>
);

export default Slide06ThiagoLegendarios;