import AnimateOnView from "./AnimateOnView";
import { ChevronUp } from "lucide-react";

const Slide23CTA = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center space-y-6 md:space-y-10 py-4">
      <AnimateOnView>
        <h2 className="text-display max-w-lg">O mercado não espera.</h2>
      </AnimateOnView>

      <AnimateOnView delay={200}>
        <p className="text-body-lg text-muted-foreground max-w-md">
          O próximo passo é uma conversa de 1 hora.<br />Sem compromisso.
        </p>
      </AnimateOnView>

      <AnimateOnView delay={400}>
        <a
          href="mailto:gabriel@dtcoproducoes.com.br?subject=Diagnóstico Felipe Marinho — Agendar Conversa"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-xl bg-primary px-8 py-4 md:px-10 md:py-5 transition-transform duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
        >
          <span className="text-base md:text-xl font-extrabold text-primary-foreground uppercase tracking-wider">
            Agendar Conversa
          </span>
        </a>
      </AnimateOnView>

      <AnimateOnView delay={600}>
        <p className="text-xs md:text-sm text-muted-foreground max-w-sm leading-relaxed px-4">
          A única coisa que eu te peço: não deixa essa apresentação virar mais um PDF bonito na gaveta.
        </p>
      </AnimateOnView>

      <AnimateOnView delay={700}>
        <div className="pt-4 border-t border-border">
          <p className="text-xs font-bold text-foreground">DT Coproduções</p>
          <p className="text-xs text-muted-foreground">Gabriel Di Tullio</p>
        </div>
      </AnimateOnView>
    </div>
  );
};

export default Slide23CTA;
