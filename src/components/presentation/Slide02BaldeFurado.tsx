import { useEffect, useRef } from "react";
import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";
import FooterQuote from "./FooterQuote";
import { AlertCircle, Check, X } from "lucide-react";

const LeakyBucket = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: { 
      x: number; 
      y: number; 
      vx: number; 
      vy: number; 
      radius: number; 
      alpha: number; 
      type: "green" | "orange"; 
      isLeaking: boolean;
      isCaptured: boolean;
      leakHole?: "left" | "right";
    }[] = [];

    const bucketWidth = 120;
    const bucketHeight = 140;
    const bucketX = canvas.width / 2 - bucketWidth / 2;
    const bucketY = canvas.height / 2 - bucketHeight / 2 + 20;
    
    // Two holes: left and right
    const leftHole = bucketX + bucketWidth * 0.3;
    const rightHole = bucketX + bucketWidth * 0.7;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Draw bucket
      ctx.strokeStyle = "#444444";
      ctx.lineWidth = 4;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      
      // Bucket body (open top)
      ctx.beginPath();
      ctx.moveTo(bucketX - 10, bucketY);
      ctx.lineTo(bucketX, bucketY + bucketHeight);
      ctx.lineTo(bucketX + bucketWidth, bucketY + bucketHeight);
      ctx.lineTo(bucketX + bucketWidth + 10, bucketY);
      ctx.stroke();

      // Bucket back rim
      ctx.beginPath();
      ctx.ellipse(canvas.width/2, bucketY, bucketWidth/2 + 10, 15, 0, Math.PI, Math.PI*2);
      ctx.strokeStyle = "#333333";
      ctx.stroke();
      
      // Bucket front rim
      ctx.beginPath();
      ctx.ellipse(canvas.width/2, bucketY, bucketWidth/2 + 10, 15, 0, 0, Math.PI);
      ctx.strokeStyle = "#444444";
      ctx.stroke();

      // 2. Draw pulsing holes
      const pulse = 0.5 + Math.sin(Date.now() / 200) * 0.3;
      
      // Left hole (green particles - Não-Legendários)
      ctx.beginPath();
      ctx.arc(leftHole, bucketY + bucketHeight, 6, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(192, 57, 43, ${pulse})`;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(leftHole, bucketY + bucketHeight, 3, 0, Math.PI * 2);
      ctx.fillStyle = "#C0392B";
      ctx.fill();

      // Right hole (orange particles - GG audience)
      ctx.beginPath();
      ctx.arc(rightHole, bucketY + bucketHeight, 6, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(192, 57, 43, ${pulse})`;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(rightHole, bucketY + bucketHeight, 3, 0, Math.PI * 2);
      ctx.fillStyle = "#C0392B";
      ctx.fill();

      // 3. Manage particles

      // 5. Manage particles
      // Add new drops falling IN (mix of green and orange)
      if (Math.random() < 0.3) {
        const isGreen = Math.random() > 0.5;
        particles.push({
          x: canvas.width/2 + (Math.random() - 0.5) * (bucketWidth - 20),
          y: bucketY - 60,
          vx: (Math.random() - 0.5) * 0.5,
          vy: 2 + Math.random() * 2,
          radius: 3 + Math.random() * 2,
          alpha: 1,
          type: isGreen ? "green" : "orange",
          isLeaking: false,
          isCaptured: false
        });
      }

      // Add drops leaking OUT from left hole (green)
      if (Math.random() < 0.35) {
        particles.push({
          x: leftHole + (Math.random() - 0.5) * 4,
          y: bucketY + bucketHeight + 5,
          vx: (Math.random() - 0.5) * 1,
          vy: 3 + Math.random() * 3,
          radius: 2 + Math.random() * 2,
          alpha: 1,
          type: "green",
          isLeaking: true,
          isCaptured: false,
          leakHole: "left"
        });
      }

      // Add drops leaking OUT from right hole (orange)
      if (Math.random() < 0.35) {
        particles.push({
          x: rightHole + (Math.random() - 0.5) * 4,
          y: bucketY + bucketHeight + 5,
          vx: (Math.random() - 0.5) * 1,
          vy: 3 + Math.random() * 3,
          radius: 2 + Math.random() * 2,
          alpha: 1,
          type: "orange",
          isLeaking: true,
          isCaptured: false,
          leakHole: "right"
        });
      }

      // Update and draw particles
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.isLeaking) {
          p.alpha -= 0.02;
          p.vy += 0.2;
        } else {
          // Check if particle reached bucket bottom
          if (p.y > bucketY + bucketHeight - 15) {
            // Green particles have 60% chance to be captured (stay in bucket)
            // Orange particles always leak
            if (p.type === "green" && !p.isCaptured && Math.random() < 0.6) {
              p.isCaptured = true;
              p.vy = 0;
              p.vx = 0;
              p.y = bucketY + bucketHeight - 15;
            } else if (!p.isCaptured) {
              // Otherwise fade out
              p.alpha -= 0.05;
              p.vy = 0;
              p.vx = 0;
            }
          }
        }

        if (p.alpha > 0) {
          ctx.globalAlpha = p.alpha;
          ctx.fillStyle = p.type === "green" ? "#27AE60" : "#D35400";
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      });
      ctx.globalAlpha = 1;

      // Remove dead particles (but keep captured ones)
      particles = particles.filter(p => p.alpha > 0 || p.isCaptured);

      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="relative mx-auto" style={{ width: 300, height: 320 }}>
      <canvas ref={canvasRef} width={300} height={320} />
      {/* Left hole label */}
      <div className="absolute text-center" style={{ bottom: 0, left: "5%", width: "35%" }}>
        <p className="text-[11px] md:text-xs font-semibold" style={{ color: "#C0392B" }}>
          Não-Legendários<br/>bloqueados
        </p>
      </div>
      {/* Right hole label */}
      <div className="absolute text-center" style={{ bottom: 0, right: "5%", width: "35%" }}>
        <p className="text-[11px] md:text-xs font-semibold" style={{ color: "#D35400" }}>
          Público GG<br/>sem caminho
        </p>
      </div>
      {/* Captured label */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 text-center pointer-events-none">
        <p className="text-[10px] md:text-xs font-medium" style={{ color: "#27AE60" }}>
          Ex-Legendários<br/>capturados ✓
        </p>
      </div>
    </div>
  );
};

const Slide02BaldeFurado = () => (
  <SlideWrapper theme="dark">
    <div className="w-full max-w-5xl mx-auto space-y-12">
      
      <FadeIn>
        <h2 className="text-3xl md:text-5xl font-bold text-center">O Balde Furado</h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Visual: Bucket + Indicators */}
        <FadeIn delay={150} className="flex items-center justify-center gap-8 bg-[#141414] rounded-2xl p-10 border border-[#222]">
          <LeakyBucket />
          
          <div className="flex flex-col gap-8 min-w-[140px]">
            {/* Indicator 1 - Captured (Green) */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#27AE60" }}>
                <Check size={20} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Capturados</p>
                <p className="text-xs mt-1" style={{ color: "#27AE60" }}>Parcela dos<br/>ex-Legendários</p>
              </div>
            </div>

            {/* Indicator 2 - Lost (Red, LARGER) */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#C0392B" }}>
                <X size={28} className="text-white" />
              </div>
              <div>
                <p className="text-xl font-black whitespace-nowrap" style={{ color: "#C0392B" }}>Perdidos</p>
                <p className="text-sm font-bold mt-1 whitespace-nowrap" style={{ color: "#E74C3C" }}>Milhares/mês</p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Text - moved to right side */}
        <div className="space-y-6 text-[#CCCCCC] text-base md:text-lg">
          <FadeIn delay={300}>
            <p>
              Dessas pessoas que chegam, UMA PARTE é capturada pelo teu quiz do Trekking Fit — os homens que já fizeram o Legendários. <strong className="text-white">Essa parte funciona.</strong>
            </p>
          </FadeIn>
          
          <FadeIn delay={450}>
            <p className="text-white font-semibold">
              Mas o balde tem DOIS furos enormes.
            </p>
          </FadeIn>

          <FadeIn delay={600}>
            <p>
              <strong className="text-white">Furo 1:</strong> Todo mundo que clica no teu link e não é do Legendários. Esses caras querem comprar de você — mas você fecha a porta na cara deles.
            </p>
          </FadeIn>

          <FadeIn delay={750}>
            <p>
              <strong className="text-white">Furo 2:</strong> O cara que quer SHAPE, não montanha. Ele chega no teu link, vê "Trekking Fit", pensa "isso não é pra mim", e vai embora. Não existe caminho pra ele.
            </p>
          </FadeIn>
        </div>

      </div>

      {/* Bottom Warning Box */}
      <FadeIn delay={900}>
        <div className="max-w-3xl mx-auto rounded-lg border border-[#C0392B] bg-[#1A0000] p-6 flex gap-4 items-start shadow-[0_0_30px_rgba(192,57,43,0.1)]">
          <AlertCircle className="text-[#C0392B] shrink-0 mt-1" size={24} />
          <p className="text-[#E74C3C] text-lg italic font-medium leading-relaxed">
            "Cada 'não agora' vira 'nunca mais'. E cada pessoa que quer shape em vez de montanha nem chega a ver uma oferta."
          </p>
        </div>
      </FadeIn>

    </div>

    <FooterQuote text="O problema não é falta de qualidade. É estrutural." />
  </SlideWrapper>
);

export default Slide02BaldeFurado;
