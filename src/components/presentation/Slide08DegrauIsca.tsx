import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";
import { Badge } from "@/components/ui/badge";
import StairIndicator from "./StairIndicator";
import TabsLinhas from "./TabsLinhas";
import AccordionEntregaveis from "./AccordionEntregaveis";
import FooterQuote from "./FooterQuote";
import { ArrowRight, Smartphone, Mail, FileText, CheckCircle2, Check } from "lucide-react";

const tabs = [
  {
    label: "Linha GG",
    color: "#D35400",
    content: (
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 py-6">
        {/* Celular */}
        <div className="w-48 h-80 bg-white border-[6px] border-gray-900 rounded-[2rem] p-4 flex flex-col shadow-xl relative overflow-hidden">
          <div className="text-[11px] font-bold text-center mb-3 leading-tight text-gray-800">
            OS 3 EXERCÍCIOS QUE LÉO SANTANA NUNCA PULA
          </div>
          <div className="bg-gray-100 rounded-md w-full flex-1 mb-3 flex items-center justify-center">
            <Smartphone size={24} className="text-gray-300" />
          </div>
          <div className="w-full h-7 bg-gray-50 rounded mb-2 border border-gray-200 flex items-center px-2">
            <span className="text-[9px] text-gray-400">Seu melhor email...</span>
          </div>
          <button className="w-full bg-[#D35400] text-white text-[10px] font-bold py-2 rounded shadow-md hover:bg-[#A04000] transition-colors">
            QUERO O PDF GRÁTIS
          </button>
        </div>
        
        {/* Seta animada */}
        <div className="flex flex-col items-center animate-pulse text-[#D35400] md:-rotate-0 rotate-90 my-2 md:my-0">
          <span className="text-[10px] font-bold mb-1 hidden md:block uppercase tracking-wider">automático</span>
          <ArrowRight size={28} />
        </div>

        {/* Email */}
        <div className="w-56 bg-white border border-gray-200 rounded-xl p-4 shadow-lg">
          <div className="flex items-center gap-3 mb-3 border-b border-gray-100 pb-3">
            <div className="w-8 h-8 rounded-full bg-[#D35400]/10 flex items-center justify-center">
              <Mail size={14} className="text-[#D35400]" />
            </div>
            <div>
              <div className="text-xs font-bold text-gray-800">Equipe GG</div>
              <div className="text-[9px] text-gray-500">Aqui está seu PDF...</div>
            </div>
          </div>
          <div className="flex gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100 shadow-sm overflow-hidden">
            <div className="w-10 h-12 bg-red-100 rounded-md flex items-center justify-center shrink-0">
              <FileText size={20} className="text-red-500" />
            </div>
            <div className="flex-1 min-w-0 flex flex-col justify-center">
              <div className="text-[10px] font-bold text-gray-800 truncate leading-tight mb-1">
                3_Exercicios_LeoSantana.pdf
              </div>
              <div className="text-[9px] text-gray-400">1.2 MB</div>
            </div>
          </div>
          <p className="text-[11px] mt-4 font-semibold text-center text-gray-600 bg-gray-50 py-2 rounded-lg border border-gray-100">
            O cara coloca o email.<br/><span className="text-[#D35400]">Pronto — agora é SEU.</span>
          </p>
        </div>
      </div>
    )
  },
  {
    label: "Linha Trekking",
    color: "#27AE60",
    content: (
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 py-6">
        {/* Celular */}
        <div className="w-48 h-80 bg-white border-[6px] border-gray-900 rounded-[2rem] p-4 flex flex-col shadow-xl relative overflow-hidden">
          <div className="text-[11px] font-bold text-center mb-3 leading-tight text-gray-800">
            VOCÊ ESTÁ PRONTO PRA MONTANHA? 7 TESTES
          </div>
          <div className="bg-gray-100 rounded-md w-full flex-1 mb-3 flex items-center justify-center">
            <Smartphone size={24} className="text-gray-300" />
          </div>
          <div className="w-full h-7 bg-gray-50 rounded mb-2 border border-gray-200 flex items-center px-2">
            <span className="text-[9px] text-gray-400">Seu melhor email...</span>
          </div>
          <button className="w-full bg-[#27AE60] text-white text-[10px] font-bold py-2 rounded shadow-md hover:bg-[#1E8449] transition-colors">
            QUERO O CHECKLIST GRÁTIS
          </button>
        </div>
        
        {/* Seta animada */}
        <div className="flex flex-col items-center animate-pulse text-[#27AE60] md:-rotate-0 rotate-90 my-2 md:my-0">
          <span className="text-[10px] font-bold mb-1 hidden md:block uppercase tracking-wider">automático</span>
          <ArrowRight size={28} />
        </div>

        {/* Email */}
        <div className="w-56 bg-white border border-gray-200 rounded-xl p-4 shadow-lg">
          <div className="flex items-center gap-3 mb-3 border-b border-gray-100 pb-3">
            <div className="w-8 h-8 rounded-full bg-[#27AE60]/10 flex items-center justify-center">
              <Mail size={14} className="text-[#27AE60]" />
            </div>
            <div>
              <div className="text-xs font-bold text-gray-800">Felipe Marinho</div>
              <div className="text-[9px] text-gray-500">Aqui está seu checklist...</div>
            </div>
          </div>
          <div className="flex gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100 shadow-sm">
            <div className="w-10 h-12 bg-green-100 rounded-md flex items-center justify-center shrink-0">
              <CheckCircle2 size={20} className="text-green-600" />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="text-[10px] font-bold text-gray-800 line-clamp-2 leading-tight mb-1">
                Checklist_Montanha.pdf
              </div>
              <div className="text-[9px] text-gray-400">800 KB</div>
            </div>
          </div>
          <p className="text-[11px] mt-4 font-semibold text-center text-gray-600 bg-gray-50 py-2 rounded-lg border border-gray-100">
            O cara coloca o email.<br/><span className="text-[#27AE60]">Pronto — agora é SEU.</span>
          </p>
        </div>
      </div>
    )
  }
];

const Slide08DegrauIsca = () => (
  <SlideWrapper theme="light">
    <div className="flex justify-between items-start mb-4">
      <FadeIn>
        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">Degrau 1</span>
        <div className="flex items-center gap-4">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">A Isca</h2>
          <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-200 text-sm md:text-base border-none px-3 py-1 font-bold">
            Grátis
          </Badge>
        </div>
      </FadeIn>
      <FadeIn delay={200}>
        <StairIndicator currentStep={1} totalSteps={5} className="scale-125 origin-top-right opacity-80" />
      </FadeIn>
    </div>

    {/* Narrativa */}
    <FadeIn delay={200} className="max-w-3xl mx-auto mb-4">
      <div className="space-y-3 text-sm md:text-base text-gray-700 leading-relaxed">
        <p>
          O teu quiz do Trekking Fit já faz algo muito importante: <strong className="text-gray-900">captura o email e o WhatsApp</strong> de quem passa por ele. Isso é ótimo. Mas ele só captura <strong className="text-gray-900">UMA fatia</strong>.
        </p>
        <p className="font-semibold text-gray-800">A isca gratuita resolve as duas fatias que estão escapando:</p>
        <p>
          <span className="inline-block w-3 h-3 rounded-full mr-2" style={{ backgroundColor: "#D35400" }}></span>
          <strong>Pra linha do Shape:</strong> "Os 3 Exercícios Secretos do Shape do Gigante" — PDF grátis em troca do email. Qualquer pessoa que segue teu Instagram por causa do Léo Santana pode baixar. <em>Sem quiz, sem barreira.</em>
        </p>
        <p>
          <span className="inline-block w-3 h-3 rounded-full mr-2" style={{ backgroundColor: "#27AE60" }}></span>
          <strong>Pra linha do Trekking aberto:</strong> "Checklist: Você Está Pronto pra Montanha? 7 testes de prontidão" — PDF grátis. Pra <strong>QUALQUER</strong> homem que quer se preparar, não só quem já foi ao Legendários.
        </p>
      </div>
    </FadeIn>

    <FadeIn delay={300} className="w-full max-w-4xl mx-auto flex-1 flex flex-col justify-center mb-4">
      <TabsLinhas tabs={tabs} />
    </FadeIn>

    {/* Diagrama de cobertura */}
    <FadeIn delay={400} className="w-full max-w-3xl mx-auto mb-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
        {/* Bloco 1 - Quiz existente */}
        <div className="flex-1 max-w-[200px] p-3 rounded-lg border-2 border-solid" style={{ borderColor: "#27AE60", backgroundColor: "rgba(39, 174, 96, 0.05)" }}>
          <div className="flex items-center gap-2 mb-2">
            <Check size={16} style={{ color: "#27AE60" }} />
            <span className="text-xs font-bold text-gray-800">Quiz Trekking Fit</span>
          </div>
          <span className="text-[10px] text-gray-500 block">Já captura ex-Legendários</span>
        </div>

        <ArrowRight size={20} className="text-gray-400 rotate-90 md:rotate-0 shrink-0" />

        {/* Bloco 2 - Isca GG */}
        <div className="flex-1 max-w-[200px] p-3 rounded-lg border-2 border-dashed" style={{ borderColor: "#D35400", backgroundColor: "rgba(211, 84, 0, 0.05)" }}>
          <div className="flex items-center gap-2 mb-2">
            <FileText size={16} style={{ color: "#D35400" }} />
            <span className="text-xs font-bold text-gray-800">Isca GG</span>
            <span className="text-[8px] px-1 py-0.5 rounded font-bold" style={{ backgroundColor: "#D35400", color: "white" }}>NOVA</span>
          </div>
          <span className="text-[10px] text-gray-500 block">Captura público do shape</span>
        </div>

        <ArrowRight size={20} className="text-gray-400 rotate-90 md:rotate-0 shrink-0" />

        {/* Bloco 3 - Isca Trekking aberta */}
        <div className="flex-1 max-w-[200px] p-3 rounded-lg border-2 border-dashed" style={{ borderColor: "#27AE60", backgroundColor: "rgba(39, 174, 96, 0.05)" }}>
          <div className="flex items-center gap-2 mb-2">
            <FileText size={16} style={{ color: "#27AE60" }} />
            <span className="text-xs font-bold text-gray-800">Isca Trekking</span>
            <span className="text-[8px] px-1 py-0.5 rounded font-bold" style={{ backgroundColor: "#27AE60", color: "white" }}>NOVA</span>
          </div>
          <span className="text-[10px] text-gray-500 block">Captura não-Legendários</span>
        </div>
      </div>

      {/* Barra de cobertura total */}
      <div className="mt-4 flex items-center justify-center gap-2 px-4 py-2 rounded-lg" style={{ backgroundColor: "rgba(39, 174, 96, 0.1)", border: "1px solid #27AE60" }}>
        <Check size={18} style={{ color: "#27AE60" }} />
        <span className="text-sm font-bold" style={{ color: "#27AE60" }}>= COBERTURA TOTAL</span>
      </div>
    </FadeIn>

    <FadeIn delay={500} className="w-full max-w-2xl mx-auto mt-auto">
      <AccordionEntregaveis 
        title="O que será construído neste degrau"
        items={[
          "2 PDFs com design profissional e conteúdo real (GG + Trekking aberto)",
          "2 landing pages prontas e publicadas",
          "Sistema de email configurado para armazenar contatos",
          "10 emails automáticos escritos (5 por linha) — a novela que vende sozinha",
          "Integração: quem baixa a isca do Trekking e demonstra interesse no Legendários é direcionado pro quiz existente"
        ]}
      />
      <FooterQuote text="Se o Instagram acabar amanhã, você ainda tem o contato dele." className="mt-4" />
    </FadeIn>
  </SlideWrapper>
);

export default Slide08DegrauIsca;
