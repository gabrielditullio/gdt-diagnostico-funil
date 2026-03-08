import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";

const Slide00Capa = () => (
  <SlideWrapper theme="dark" className="items-center justify-center text-center">
    <FadeIn>
      <h1 className="text-5xl md:text-7xl font-black tracking-tight" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
        Diagnóstico de Funil
      </h1>
      <p className="mt-4 text-lg opacity-60">Felipe Marinho × DT Coproduções</p>
    </FadeIn>
  </SlideWrapper>
);

export default Slide00Capa;
