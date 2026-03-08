import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";

const Slide02Legendarios = () => (
  <SlideWrapper theme="dark">
    <FadeIn><h2 className="text-3xl md:text-5xl font-bold">O Problema Invisível</h2></FadeIn>
    <FadeIn delay={200}><p className="mt-2 opacity-60 text-lg">O Balde Furado</p></FadeIn>
  </SlideWrapper>
);

export default Slide02Legendarios;
