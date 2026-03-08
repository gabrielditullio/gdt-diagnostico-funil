import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";
import { Badge } from "@/components/ui/badge";
import StairIndicator from "./StairIndicator";
import TabsLinhas from "./TabsLinhas";
import AccordionEntregaveis from "./AccordionEntregaveis";
import FooterQuote from "./FooterQuote";
import { ArrowRight, Smartphone, Mail, FileText, CheckCircle2 } from "lucide-react";

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
          <div className="flex gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100 shadow-sm">
            <div className="w-10 h-12 bg-red-100 rounded-md flex items-center justify-center shrink-0">
              <FileText size={20} className="text-red-500" />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="text-[10px] font-bold text-gray-800 line-clamp-2 leading-tight mb-1">
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

const Slide08ProgramaCompleto = () => (
  <SlideWrapper theme="light">
    <div className="flex justify-between items-start mb-6">
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

    <FadeIn delay={300} className="w-full max-w-4xl mx-auto flex-1 flex flex-col justify-center mb-6">
      <TabsLinhas tabs={tabs} />
      
      <p className="text-center text-gray-600 text-sm md:text-base mt-8 max-w-2xl mx-auto font-medium leading-relaxed">
        As duas iscas fazem a mesma coisa: transformam um desconhecido em contato. A partir daí, você pode falar com ele todo dia, toda semana, pelo tempo que quiser.
      </p>
    </FadeIn>

    <FadeIn delay={500} className="w-full max-w-2xl mx-auto mt-auto">
      <AccordionEntregaveis 
        title="O que será construído neste degrau"
        items={[
          "2 PDFs com design profissional e conteúdo real (GG + Trekking)",
          "2 landing pages prontas e publicadas",
          "Sistema de email configurado para armazenar contatos",
          "10 emails automáticos escritos (5 por linha) — a novela que vende sozinha"
        ]}
      />
      <FooterQuote text="Se o Instagram acabar amanhã, você ainda tem o contato dele." className="mt-6" />
    </FadeIn>
  </SlideWrapper>
);

export default Slide08ProgramaCompleto;
