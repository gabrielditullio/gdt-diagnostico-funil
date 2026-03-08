import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";

const Slide19Numeros = () => (
  <SlideWrapper theme="light">
    <FadeIn><h2 className="text-3xl md:text-5xl font-bold">O Quartel-General</h2></FadeIn>
    <FadeIn delay={200}><p className="mt-2 opacity-60 text-lg">Site</p></FadeIn>
  </SlideWrapper>
);

export default Slide19Numeros;
