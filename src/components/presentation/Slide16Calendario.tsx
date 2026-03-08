import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";

const Slide16Calendario = () => (
  <SlideWrapper theme="light">
    <FadeIn><h2 className="text-3xl md:text-5xl font-bold">Calendário de Vendas</h2></FadeIn>
    <FadeIn delay={200}><p className="mt-2 opacity-60 text-lg">Legendários</p></FadeIn>
  </SlideWrapper>
);

export default Slide16Calendario;
