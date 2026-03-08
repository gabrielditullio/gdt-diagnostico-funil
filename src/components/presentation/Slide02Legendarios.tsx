import { useEffect, useRef } from "react";
import SlideWrapper from "./SlideWrapper";
import FadeIn from "./FadeIn";
import { AlertCircle } from "lucide-react";

const LeakyBucket = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: { x: number; y: number; vx: number; vy: number; radius: number; alpha: number; isLeaking: boolean }[] = [];

    const bucketWidth = 120;
    const bucketHeight = 140;
    const bucketX = canvas.width / 2 - bucketWidth / 2;
    const bucketY = canvas.height / 2 - bucketHeight / 2 + 20;
    
    // Holes positions (relative to bucket bottom)
    const holes = [0.2, 0.5, 0.8].map(p => bucketX + bucketWidth * p);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Draw bucket
      ctx.strokeStyle = "#444444";
      ctx.lineWidth = 4;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      
      // Bucket body (open top)
      ctx.beginPath();
      ctx.moveTo(bucketX - 10, bucketY); // top left
      ctx.lineTo(bucketX, bucketY + bucketHeight); // bottom left
      ctx.lineTo(bucketX + bucketWidth, bucketY + bucketHeight); // bottom right
      ctx.lineTo(bucketX + bucketWidth + 10, bucketY); // top right
      ctx.stroke();

      // Bucket back rim (ellipse)
      ctx.beginPath();
      ctx.ellipse(canvas.width/2, bucketY, bucketWidth/2 + 10, 15, 0, Math.PI, Math.PI*2);
      ctx.strokeStyle = "#333333";
      ctx.stroke();
      
      // Bucket front rim
      ctx.beginPath();
      ctx.ellipse(canvas.width/2, bucketY, bucketWidth/2 + 10, 15, 0, 0, Math.PI);
      ctx.strokeStyle = "#444444";
      ctx.stroke();

      // 2. Draw glowing holes
      holes.forEach(x => {
        ctx.beginPath();
        ctx.arc(x, bucketY + bucketHeight, 6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(192, 57, 43, ${0.5 + Math.sin(Date.now() / 200) * 0.3})`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x, bucketY + bucketHeight, 3, 0, Math.PI * 2);
        ctx.fillStyle = "#C0392B";
        ctx.fill();
      });

      // 3. Manage particles
      // Add new drops falling IN
      if (Math.random() < 0.3) {
        particles.push({
          x: canvas.width/2 + (Math.random() - 0.5) * (bucketWidth - 20),
          y: bucketY - 60,
          vx: (Math.random() - 0.5) * 0.5,
          vy: 2 + Math.random() * 2,
          radius: 3 + Math.random() * 2,
          alpha: 1,
          isLeaking: false
        });
      }

      // Add drops leaking OUT
      if (Math.random() < 0.4) {
        const holeX = holes[Math.floor(Math.random() * holes.length)];
        particles.push({
          x: holeX + (Math.random() - 0.5) * 4,
          y: bucketY + bucketHeight + 5,
          vx: (Math.random() - 0.5) * 1,
          vy: 3 + Math.random() * 3,
          radius: 2 + Math.random() * 2,
          alpha: 1,
          isLeaking: true
        });
      }

      // Update and draw particles
      ctx.fillStyle = "#D35400";
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.isLeaking) {
          p.alpha -= 0.02; // Fade out fast
          p.vy += 0.2; // Gravity
        } else {
          // Stop at bucket bottom
          if (p.y > bucketY + bucketHeight - 10) {
            p.alpha -= 0.05; // Fade out inside bucket
            p.vy = 0;
            p.vx = 0;
          }
        }

        if (p.alpha > 0) {
          ctx.globalAlpha = p.alpha;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      });
      ctx.globalAlpha = 1;

      // Remove dead particles
      particles = particles.filter(p => p.alpha > 0);

      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return <canvas ref={canvasRef} width={300} height={300} className="mx-auto" />;
};

const Slide02Legendarios = () => (
  <SlideWrapper theme="dark">
    <div className="w-full max-w-5xl mx-auto space-y-12">
      
      <FadeIn>
        <h2 className="text-3xl md:text-5xl font-bold text-center">O Problema Invisível</h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text */}
        <div className="space-y-6 text-[#CCCCCC] text-base md:text-lg">
          <FadeIn delay={150}>
            <p>
              Cada pessoa que te descobre no Instagram e não compra naquele segundo... <strong className="text-white">desaparece pra sempre.</strong> Você não tem como falar com ela de novo.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <p>
              Imagine um balde. Todo dia caem pessoas dentro — gente que viu o Léo te marcar, gente que pesquisou "personal de famoso". <strong className="text-[#D35400]">Mas o balde está furado.</strong> Cada pessoa que entra, escorre por baixo.
            </p>
          </FadeIn>
        </div>

        {/* Visual: Bucket + Number */}
        <FadeIn delay={450} className="flex items-center justify-center gap-8 bg-[#141414] rounded-2xl p-6 border border-[#222]">
          <LeakyBucket />
          
          <div className="text-center">
            <div className="relative inline-block">
              <span className="text-7xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">0</span>
            </div>
            <p className="text-[10px] uppercase tracking-widest text-[#888888] max-w-[100px] mx-auto mt-2 leading-tight">
              Contatos disponíveis para recontatar
            </p>
          </div>
        </FadeIn>

      </div>

      {/* Bottom Warning Box */}
      <FadeIn delay={600}>
        <div className="max-w-3xl mx-auto rounded-lg border border-[#C0392B] bg-[#1A0000] p-6 flex gap-4 items-start shadow-[0_0_30px_rgba(192,57,43,0.1)]">
          <AlertCircle className="text-[#C0392B] shrink-0 mt-1" size={24} />
          <p className="text-[#E74C3C] text-lg italic font-medium leading-relaxed">
            "Cada 'não agora' vira 'nunca mais'. E você fica dependendo de sempre encontrar gente nova, do zero, toda semana."
          </p>
        </div>
      </FadeIn>

    </div>
  </SlideWrapper>
);

export default Slide02Legendarios;
