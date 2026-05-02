import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-hero-gradient flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8 text-center lg:text-left animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Transforme seus{" "}
                <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
                  pedidos no delivery
                </span>{" "}
                com a ÆZap Smart Menu
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                Receba pedidos organizados no WhatsApp, com impressão automática, sistema de fidelização e atendimento mais rápido. 
                Sem comissões, sem complicação.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="hero"
                className="text-xl"
                size="lg"
                onClick={() => {
                  const el = document.getElementById('planos');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                COMEÇAR AGORA
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="text-lg border-muted"
                onClick={() => {
                  const targetSection = Array.from(document.querySelectorAll('h2')).find(
                    el => el.textContent?.toLowerCase().includes('simples de usar')
                  ) as HTMLElement | undefined;
                  if (!targetSection) return;
                  const start = window.scrollY || window.pageYOffset;
                  const rect = targetSection.getBoundingClientRect();
                  const targetY = start + rect.top - 20; // small offset
                  const duration = 900; // slower, 900ms

                  let startTime: number | null = null;
                  const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

                  const step = (timestamp: number) => {
                    if (!startTime) startTime = timestamp;
                    const elapsed = timestamp - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const eased = easeInOutCubic(progress);
                    window.scrollTo(0, Math.round(start + (targetY - start) * eased));
                    if (elapsed < duration) requestAnimationFrame(step);
                  };

                  requestAnimationFrame(step);
                }}
              >
                Ver Como Funciona
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Sem taxa por pedido</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Configuração profissional opcional (nós fazemos tudo pra você)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Suporte dedicado</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Sistema de cardápio digital em funcionamento" 
                className="w-full rounded-2xl shadow-xl border border-border"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-card border border-border rounded-lg p-4 shadow-xl animate-bounce">
              <div className="text-accent text-2xl font-bold">+150%</div>
              <div className="text-sm text-muted-foreground">Pedidos organizados</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-4 shadow-xl animate-bounce delay-1000">
              <div className="text-primary text-2xl font-bold">0%</div>
              <div className="text-sm text-muted-foreground">Taxa por pedido</div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;