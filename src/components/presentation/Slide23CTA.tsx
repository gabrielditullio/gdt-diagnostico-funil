import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Slide23CTA = () => (
  <SlideWrapper theme="light">
    {/* Texto de Abertura */}
    <FadeIn>
      <p className="text-center text-lg md:text-xl leading-relaxed text-gray-700 max-w-4xl mx-auto mb-12 font-medium">
        Felipe, eu te mostrei onde teu negócio está, onde pode chegar, e o caminho entre os dois pontos. <span className="font-black text-gray-900">Agora é com você.</span>
      </p>
    </FadeIn>

    {/* 3 Cards de Decisão */}
    <FadeIn delay={300} className="w-full max-w-6xl mx-auto mb-12">
      <div className="grid md:grid-cols-3 gap-6">
        {/* CARD 1 - Continuar como está */}
        <Card 
          className="border-2 opacity-75 hover:opacity-100 transition-opacity"
          style={{ borderColor: "#999" }}
        >
          <CardContent className="p-6">
            <div className="text-5xl mb-4 text-center">⏸️</div>
            <h3 className="text-xl font-black text-center mb-4 text-gray-800">
              Continuar como está
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-center">
              Depender do Instagram orgânico e de quem chega por conta própria. Funciona, mas o crescimento é lento e você perde oportunidade todo dia.
            </p>
          </CardContent>
        </Card>

        {/* CARD 2 - Montar sozinho */}
        <Card 
          className="border-2 hover:scale-105 transition-all"
          style={{ borderColor: "#3498DB" }}
        >
          <CardContent className="p-6">
            <div className="text-5xl mb-4 text-center">🔧</div>
            <h3 className="text-xl font-black text-center mb-4" style={{ color: "#3498DB" }}>
              Montar sozinho
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-center">
              É possível. Vai levar mais tempo, vai ter mais erro, mas tudo que está nesse documento pode ser pesquisado e implementado.
            </p>
          </CardContent>
        </Card>

        {/* CARD 3 - A gente monta junto (DESTACADO) */}
        <Card 
          className="border-4 relative shadow-2xl hover:scale-110 transition-all"
          style={{ 
            borderColor: "#D35400",
            boxShadow: "0 10px 40px -10px rgba(211, 84, 0, 0.4)"
          }}
        >
          <Badge 
            className="absolute -top-3 -right-3 px-3 py-1 text-xs font-bold"
            style={{ backgroundColor: "#D35400", color: "#FFF" }}
          >
            ⭐ Recomendado
          </Badge>
          
          <CardContent className="p-6">
            <div className="text-5xl mb-4 text-center">🤝</div>
            <h3 className="text-xl font-black text-center mb-4" style={{ color: "#D35400" }}>
              A gente monta junto
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed text-center font-medium">
              Eu pego essa arquitetura inteira e transformo em realidade. Você foca no que faz de melhor: treinar e transformar corpos. Eu cuido da engenharia por trás.
            </p>
          </CardContent>
        </Card>
      </div>
    </FadeIn>

    {/* Seção de Fechamento */}
    <FadeIn delay={600} className="w-full max-w-4xl mx-auto text-center space-y-6">
      {/* Logo/Texto DT Coproduções */}
      <div>
        <p 
          className="text-3xl md:text-4xl font-black tracking-tight mb-2"
          style={{ 
            fontFamily: "'Montserrat', sans-serif",
            color: "#1A1A1A"
          }}
        >
          DT Coproduções
        </p>
        <div className="w-20 h-1 mx-auto rounded-full" style={{ backgroundColor: "#D35400" }} />
      </div>

      {/* Frase de Fechamento */}
      <p className="text-2xl md:text-3xl italic font-semibold leading-relaxed" style={{ color: "#555" }}>
        "O shape de Gigante começa com a decisão de treinar como um."
      </p>

      {/* Nome */}
      <p className="text-lg font-bold text-gray-700">
        Gabriel Di Tullio
      </p>

      {/* Botão CTA */}
      <Button 
        size="lg"
        className="mt-8 px-8 py-6 text-lg font-black hover:scale-110 transition-all"
        style={{ backgroundColor: "#D35400" }}
      >
        Agendar Conversa
      </Button>
    </FadeIn>
  </SlideWrapper>
);

export default Slide23CTA;
