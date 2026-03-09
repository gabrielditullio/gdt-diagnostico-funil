import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { AlertTriangle, Smartphone, Monitor, Instagram, Youtube } from "lucide-react";

const Slide19Site = () => (
  <SlideWrapper theme="light">
    {/* Alerta Site Fora do Ar */}
    <FadeIn>
      <Card className="border-2 mb-8 max-w-3xl mx-auto" style={{ backgroundColor: "#FFF0F0", borderColor: "#C0392B" }}>
        <CardContent className="flex items-center gap-4 py-4">
          <AlertTriangle size={32} style={{ color: "#C0392B" }} />
          <div>
            <p className="font-black text-lg" style={{ color: "#C0392B" }}>
              felipemarinho.com.br está FORA DO AR
            </p>
            <p className="text-sm text-gray-600">Quem pesquisa seu nome no Google não encontra nada.</p>
          </div>
        </CardContent>
      </Card>
    </FadeIn>

    <FadeIn delay={200}>
      <h2 className="text-center mb-10 text-gray-900 font-bold" style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)" }}>
        O Quartel-General: Seu Site
      </h2>
    </FadeIn>

    {/* Wireframes lado a lado */}
    <FadeIn delay={400} className="w-full max-w-5xl mx-auto mb-10">
      <div className="flex flex-col md:flex-row items-start justify-center gap-8">
        {/* Desktop Wireframe */}
        <div className="flex-1 max-w-lg">
          <div className="flex items-center gap-2 mb-3">
            <Monitor size={18} className="text-gray-500" />
            <span className="text-xs font-bold text-gray-500 uppercase">Desktop</span>
          </div>
          <div className="bg-white border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden">
            {/* Browser bar */}
            <div className="bg-gray-100 px-3 py-2 flex items-center gap-2 border-b border-gray-200">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-white rounded px-2 py-0.5 text-xs text-gray-400">felipemarinho.com.br</div>
            </div>

            {/* Hero */}
            <div className="p-6 bg-gradient-to-r from-gray-900 to-gray-800">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-600 rounded-full shrink-0" />
                <div className="flex-1">
                  <div className="h-4 bg-white/30 rounded w-3/4 mb-2" />
                  <div className="h-3 bg-white/20 rounded w-1/2 mb-3" />
                  <div className="h-8 rounded w-40" style={{ backgroundColor: "#D35400" }}>
                    <span className="text-white text-xs font-bold flex items-center justify-center h-full">Quero o PDF Grátis</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Resultados */}
            <div className="p-4 border-b border-gray-100">
              <div className="h-3 bg-gray-200 rounded w-40 mb-3" />
              <div className="flex gap-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex-1 bg-gray-50 border border-gray-200 rounded p-2">
                    <div className="h-2 bg-gray-200 rounded w-full mb-1" />
                    <div className="h-2 bg-gray-200 rounded w-2/3" />
                  </div>
                ))}
              </div>
            </div>

            {/* Programas (escadinha) */}
            <div className="p-4 border-b border-gray-100">
              <div className="h-3 bg-gray-200 rounded w-28 mb-3" />
              <div className="flex items-end gap-1 justify-center">
                {[12, 20, 28, 36, 44].map((h, i) => (
                  <div key={i} className="w-8 rounded-t" style={{ height: `${h}px`, backgroundColor: "#D35400" }} />
                ))}
              </div>
            </div>

            {/* Sobre + Footer */}
            <div className="p-4">
              <div className="h-3 bg-gray-200 rounded w-24 mb-2" />
              <div className="h-2 bg-gray-100 rounded w-full mb-1" />
              <div className="h-2 bg-gray-100 rounded w-3/4 mb-4" />
              <div className="flex justify-center gap-3">
                <Instagram size={16} className="text-gray-400" />
                <Youtube size={16} className="text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Wireframe */}
        <div className="w-48">
          <div className="flex items-center gap-2 mb-3">
            <Smartphone size={18} className="text-gray-500" />
            <span className="text-xs font-bold text-gray-500 uppercase">Mobile</span>
          </div>
          <div className="bg-white border-4 border-gray-800 rounded-[2rem] overflow-hidden shadow-lg">
            {/* Notch */}
            <div className="bg-gray-800 h-6 flex justify-center">
              <div className="w-20 h-4 bg-gray-800 rounded-b-xl" />
            </div>

            {/* Hero Mini */}
            <div className="p-3 bg-gradient-to-b from-gray-900 to-gray-800">
              <div className="w-10 h-10 bg-gray-600 rounded-full mx-auto mb-2" />
              <div className="h-2.5 bg-white/30 rounded w-3/4 mx-auto mb-1" />
              <div className="h-2 bg-white/20 rounded w-1/2 mx-auto mb-2" />
              <div className="h-6 rounded w-full" style={{ backgroundColor: "#D35400" }}>
                <span className="text-white text-[8px] font-bold flex items-center justify-center h-full">Quero o PDF Grátis</span>
              </div>
            </div>

            {/* Seções */}
            <div className="p-2 space-y-2">
              <div className="bg-gray-50 p-2 rounded">
                <div className="h-2 bg-gray-200 rounded w-2/3 mb-1" />
                <div className="h-1.5 bg-gray-100 rounded w-full" />
              </div>
              <div className="flex items-end gap-0.5 justify-center py-2">
                {[6, 10, 14, 18, 22].map((h, i) => (
                  <div key={i} className="w-4 rounded-t" style={{ height: `${h}px`, backgroundColor: "#D35400" }} />
                ))}
              </div>
              <div className="flex justify-center gap-2 py-2">
                <Instagram size={12} className="text-gray-400" />
                <Youtube size={12} className="text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>

    <FadeIn delay={700} className="w-full max-w-3xl mx-auto mb-8">
      <p className="text-center text-base md:text-lg leading-relaxed text-gray-700 font-medium">
        Quando alguém pesquisa <span className="font-black text-gray-900">"Felipe Marinho personal"</span> no Google, cai em NADA. Seu site é onde <span className="font-black" style={{ color: "#D35400" }}>TUDO se conecta</span>.
      </p>
    </FadeIn>

  </SlideWrapper>
);

export default Slide19Site;
