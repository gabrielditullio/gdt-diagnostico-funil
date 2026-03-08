import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";

const Slide23CTA = () => (
  <SlideWrapper theme="light">
    <FadeIn><h2 className="text-3xl md:text-5xl font-bold">Próximos Passos</h2></FadeIn>
    <FadeIn delay={200}><p className="mt-2 opacity-60 text-lg">CTA — 3 Cards</p></FadeIn>
  </SlideWrapper>
);

export default Slide23CTA;
