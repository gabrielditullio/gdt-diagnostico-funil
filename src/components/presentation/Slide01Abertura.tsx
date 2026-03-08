import {
  Trophy, Users, ShoppingBag, Heart, Dumbbell, Star,
  XCircle, AlertTriangle, WifiOff, MailX, Workflow, ShieldX
} from "lucide-react";
import AnimateOnView from "./AnimateOnView";

const assets = [
  { icon: Dumbbell, label: "10 anos treinando Léo Santana" },
  { icon: Trophy, label: "320+ títulos fisiculturismo" },
  { icon: Users, label: "49K seguidores" },
  { icon: ShoppingBag, label: "6 produtos digitais" },
  { icon: Heart, label: "Esposa nutricionista 52K seguidores" },
];

const gaps = [
  { icon: WifiOff, label: "Site fora do ar" },
  { icon: XCircle, label: "Zero anúncios pagos" },
  { icon: MailX, label: "Sem lista de email" },
  { icon: Workflow, label: "Sem funil de vendas" },
  { icon: AlertTriangle, label: "Produtos desorganizados" },
  { icon: ShieldX, label: "Quiz bloqueando vendas" },
];

const Slide01Abertura = () => {
  return (
    <div className="w-full space-y-6 md:space-y-10">
      <AnimateOnView>
        <div className="text-center space-y-3">
          <h2 className="text-display leading-tight">
            Você tem um <span className="text-gold">Porsche</span> na garagem...
            <br />
            mas está andando de <span className="text-muted-foreground">bicicleta.</span>
          </h2>
        </div>
      </AnimateOnView>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
        <AnimateOnView delay={100} direction="left">
          <div className="rounded-lg border border-gold/30 bg-gold-muted/20 p-4 md:p-6 space-y-3">
            <div className="flex items-center gap-2 mb-3">
              <Star className="text-gold" size={18} />
              <span className="text-xs font-bold uppercase tracking-widest text-gold">Ativos</span>
            </div>
            <div className="space-y-2">
              {assets.map((item, i) => (
                <div
                  key={i}
                  className="card-hover flex items-center gap-3 rounded-md bg-gold-muted/30 border border-gold/20 px-3 py-2"
                >
                  <item.icon className="text-gold shrink-0" size={16} />
                  <span className="text-xs md:text-sm font-medium text-gold-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnView>

        <AnimateOnView delay={200} direction="right">
          <div className="rounded-lg border border-danger/30 bg-danger-muted/20 p-4 md:p-6 space-y-3">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="text-destructive" size={18} />
              <span className="text-xs font-bold uppercase tracking-widest text-destructive">Gaps</span>
            </div>
            <div className="space-y-2">
              {gaps.map((item, i) => (
                <div
                  key={i}
                  className="card-hover flex items-center gap-3 rounded-md bg-danger-muted/30 border border-danger/20 px-3 py-2"
                >
                  <item.icon className="text-destructive shrink-0" size={16} />
                  <span className="text-xs md:text-sm font-medium text-foreground/80">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnView>
      </div>

      <AnimateOnView delay={400}>
        <p className="text-body-lg text-muted-foreground text-center max-w-2xl mx-auto">
          Você tem o que 99% dos personais no Brasil nunca vão ter. Mas olha o que está acontecendo com tudo isso hoje.
        </p>
      </AnimateOnView>
    </div>
  );
};

export default Slide01Abertura;
