import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";
import AccordionEntregaveis from "./AccordionEntregaveis";
import { Badge } from "@/components/ui/badge";
import { ArrowUp, ArrowRight } from "lucide-react";

const Slide07ProdutoEntrada = () => (
  <SlideWrapper theme="dark">
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
      
      {/* Header */}
      <div className="text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">A Escada do Seu Negócio</h2>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="text-xl opacity-70">Dois caminhos de entrada. Mesma escada. Mesmo destino.</p>
        </FadeIn>
      </div>

      {/* Ladder Visualization */}
      <div className="relative">
        
        {/* Value Arrow (left side) */}
        <div className="absolute -left-16 top-0 bottom-0 flex flex-col items-center justify-center">
          <ArrowUp size={24} style={{ color: "#D35400" }} />
          <span className="text-sm font-medium mt-2 -rotate-90 whitespace-nowrap" style={{ color: "#D35400" }}>
            VALOR
          </span>
        </div>

        {/* Main Steps Container */}
        <div className="flex items-end justify-center gap-8 mb-8 relative">
          
          {/* Step 1 - A ISCA */}
          <FadeIn delay={400}>
            <div className="flex flex-col items-center gap-3">
              <Badge className="bg-green-600 text-white text-xs px-3 py-1 rounded-full">Grátis</Badge>
              <div 
                className="w-24 rounded-t-lg relative overflow-hidden"
                style={{ height: "80px" }}
              >
                {/* Split bar - Orange and Green */}
                <div className="absolute inset-0 flex">
                  <div 
                    className="flex-1 flex flex-col items-center justify-center text-center p-1"
                    style={{ backgroundColor: "#D35400" }}
                  >
                    <span className="text-[9px] font-medium text-white leading-tight">PDF Shape Gigante</span>
                  </div>
                  <div 
                    className="flex-1 flex flex-col items-center justify-center text-center p-1"
                    style={{ backgroundColor: "#27AE60" }}
                  >
                    <span className="text-[9px] font-medium text-white leading-tight">Checklist Montanha</span>
                  </div>
                </div>
              </div>
              <span className="text-xs font-semibold opacity-80">A ISCA</span>
            </div>
          </FadeIn>

          {/* Step 2 - ENTRADA */}
          <FadeIn delay={900}>
            <div className="flex flex-col items-center gap-3">
              <Badge className="text-white text-xs px-3 py-1 rounded-full" style={{ backgroundColor: "#D35400" }}>R$37-47</Badge>
              <div 
                className="w-24 rounded-t-lg relative overflow-hidden"
                style={{ height: "120px" }}
              >
                <div className="absolute inset-0 flex">
                  <div 
                    className="flex-1 flex flex-col items-center justify-center text-center p-1"
                    style={{ backgroundColor: "#D35400" }}
                  >
                    <span className="text-[9px] font-medium text-white leading-tight">Dieta do GG R$47</span>
                  </div>
                  <div 
                    className="flex-1 flex flex-col items-center justify-center text-center p-1"
                    style={{ backgroundColor: "#27AE60" }}
                  >
                    <span className="text-[9px] font-medium text-white leading-tight">eBook Trekking R$37</span>
                  </div>
                </div>
              </div>
              <span className="text-xs font-semibold opacity-80">ENTRADA</span>
            </div>
          </FadeIn>

          {/* Step 3 - PROGRAMA */}
          <FadeIn delay={1400}>
            <div className="flex flex-col items-center gap-3">
              <Badge className="text-white text-xs px-3 py-1 rounded-full" style={{ backgroundColor: "#D35400" }}>R$297</Badge>
              <div 
                className="w-24 rounded-t-lg relative overflow-hidden"
                style={{ height: "180px" }}
              >
                <div className="absolute inset-0 flex">
                  <div 
                    className="flex-1 flex flex-col items-center justify-center text-center p-1"
                    style={{ backgroundColor: "#D35400" }}
                  >
                    <span className="text-[9px] font-medium text-white leading-tight">Protocolo GG</span>
                  </div>
                  <div 
                    className="flex-1 flex flex-col items-center justify-center text-center p-1"
                    style={{ backgroundColor: "#27AE60" }}
                  >
                    <span className="text-[9px] font-medium text-white leading-tight">Trekking Fit 8 semanas</span>
                  </div>
                </div>
              </div>
              <span className="text-xs font-semibold opacity-80">PROGRAMA</span>
            </div>
          </FadeIn>

          {/* Step 4 - PREMIUM (MERGED COLORS) */}
          <FadeIn delay={1900}>
            <div className="flex flex-col items-center gap-3">
              <Badge className="text-white text-xs px-3 py-1 rounded-full" style={{ background: "linear-gradient(135deg, #F39C12, #D35400, #27AE60)" }}>R$2.997</Badge>
              <div 
                className="w-24 rounded-t-lg flex items-center justify-center text-center p-2"
                style={{ 
                  height: "240px",
                  background: "linear-gradient(135deg, #F39C12, #D35400, #27AE60)"
                }}
              >
                <span className="text-[10px] font-medium text-white leading-tight">Consultoria Felipe + Camila</span>
              </div>
              <span className="text-xs font-semibold opacity-80">PREMIUM</span>
            </div>
          </FadeIn>

        </div>

        {/* Community Bar (Horizontal at base) */}
        <FadeIn delay={2400}>
          <div className="flex flex-col items-center gap-3">
            <div 
              className="w-full max-w-md h-16 rounded-lg flex items-center justify-center relative overflow-hidden"
              style={{ background: "linear-gradient(90deg, #D35400, #F39C12, #27AE60)" }}
            >
              <span className="text-sm font-semibold text-white">COMUNIDADE GG</span>
              <Badge className="absolute top-2 right-2 bg-black/30 text-white text-[10px] px-2 py-1">R$47-97/mês</Badge>
            </div>
            <p className="text-xs opacity-60 text-center max-w-xs">
              Receita recorrente — funciona em paralelo a todos os degraus
            </p>
          </div>
        </FadeIn>

        {/* Investment Arrow (bottom) */}
        <div className="absolute -bottom-12 left-0 right-0 flex items-center justify-center">
          <ArrowRight size={24} style={{ color: "#D35400" }} />
          <span className="text-sm font-medium ml-2" style={{ color: "#D35400" }}>
            INVESTIMENTO
          </span>
        </div>

      </div>

      {/* Narrative Text */}
      <FadeIn delay={2900}>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed opacity-90">
            Repara: o Marcos entra por um lado e o Thiago por outro. 
            Mas os dois sobem a mesma escada e chegam no mesmo lugar.
          </p>
        </div>
      </FadeIn>

      {/* Accordion Deliverables */}
      <FadeIn delay={3200}>
        <AccordionEntregaveis
          title="Entregáveis da Escada Completa"
          items={[
            "Mapa visual impresso/digital da escada completa",
            "Explicação de como cada produto existente se encaixa", 
            "Lista dos produtos novos a criar: 2 iscas gratuitas + comunidade mensal"
          ]}
          className="max-w-2xl mx-auto"
        />
      </FadeIn>

    </div>
  </SlideWrapper>
);

export default Slide07ProdutoEntrada;
