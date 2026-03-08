import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";

const Slide14MarcaPessoal = () => (
  <SlideWrapper theme="dark">
    <FadeIn><h2 className="text-3xl md:text-5xl font-bold">Jornada Completa</h2></FadeIn>
    <FadeIn delay={200}><p className="mt-2 opacity-60 text-lg">De Desconhecido a Premium</p></FadeIn>
  </SlideWrapper>
);

export default Slide14MarcaPessoal;
