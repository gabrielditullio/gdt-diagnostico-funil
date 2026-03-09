import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dumbbell, Apple, Crown } from "lucide-react";

const Slide13Site = () => (
  <SlideWrapper theme="light">
    <FadeIn>
      <h2 className="text-center mb-12 text-gray-900 font-bold" style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)" }}>
        O Trunfo: Felipe + Camila = Dupla Imbatível
      </h2>
    </FadeIn>

    {/* Equação Visual */}
    <FadeIn delay={300} className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
      {/* Card Felipe */}
      <Card className="w-48 h-56 flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100 border-2" style={{ borderColor: "#D35400" }}>
        <CardContent className="flex flex-col items-center justify-center h-full p-6">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: "#D35400" }}>
            <Dumbbell size={32} className="text-white" />
          </div>
          <h3 className="text-2xl font-black mb-1" style={{ color: "#D35400" }}>FELIPE</h3>
          <p className="text-sm font-bold text-gray-700">TREINO</p>
        </CardContent>
      </Card>

      {/* Sinal de + */}
      <div className="text-6xl font-black text-gray-400 md:rotate-0 rotate-90">+</div>

      {/* Card Camila */}
      <Card className="w-48 h-56 flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-green-100 border-2" style={{ borderColor: "#27AE60" }}>
        <CardContent className="flex flex-col items-center justify-center h-full p-6 relative">
          <Badge className="absolute top-2 right-2 text-xs px-2 py-0.5 bg-green-600 text-white border-none">
            CRN 21.029
          </Badge>
          <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: "#27AE60" }}>
            <Apple size={32} className="text-white" />
          </div>
          <h3 className="text-2xl font-black mb-1" style={{ color: "#27AE60" }}>CAMILA</h3>
          <p className="text-sm font-bold text-gray-700">NUTRIÇÃO</p>
        </CardContent>
      </Card>

      {/* Sinal de = */}
      <div className="text-6xl font-black text-gray-400 md:rotate-0 rotate-90">=</div>

      {/* Card Resultado */}
      <Card className="w-56 h-56 flex flex-col items-center justify-center bg-gradient-to-br from-yellow-50 to-amber-100 border-4" style={{ borderColor: "#D4A853" }}>
        <CardContent className="flex flex-col items-center justify-center h-full p-6">
          <Crown size={40} style={{ color: "#D4A853" }} className="mb-3" />
          <h3 className="text-xl font-black text-center leading-tight" style={{ color: "#D4A853" }}>
            MÉTODO GG<br/>COMPLETO
          </h3>
        </CardContent>
      </Card>
    </FadeIn>

    {/* Mini-escada mostrando onde Camila aparece */}
    <FadeIn delay={600} className="w-full max-w-2xl mx-auto mb-10">
      <h4 className="text-center font-bold text-lg mb-4 text-gray-700">
        Em quais degraus a Camila aparece:
      </h4>
      <div className="flex items-end justify-center gap-2">
        {[
          { step: 1, label: "Isca", hasCamila: false },
          { step: 2, label: "Entrada", hasCamila: true },
          { step: 3, label: "Programa", hasCamila: true },
          { step: 4, label: "VIP", hasCamila: true },
          { step: 5, label: "Comunidade", hasCamila: true }
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <div
              className="w-16 h-20 rounded-lg flex items-center justify-center border-2 transition-all"
              style={{
                backgroundColor: item.hasCamila ? "#27AE60" : "#CCCCCC",
                borderColor: item.hasCamila ? "#1E8449" : "#999999",
                height: `${60 + item.step * 12}px`
              }}
            >
              <span className="text-white font-black text-2xl">{item.step}</span>
            </div>
            <span className="text-xs mt-2 text-gray-600 font-semibold">{item.label}</span>
          </div>
        ))}
      </div>
      <p className="text-center text-sm mt-4 text-gray-600 font-medium">
        <span style={{ color: "#CCCCCC" }}>■</span> Felipe sozinho | <span style={{ color: "#27AE60" }}>■</span> Felipe + Camila
      </p>
    </FadeIn>

    {/* Card de Cross-sell */}
    <FadeIn delay={900} className="w-full max-w-3xl mx-auto mb-8">
      <Card className="border-2" style={{ backgroundColor: "#1A1A1A", borderColor: "#D35400" }}>
        <CardContent className="p-6">
          <h4 className="font-bold text-lg mb-3 text-center" style={{ color: "#D35400" }}>
            💡 Cross-sell Estratégico no Checkout
          </h4>
          <div className="bg-white/5 p-4 rounded-lg border border-white/10">
            <p className="text-white text-sm leading-relaxed italic">
              "Quer adicionar o <span className="font-bold" style={{ color: "#27AE60" }}>Plano Alimentar de Alta Performance</span> por Camila Marinho — Nutricionista <span className="font-semibold">CRN 21.029</span> — por mais <span className="font-bold" style={{ color: "#D35400" }}>R$97</span>?"
            </p>
          </div>
        </CardContent>
      </Card>
    </FadeIn>

    {/* Texto Final */}
    <FadeIn delay={1100} className="w-full max-w-3xl mx-auto">
      <p className="text-center text-base md:text-lg leading-relaxed text-gray-700 font-medium">
        Qualquer pessoa que treina sabe que resultado é <span className="font-bold" style={{ color: "#D35400" }}>treino</span> + <span className="font-bold" style={{ color: "#27AE60" }}>dieta</span>. Vocês são a <span className="font-black text-xl" style={{ color: "#D4A853" }}>solução completa</span>. Nenhum concorrente pode replicar isso.
      </p>
    </FadeIn>
  </SlideWrapper>
);

export default Slide13Site;
