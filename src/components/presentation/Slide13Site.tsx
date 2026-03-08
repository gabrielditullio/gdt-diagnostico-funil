import { AlertTriangle, Smartphone, Globe, Instagram, Youtube, Star, Layers } from "lucide-react";
import AnimateOnView from "./AnimateOnView";

const Slide13Site = () => {
  return (
    <div className="w-full space-y-5 md:space-y-8">
      <AnimateOnView>
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Quartel-General</span>
          <h2 className="text-display">O Site</h2>
        </div>
      </AnimateOnView>

      <AnimateOnView delay={100}>
        <div className="mx-auto max-w-md rounded-lg border-2 border-destructive/50 bg-destructive/10 p-3 flex items-center gap-3">
          <AlertTriangle className="text-destructive shrink-0" size={20} />
          <div>
            <p className="text-xs font-bold text-destructive">felipemarinho.com.br está FORA DO AR</p>
            <p className="text-[9px] text-muted-foreground">Quando alguém pesquisa "Felipe Marinho personal" no Google, cai em NADA.</p>
          </div>
        </div>
      </AnimateOnView>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
        <AnimateOnView delay={200} direction="left">
          <div className="w-full max-w-[240px] rounded-xl border border-border bg-card overflow-hidden shadow-lg shadow-primary/5 card-hover">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-muted/50 border-b border-border">
              <div className="w-1.5 h-1.5 rounded-full bg-destructive/60" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
              <div className="w-1.5 h-1.5 rounded-full bg-success/60" />
              <div className="flex-1 mx-1 rounded bg-background px-2 py-0.5">
                <span className="text-[7px] text-muted-foreground">felipemarinho.com.br</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-background p-3 text-center space-y-1">
              <div className="w-8 h-8 rounded-full bg-muted mx-auto" />
              <p className="text-[10px] font-extrabold text-foreground">O Método do Gigante</p>
              <p className="text-[7px] text-muted-foreground">Transforme seu corpo com quem treina o maior</p>
              <div className="rounded bg-primary px-2 py-0.5 inline-block">
                <span className="text-[6px] font-bold text-primary-foreground uppercase">Começar Agora</span>
              </div>
            </div>
            <div className="p-2 space-y-1 border-t border-border">
              <p className="text-[7px] font-bold text-muted-foreground uppercase">Resultados</p>
              <div className="flex gap-1">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex-1 rounded bg-muted p-1 text-center">
                    <Star size={6} className="text-gold mx-auto" />
                  </div>
                ))}
              </div>
            </div>
            <div className="p-2 space-y-1 border-t border-border">
              <p className="text-[7px] font-bold text-muted-foreground uppercase">Programas</p>
              <div className="flex gap-1">
                {["GG", "TF", "VIP"].map(l => (
                  <div key={l} className="flex-1 rounded bg-primary/10 border border-primary/20 p-1 text-center">
                    <span className="text-[6px] font-bold text-primary">{l}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-1.5 border-t border-border flex justify-center gap-2">
              <Instagram size={8} className="text-muted-foreground" />
              <Youtube size={8} className="text-muted-foreground" />
              <Globe size={8} className="text-muted-foreground" />
            </div>
          </div>
        </AnimateOnView>

        <AnimateOnView delay={300} direction="right">
          <div className="text-center">
            <div className="flex items-center gap-1.5 mb-2 justify-center">
              <Smartphone size={12} className="text-primary" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-primary">90% do público</span>
            </div>
            <div className="w-32 rounded-[1.2rem] border-2 border-border bg-card p-1.5 shadow-lg shadow-primary/5 card-hover mx-auto">
              <div className="rounded-[1rem] bg-background overflow-hidden">
                <div className="h-3 bg-muted flex items-center justify-center">
                  <div className="w-8 h-0.5 rounded-full bg-border" />
                </div>
                <div className="bg-gradient-to-b from-primary/15 to-background p-1.5 text-center space-y-0.5">
                  <div className="w-5 h-5 rounded-full bg-muted mx-auto" />
                  <p className="text-[6px] font-extrabold text-foreground">O Método do Gigante</p>
                  <div className="rounded bg-primary px-1 py-0.5 inline-block">
                    <span className="text-[4px] font-bold text-primary-foreground uppercase">Começar</span>
                  </div>
                </div>
                <div className="p-1 space-y-0.5">
                  {["Resultados", "Programas", "Sobre"].map(s => (
                    <div key={s} className="rounded bg-muted/50 p-1">
                      <p className="text-[4px] font-bold text-muted-foreground uppercase">{s}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimateOnView>
      </div>

      <AnimateOnView delay={400}>
        <p className="text-body-lg text-muted-foreground text-center max-w-2xl mx-auto">
          Seu site é onde <span className="text-primary font-semibold">TUDO se conecta</span>.
        </p>
      </AnimateOnView>
    </div>
  );
};

export default Slide13Site;
