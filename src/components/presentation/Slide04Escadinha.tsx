import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";

const Slide04Escadinha = () => (
  <SlideWrapper theme="dark">
    <FadeIn><h2 className="text-3xl md:text-5xl font-bold">As Duas Minas de Ouro</h2></FadeIn>
    <FadeIn delay={200}><p className="mt-2 opacity-60 text-lg">Dois Públicos</p></FadeIn>
  </SlideWrapper>
);

export default Slide04Escadinha;
