import { Crown, MessageSquare, Video, Users, Shield, Check } from "lucide-react";

const includes = [
  "90 dias acompanhamento",
  "Programa 100% personalizado",
  "Ajustes semanais",
  "WhatsApp direto",
  "4 calls em vídeo",
  "Integração com Camila (nutrição)",
];

const Slide09ConsultoriaVIP = () => {
  return (
    <div className="w-full space-y-6 md:space-y-8">
      <div className="text-center space-y-2">
        <Crown className="mx-auto text-gold" size={28} />
        <span className="text-xs font-bold uppercase tracking-widest text-gold">Produto Premium</span>
        <h2 className="text-display">Consultoria VIP</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Application form */}
        <div className="rounded-xl border border-border bg-card p-5 space-y-3 shadow-lg shadow-gold/5">
          <p className="text-xs font-bold uppercase tracking-widest text-gold">Página de Aplicação</p>
          {["Nome completo", "Qual seu objetivo?", "Nível de comprometimento", "Situação atual"].map((ph, i) => (
            <div key={i} className="rounded-md border border-border bg-background px-3 py-2.5">
              <span className="text-xs text-muted-foreground">{ph}</span>
            </div>
          ))}
          <button className="w-full rounded-lg bg-primary py-3 text-center">
            <span className="text-sm font-extrabold text-primary-foreground uppercase tracking-wide">Quero Aplicar</span>
          </button>
        </div>

        {/* Includes + price compare */}
        <div className="space-y-4">
          {/* Comparativo */}
          <div className="rounded-xl border border-border bg-card p-4 space-y-3">
            <div className="rounded-lg bg-destructive/10 border border-destructive/20 p-3 text-center">
              <p className="text-[10px] font-bold uppercase tracking-wider text-destructive mb-0.5">Presencial</p>
              <p className="text-xs text-muted-foreground">R$200/sessão × 3x/sem × 4 sem</p>
              <p className="text-xl font-extrabold text-destructive">R$2.400<span className="text-xs font-medium">/MÊS</span></p>
            </div>
            <div className="text-center text-xs font-bold text-muted-foreground">vs</div>
            <div className="rounded-lg bg-primary/10 border border-primary/20 p-3 text-center">
              <p className="text-[10px] font-bold uppercase tracking-wider text-primary mb-0.5">Consultoria GG Online</p>
              <p className="text-2xl font-extrabold text-primary">R$2.997</p>
              <p className="text-xs text-muted-foreground">por <span className="font-bold text-foreground">3 MESES</span></p>
            </div>
          </div>

          {/* Bullet points */}
          <div className="rounded-xl border border-border bg-card p-4 space-y-2">
            {includes.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <Check size={14} className="text-primary shrink-0" />
                <span className="text-xs font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>

          {/* Scarcity badge */}
          <div className="flex items-center justify-center gap-2 rounded-lg border border-gold/30 bg-gold/5 px-4 py-2.5">
            <Shield size={14} className="text-gold" />
            <span className="text-xs font-bold text-gold">Máximo 15–20 alunos simultâneos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide09ConsultoriaVIP;
