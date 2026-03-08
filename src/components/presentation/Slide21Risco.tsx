import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";

const Slide21Risco = () => (
  <SlideWrapper theme="light">
    <FadeIn><h2 className="text-3xl md:text-5xl font-bold">Os Números</h2></FadeIn>
    <FadeIn delay={200}><p className="mt-2 opacity-60 text-lg">Projeção Financeira</p></FadeIn>
  </SlideWrapper>
);

export default Slide21Risco;
