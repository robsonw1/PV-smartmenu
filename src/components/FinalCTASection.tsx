import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Shield } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-hero-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          
          <div className="space-y-8 mb-12">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Pronto para{" "}
              <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
                vender mais
              </span>{" "}
              sem confusão no atendimento?
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Junte-se a centenas de estabelecimentos que já transformaram seus pedidos 
              e aumentaram suas vendas com a ÆZap Smart Menu.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 bg-background/10 backdrop-blur-sm border border-border/50 rounded-xl p-6">
              <CheckCircle className="w-8 h-8 text-accent flex-shrink-0" />
              <div className="text-left">
                <div className="font-semibold">Configuração profissional opcional (nós fazemos tudo pra você)</div>
                <div className="text-sm text-muted-foreground">Em até 48 horas funcionando</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-background/10 backdrop-blur-sm border border-border/50 rounded-xl p-6">
              <CheckCircle className="w-8 h-8 text-accent flex-shrink-0" />
              <div className="text-left">
                <div className="font-semibold">Sem Taxa por Pedido</div>
                <div className="text-sm text-muted-foreground">Diferente do iFood e concorrentes</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-background/10 backdrop-blur-sm border border-border/50 rounded-xl p-6">
              <CheckCircle className="w-8 h-8 text-accent flex-shrink-0" />
              <div className="text-left">
                <div className="font-semibold">Pedidos direto no WhatsApp</div>
                <div className="text-sm text-muted-foreground">Receba e gerencie pedidos facilmente</div>
              </div>
            </div>
          </div>

          {/* Guarantee Section */}
          <div className="bg-gradient-to-r from-green-500/10 to-accent/10 border-2 border-green-500 rounded-2xl p-8 mb-12 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-green-600" />
              <h3 className="text-2xl font-bold text-green-600">Garantia de 7 Dias</h3>
            </div>
            <p className="text-lg text-muted-foreground mb-4">
              Não gostou? <span className="font-bold text-foreground">Devolvemos 100% do seu dinheiro</span> — sem explicação necessária, sem burocracia, sem perguntas.
            </p>
            <p className="text-sm text-muted-foreground">
              Você tem 7 dias completos para testar o sistema e garantir que funciona para seu estabelecimento.
            </p>
          </div>

          <div className="space-y-6">
            <Button
              variant="hero"
              size="lg"
              className="text-2xl px-16 py-8 animate-scale-in"
              onClick={() => {
                const el = document.getElementById('planos');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              COMEÇAR AGORA
              <ArrowRight className="w-8 h-8 ml-3" />
            </Button>
            
            <p className="text-muted-foreground">
              🎯 Personalizada para seu negócio • 7 dias de garantia
            </p>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;