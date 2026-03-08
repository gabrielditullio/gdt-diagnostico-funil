import { AlertTriangle, Smartphone, Globe, Instagram, Youtube, Users, Star, Layers } from "lucide-react";

const Slide13Site = () => {
  return (
    <div className="w-full space-y-6 md:space-y-8">
      <div className="text-center space-y-2">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Quartel-General</span>
        <h2 className="text-display">O Site</h2>
      </div>

      {/* Alert */}
      <div className="mx-auto max-w-md rounded-lg border-2 border-destructive/50 bg-destructive/10 p-4 flex items-center gap-3">
        <AlertTriangle className="text-destructive shrink-0" size={24} />
        <div>
          <p className="text-sm font-bold text-destructive">felipemarinho.com.br está FORA DO AR</p>
          <p className="text-[10px] text-muted-foreground">Quando alguém pesquisa "Felipe Marinho personal" no Google, cai em NADA.</p>
        </div>
      </div>

      {/* Wireframes side by side: desktop + mobile */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        {/* Desktop wireframe */}
        <div className="w-full max-w-xs rounded-xl border border-border bg-card overflow-hidden shadow-lg shadow-primary/5">
          {/* Browser bar */}
          <div className="flex items-center gap-1.5 px-3 py-2 bg-muted/50 border-b border-border">
            <div className="w-2 h-2 rounded-full bg-destructive/60" />
            <div className="w-2 h-2 rounded-full bg-gold/60" />
            <div className="w-2 h-2 rounded-full bg-success/60" />
            <div className="flex-1 mx-2 rounded bg-background px-2 py-0.5">
              <span className="text-[8px] text-muted-foreground">felipemarinho.com.br</span>
            </div>
          </div>

          {/* Hero */}
          <div className="bg-gradient-to-br from-primary/20 to-background p-4 text-center space-y-1">
            <div className="w-10 h-10 rounded-full bg-muted mx-auto mb-1" />
            <p className="text-xs font-extrabold text-foreground">O Método do Gigante</p>
            <p className="text-[8px] text-muted-foreground">Transforme seu corpo com quem treina o maior</p>
            <div className="rounded bg-primary px-2 py-1 inline-block">
              <span className="text-[7px] font-bold text-primary-foreground uppercase">Começar Agora</span>
            </div>
          </div>

          {/* Results */}
          <div className="p-3 space-y-1 border-t border-border">
            <p className="text-[8px] font-bold text-muted-foreground uppercase tracking-wider">Resultados</p>
            <div className="flex gap-1">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex-1 rounded bg-muted p-1.5 text-center">
                  <Star size={8} className="text-gold mx-auto" />
                  <div className="w-full h-1 bg-border rounded mt-1" />
                </div>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div className="p-3 space-y-1 border-t border-border">
            <p className="text-[8px] font-bold text-muted-foreground uppercase tracking-wider">Programas</p>
            <div className="flex gap-1">
              {["GG", "TF", "VIP"].map(label => (
                <div key={label} className="flex-1 rounded bg-primary/10 border border-primary/20 p-1.5 text-center">
                  <span className="text-[7px] font-bold text-primary">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* About */}
          <div className="p-3 space-y-1 border-t border-border">
            <p className="text-[8px] font-bold text-muted-foreground uppercase tracking-wider">Sobre Felipe</p>
            <div className="flex gap-2 items-center">
              <div className="w-6 h-6 rounded-full bg-muted shrink-0" />
              <div className="flex-1 space-y-0.5">
                <div className="h-1 bg-border rounded w-full" />
                <div className="h-1 bg-border rounded w-3/4" />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-2 border-t border-border flex justify-center gap-2">
            <Instagram size={10} className="text-muted-foreground" />
            <Youtube size={10} className="text-muted-foreground" />
            <Globe size={10} className="text-muted-foreground" />
          </div>
        </div>

        {/* Mobile wireframe */}
        <div className="relative">
          <div className="flex items-center gap-2 mb-2 justify-center">
            <Smartphone size={14} className="text-primary" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">90% do público</span>
          </div>
          <div className="w-40 rounded-[1.5rem] border-2 border-border bg-card p-2 shadow-lg shadow-primary/5">
            <div className="rounded-[1.2rem] bg-background overflow-hidden">
              {/* Notch */}
              <div className="h-4 bg-muted flex items-center justify-center">
                <div className="w-10 h-1 rounded-full bg-border" />
              </div>
              {/* Hero */}
              <div className="bg-gradient-to-b from-primary/15 to-background p-2 text-center space-y-0.5">
                <div className="w-6 h-6 rounded-full bg-muted mx-auto" />
                <p className="text-[7px] font-extrabold text-foreground">O Método do Gigante</p>
                <div className="rounded bg-primary px-1.5 py-0.5 inline-block">
                  <span className="text-[5px] font-bold text-primary-foreground uppercase">Começar</span>
                </div>
              </div>
              {/* Sections */}
              <div className="p-1.5 space-y-1">
                {["Resultados", "Programas", "Sobre"].map(s => (
                  <div key={s} className="rounded bg-muted/50 p-1.5">
                    <p className="text-[5px] font-bold text-muted-foreground uppercase">{s}</p>
                    <div className="h-0.5 bg-border rounded mt-0.5 w-3/4" />
                  </div>
                ))}
              </div>
              {/* Footer */}
              <div className="p-1 flex justify-center gap-1 border-t border-border">
                <Instagram size={6} className="text-muted-foreground" />
                <Youtube size={6} className="text-muted-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Narration */}
      <p className="text-body-lg text-muted-foreground text-center max-w-2xl mx-auto">
        Seu site é onde <span className="text-primary font-semibold">TUDO se conecta</span>.
      </p>
    </div>
  );
};

export default Slide13Site;
