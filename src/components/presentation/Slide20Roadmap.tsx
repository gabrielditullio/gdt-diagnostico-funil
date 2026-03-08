import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";

const Slide20Roadmap = () => (
  <SlideWrapper theme="light">
    <FadeIn><h2 className="text-3xl md:text-5xl font-bold">Roadmap de Execução</h2></FadeIn>
    <FadeIn delay={200}><p className="mt-2 opacity-60 text-lg">Fases 0–3</p></FadeIn>
  </SlideWrapper>
);

export default Slide20Roadmap;
