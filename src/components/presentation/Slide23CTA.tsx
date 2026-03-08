const Slide23CTA = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center space-y-8 md:space-y-10 py-8">
      {/* Main phrase */}
      <h2 className="text-display max-w-lg">O mercado não espera.</h2>

      {/* Subtext */}
      <p className="text-body-lg text-muted-foreground max-w-md">
        O próximo passo é uma conversa de 1 hora.<br />Sem compromisso.
      </p>

      {/* CTA Button */}
      <a
        href="#agendar"
        className="inline-block rounded-xl bg-primary px-10 py-5 transition-transform duration-200 hover:scale-105 active:scale-95"
      >
        <span className="text-lg md:text-xl font-extrabold text-primary-foreground uppercase tracking-wider">
          Agendar Conversa
        </span>
      </a>

      {/* Closing text */}
      <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
        A única coisa que eu te peço: não deixa essa apresentação virar mais um PDF bonito na gaveta.
      </p>

      {/* Signature */}
      <div className="pt-4 border-t border-border">
        <p className="text-xs font-bold text-foreground">DT Coproduções</p>
        <p className="text-xs text-muted-foreground">Gabriel Di Tullio</p>
      </div>
    </div>
  );
};

export default Slide23CTA;
