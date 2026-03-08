import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";

const Slide03DoisPublicos = () => (
  <SlideWrapper theme="light">
    <FadeIn><h2 className="text-3xl md:text-5xl font-bold">Como Deveria Funcionar</h2></FadeIn>
    <FadeIn delay={200}><p className="mt-2 opacity-60 text-lg">A Escada Conceitual</p></FadeIn>
  </SlideWrapper>
);

export default Slide03DoisPublicos;
