import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";

const Slide08ProgramaCompleto = () => (
  <SlideWrapper theme="light">
    <FadeIn><h2 className="text-3xl md:text-5xl font-bold">Degrau 1 — A Isca</h2></FadeIn>
    <FadeIn delay={200}><p className="mt-2 opacity-60 text-lg">Grátis</p></FadeIn>
  </SlideWrapper>
);

export default Slide08ProgramaCompleto;
