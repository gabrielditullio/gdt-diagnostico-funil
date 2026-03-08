import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";

const Slide22Resumo = () => (
  <SlideWrapper theme="dark">
    <FadeIn><h2 className="text-3xl md:text-5xl font-bold">O Risco de Não Fazer Nada</h2></FadeIn>
    <FadeIn delay={200}><p className="mt-2 opacity-60 text-lg">Urgência</p></FadeIn>
  </SlideWrapper>
);

export default Slide22Resumo;
