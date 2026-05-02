import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import VideoModal from "./VideoModal";
import smartphoneImage from "@/assets/smartphone-menu-mockup.jpg";
import printerImage from "@/assets/printer-receipt.jpg";
import adminMockup from "@/assets/admin-mockup.png";

const DemoSection = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Veja como é{" "}
            <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
              simples de usar
            </span>
          </h2>
          <img 
            src={adminMockup}
            alt="Mockup sistema AEZap Smart Menu em dispositivos"
            className="mx-auto mb-8 max-w-5xl w-full h-auto shadow-2xl rounded-2xl border border-border"
            loading="eager"
            decoding="async"
            style={{ imageRendering: 'crisp-edges' }}
          />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Em 3 passos simples, seus clientes fazem pedidos e você recebe tudo organizado
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center mb-16">
          {/* Step 1 */}
          <div className="text-center space-y-6 animate-fade-in">
            <div className="relative mx-auto max-w-sm">
              <img 
                src={smartphoneImage}
                alt="Cliente escolhendo no cardápio digital"
                className="w-full rounded-2xl shadow-xl border border-border"
              />
              <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-glow">
                1
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Cliente Escolhe</h3>
              <p className="text-muted-foreground">
                Cliente acessa o link do seu app, monta o pedido de forma personalizada para qualquer delivery como combos, pizzas meia a meia etc. 
                Escolhe bebidas, e adicionais de forma intuitiva.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="text-center space-y-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="relative mx-auto max-w-sm">
              <img 
                src={printerImage}
                alt="Pedido sendo impresso automaticamente"
                className="w-full rounded-2xl shadow-xl border border-border"
              />
              <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-glow">
                2
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Imprime Automático</h3>
              <p className="text-muted-foreground">
                Assim que o cliente confirma, o pedido é calculado automaticamente e 
                impresso direto na sua cozinha. Sem erros, sem confusão.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="text-center space-y-6 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <div className="relative mx-auto max-w-sm bg-card rounded-2xl border border-border p-8 shadow-xl">
              <div className="space-y-4">
                <div className="bg-accent/20 text-accent p-4 rounded-lg">
                  <div className="text-sm font-medium">WhatsApp</div>
                  <div className="text-lg font-bold">Novo pedido recebido! 🍕</div>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg text-left">
                  <div className="text-sm text-muted-foreground mb-2">Resumo do pedido:</div>
                  <div className="space-y-1 text-sm">
                    <div>• Pizza Margherita (M)</div>
                    <div>• Coca-Cola 350ml</div>
                    <div className="font-semibold text-accent pt-2">Total: R$ 45,90</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-glow">
                3
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Recebe no WhatsApp</h3>
              <p className="text-muted-foreground">
                Você recebe um resumo completo no WhatsApp com todos os detalhes 
                do pedido e dados do cliente para entrega.
              </p>
            </div>
          </div>
        </div>

        {/* VideoModal removido pois não é mais utilizado */}
      </div>
    </section>
  );
};

export default DemoSection;