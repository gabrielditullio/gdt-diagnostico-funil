import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";

const Slide06EmailsAutomaticos = () => (
  <SlideWrapper theme="light">
    <FadeIn><h2 className="text-3xl md:text-5xl font-bold">Conheça o Thiago + Legendários</h2></FadeIn>
    <FadeIn delay={200}><p className="mt-2 opacity-60 text-lg">Avatar Trekking + Dados</p></FadeIn>
  </SlideWrapper>
);

export default Slide06EmailsAutomaticos;
