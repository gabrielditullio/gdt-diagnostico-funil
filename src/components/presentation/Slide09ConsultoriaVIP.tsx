import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";
import { Badge } from "@/components/ui/badge";
import StairIndicator from "./StairIndicator";
import TabsLinhas from "./TabsLinhas";
import AccordionEntregaveis from "./AccordionEntregaveis";
import FooterQuote from "./FooterQuote";
import { PlayCircle, CreditCard } from "lucide-react";

const tabs = [
  {
    label: "Linha GG",
    color: "#D35400",
    content: (
      <div className="flex flex-col items-center justify-center py-4 w-full">
        <div className="w-full max-w-sm bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300">
          <div className="w-full aspect-video bg-gray-900 relative flex items-center justify-center group cursor-pointer overflow-hidden">
            <div className="absolute inset-0 opacity-50 bg-[url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070')] bg-cover bg-center mix-blend-overlay scale-105 group-hover:scale-100 transition-transform duration-700"></div>
            <PlayCircle size={48} className="text-white opacity-90 group-hover:scale-110 transition-transform z-10" />
            <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-0.5 rounded text-[10px] text-white font-medium z-10">3:45</div>
          </div>
          <div className="p-6 text-center">
            <h4 className="font-bold text-xl mb-1 text-gray-900">Dieta do GG</h4>
            <p className="text-sm text-gray-500 mb-5">O método simples para secar</p>
            <button className="w-full bg-[#D35400] text-white font-bold py-3 rounded-lg shadow-md hover:bg-[#A04000] transition-colors flex items-center justify-center gap-2">
              <CreditCard size={18} />
              COMPRAR AGORA — R$47
            </button>
          </div>
        </div>
      </div>
    )
  },
  {
    label: "Linha Trekking",
    color: "#27AE60",
    content: (
      <div className="flex flex-col items-center justify-center py-4 w-full">
        <div className="w-full max-w-sm bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300">
          <div className="w-full aspect-video bg-gray-900 relative flex items-center justify-center group cursor-pointer overflow-hidden">
            <div className="absolute inset-0 opacity-50 bg-[url('https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=2000')] bg-cover bg-center mix-blend-overlay scale-105 group-hover:scale-100 transition-transform duration-700"></div>
            <PlayCircle size={48} className="text-white opacity-90 group-hover:scale-110 transition-transform z-10" />
            <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-0.5 rounded text-[10px] text-white font-medium z-10">4:12</div>
          </div>
          <div className="p-6 text-center">
            <h4 className="font-bold text-xl mb-1 text-gray-900">eBook Trekking Fit</h4>
            <p className="text-sm text-gray-500 mb-5">Preparação física para trilhas</p>
            <button className="w-full bg-[#27AE60] text-white font-bold py-3 rounded-lg shadow-md hover:bg-[#1E8449] transition-colors flex items-center justify-center gap-2">
              <CreditCard size={18} />
              COMPRAR AGORA — R$37
            </button>
          </div>
        </div>
      </div>
    )
  }
];

const Slide09ConsultoriaVIP = () => (
  <SlideWrapper theme="light">
    <div className="flex justify-between items-start mb-6">
      <FadeIn>
        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">Degrau 2</span>
        <div className="flex items-center gap-4">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">O Produto de Entrada</h2>
          <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200 text-sm md:text-base border-none px-3 py-1 font-bold">
            R$37-47
          </Badge>
        </div>
      </FadeIn>
      <FadeIn delay={200}>
        <StairIndicator currentStep={2} totalSteps={5} className="scale-125 origin-top-right opacity-80" />
      </FadeIn>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-8 flex-1 items-center">
      <FadeIn delay={300} className="flex flex-col w-full">
        <TabsLinhas tabs={tabs} />
      </FadeIn>

      <FadeIn delay={400} className="flex flex-col gap-5 justify-center">
        {/* Função Secreta Box */}
        <div className="bg-[#1A1A1A] border-l-[6px] border-[#D35400] rounded-r-xl p-6 shadow-2xl text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#D35400] opacity-10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
          <h3 className="text-lg font-bold text-[#D35400] mb-3 flex items-center gap-2">
            A Função Secreta deste Produto
          </h3>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed font-medium">
            O objetivo <strong className="text-white">NÃO é dar lucro</strong>. É transformar um CURIOSO em COMPRADOR. Quem pagou, presta atenção. Quem pagou, confia mais. Quem pagou, compra de novo.
          </p>
        </div>

        {/* Matemática Progress Bars */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg flex flex-col gap-5 relative overflow-hidden">
          <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">A Matemática</h4>
          
          <div className="space-y-2">
            <div className="flex justify-between text-xs md:text-sm font-bold">
              <span className="text-gray-600">Custo por comprador</span>
              <span className="text-red-600">~R$50-80</span>
            </div>
            <div className="w-full h-2.5 bg-red-50 rounded-full overflow-hidden border border-red-100">
              <div className="h-full bg-gradient-to-r from-red-400 to-red-600 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-xs md:text-sm font-bold">
              <span className="text-gray-600">Receita <span className="font-normal opacity-70">(produto + bump + upsell)</span></span>
              <span className="text-green-600">~R$90-130</span>
            </div>
            <div className="w-full h-2.5 bg-green-50 rounded-full overflow-hidden border border-green-100">
              <div className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>

          <div className="mt-2 pt-4 border-t border-gray-100">
            <p className="text-center font-bold text-[#D35400] text-sm md:text-base tracking-tight">
              O custo de atrair clientes se <span className="bg-[#D35400] text-white px-2 py-0.5 rounded">PAGA SOZINHO</span>
            </p>
          </div>
        </div>
      </FadeIn>
    </div>

    <FadeIn delay={500} className="w-full max-w-2xl mx-auto mt-auto">
      <AccordionEntregaveis 
        title="O que será construído neste degrau"
        items={[
          "2 páginas de venda com vídeo curto (3-5 min)",
          "Configuração de order bumps no checkout",
          "Configuração de upsell pós-compra",
          "Integração de pagamento Hotmart"
        ]}
      />
      <FooterQuote text="Quem pagou uma vez, paga de novo." className="mt-6" />
    </FadeIn>
  </SlideWrapper>
);

export default Slide09ConsultoriaVIP;
