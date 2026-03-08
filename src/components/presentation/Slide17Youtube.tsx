import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";

const Slide17Youtube = () => (
  <SlideWrapper theme="light">
    <FadeIn><h2 className="text-3xl md:text-5xl font-bold">Tráfego</h2></FadeIn>
    <FadeIn delay={200}><p className="mt-2 opacity-60 text-lg">Ads + YouTube + Legendários</p></FadeIn>
  </SlideWrapper>
);

export default Slide17Youtube;
