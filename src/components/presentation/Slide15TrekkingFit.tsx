import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";

const Slide15TrekkingFit = () => (
  <SlideWrapper theme="light">
    <FadeIn><h2 className="text-3xl md:text-5xl font-bold">Vitória Rápida</h2></FadeIn>
    <FadeIn delay={200}><p className="mt-2 opacity-60 text-lg">Abrir Trekking Fit</p></FadeIn>
  </SlideWrapper>
);

export default Slide15TrekkingFit;
