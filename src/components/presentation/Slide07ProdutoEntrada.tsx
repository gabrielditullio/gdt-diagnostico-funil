import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";

const Slide07ProdutoEntrada = () => (
  <SlideWrapper theme="dark">
    <FadeIn><h2 className="text-3xl md:text-5xl font-bold">A Escada do Seu Negócio</h2></FadeIn>
    <FadeIn delay={200}><p className="mt-2 opacity-60 text-lg">Escada Completa Dual</p></FadeIn>
  </SlideWrapper>
);

export default Slide07ProdutoEntrada;
