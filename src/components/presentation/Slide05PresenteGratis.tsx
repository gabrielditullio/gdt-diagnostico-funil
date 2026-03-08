import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";

const Slide05PresenteGratis = () => (
  <SlideWrapper theme="light">
    <FadeIn><h2 className="text-3xl md:text-5xl font-bold">Conheça o Marcos</h2></FadeIn>
    <FadeIn delay={200}><p className="mt-2 opacity-60 text-lg">Avatar GG</p></FadeIn>
  </SlideWrapper>
);

export default Slide05PresenteGratis;
