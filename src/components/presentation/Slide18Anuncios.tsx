import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";

const Slide18Anuncios = () => (
  <SlideWrapper theme="dark">
    <FadeIn><h2 className="text-3xl md:text-5xl font-bold">A Bruxa do Treino</h2></FadeIn>
    <FadeIn delay={200}><p className="mt-2 opacity-60 text-lg">Marca Pessoal</p></FadeIn>
  </SlideWrapper>
);

export default Slide18Anuncios;
