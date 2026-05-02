import { Check, Star, Calendar, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const PricingSection = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [isDiscountModalOpen, setIsDiscountModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);

  const plans = [
    {
      name: "Free",
      price: { monthly: 0, yearly: 0 },
      links: {
        monthly: "https://smartmenu-app.aezap.site/cadastro?plan=free-trial",
        yearly: "https://smartmenu-app.aezap.site/cadastro?plan=free-trial"
      },
      description: "🆓 14 dias grátis para testar",
      features: [
        "Cardápio digital ilimitado",
        "Pedidos no painel admin",
        "PIX com QR Code automático",
        "Dashboard básico",
        "QR Code de acesso",
        "Tutorial prático incluído",
        "⏰ Válido por 14 dias",
        "❌ Impressão automática (comandas)",
        "❌ Programa de fidelização",
        "❌ Chatbot inteligente",
        "❌ Marketing em massa",
        "❌ Cadastro de clientes",
        "❌ Pedidos chegam no WhatsApp (tempo real)"
   
      ],
      cta: "🎉 Testar 14 Dias Grátis",
      popular: false
    },
    {
      name: "Starter",
      price: { monthly: 99, yearly: 950 },
      links: {
        monthly: "https://pay.kiwify.com.br/J1rCF1g?plan=starter-mensal",
        yearly: "https://pay.kiwify.com.br/XUr015d?plan=starter-anual"
      },
      description: "👉 Melhor para começar",
      features: [
        "Cardápio digital ilimitado",
        "PIX com QR Code automático", 
        { text: "APP próprio para clientes", bold: true },    
        { text: "Pedidos chegam organizados no WhatsApp", bold: true },
        { text: "Impressão automática (até 500/mês)", bold: true },
        { text: "Notificações WhatsApp", bold: true },
        "Pedidos no painel admin",
        "Dashboard básico",
        "QR Code de acesso",
        "Suporte VIP",
        "Configuração profissional opcional (nós fazemos tudo pra você)",
        "Tutorial prático incluído",
        "Atualizações gratuitas",
        "❌ Fidelização",
        "❌ Chatbot inteligente",
        "❌ Marketing em massa"
        
      ],
      cta: "Começar Agora",
      popular: false
    },
    {
      name: "Growth",
      price: { monthly: 229, yearly: 2203 },
      links: {
        monthly: "https://pay.kiwify.com.br/bYYyRRT?plan=growth-mensal",
        yearly: "https://pay.kiwify.com.br/1JkP3Hp?plan=growth-anual"
      },
      description: "🚀 Melhor custo-benefício",
      features: [
        "✨ Tudo do Starter +",
        "✨ Produtos ilimitados",
        "✨ Bairros ilimitados",
        { text: "Impressão automática (até 3.000/mês)", bold: true },
        { text: "Programa de Fidelização (pontos/cupons)", bold: true },
        { text: "Chatbot com 5 regras automáticas", bold: true },
        { text: "Envios de Mensagens em Massa (Marketing de Whatsapp)", bold: true },
        "Agendamento de pedidos",
        "Até 2 unidades",
        "Relatórios avançados (30+ dias)",
        "Suporte prioritário 24/7",
        "Configuração profissional opcional (nós fazemos tudo pra você)",
        "Tutorial prático incluído",
        "Atualizações gratuitas"
      ],
      cta: "🎯 Começar Agora",
      popular: true
    },
    {
      name: "Enterprise",
      price: { monthly: 499, yearly: 4792 },
      links: {
        monthly: "https://pay.kiwify.com.br/DTnEZqf?plan=enterprise-mensal",
        yearly: "https://pay.kiwify.com.br/Q7XRVyK?plan=enterprise-anual"
      },
      description: "💼 Para grandes operações",
      features: [
        "✨ Tudo do Growth +",
        { text: "Impressão automática (até 10.000/mês)", bold: true },
        { text: "Até 10 unidades com dashboard consolidado", bold: true },
        { text: "API REST completa", bold: true },
        { text: "Webhooks ilimitados", bold: true },
        { text: "Domínio Próprio", bold: true },
        "Suporte 24/7 dedicado",
        "Consultoria mensal incluída",
        "SLA 99.9% uptime",
        "Backup redundante",
        "Configuração profissional opcional (nós fazemos tudo pra você)",
        "Tutorial prático incluído",
        "Atualizações gratuitas"
      ],
      cta: "Planejar Implementação",
      popular: false
    }
  ];

  const handlePlanClick = (plan: any) => {
    if (plan.price.monthly === 0) {
      window.open(plan.links.monthly, '_blank');
      return;
    }
    if (billingPeriod === 'monthly') {
      setSelectedPlan(plan);
      setIsDiscountModalOpen(true);
    } else {
      window.open(plan.links.yearly, '_blank');
    }
  };

  const handleMonthlyProceed = () => {
    window.open(selectedPlan.links.monthly, '_blank');
    setIsDiscountModalOpen(false);
  };

  const handleYearlyProceed = () => {
    window.open(selectedPlan.links.yearly, '_blank');
    setIsDiscountModalOpen(false);
  };

  return (
    <section id="planos" className="py-20 bg-card-gradient border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Planos que cabem no seu{" "}
            <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
              bolso e crescem
            </span>{" "}
            com você
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sem taxa por pedido, sem surpresas. Pague apenas uma mensalidade fixa e fature o quanto quiser.
          </p>
          
          {/* Billing Period Toggle */}
          <div className="flex items-center justify-center mt-8 bg-muted rounded-lg p-1 max-w-sm mx-auto">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`flex items-center gap-2 px-6 py-3 rounded-md transition-all font-medium ${
                billingPeriod === 'monthly'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Calendar className="w-4 h-4" />
              Mensal
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`flex items-center gap-2 px-6 py-3 rounded-md transition-all font-medium relative ${
                billingPeriod === 'yearly'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <DollarSign className="w-4 h-4" />
              Anual
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full">
                -20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-background border rounded-2xl p-8 shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in ${
                plan.popular 
                  ? 'border-primary shadow-glow' 
                  : 'border-border hover:border-primary/50'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                
                <div className="space-y-2">
                  <div className="text-4xl font-bold">
                    {plan.price.monthly === 0 ? (
                      "Grátis"
                    ) : (
                      <>
                        R$ {billingPeriod === 'monthly' ? plan.price.monthly : Math.round(plan.price.yearly / 12)}
                        <span className="text-lg text-muted-foreground font-normal">/mês</span>
                      </>
                    )}
                  </div>
                  {plan.price.monthly > 0 && billingPeriod === 'yearly' && (
                    <div className="text-accent text-lg font-medium">
                      no plano anual (à vista) R$ {plan.price.yearly}
                      <span className="text-sm ml-2 bg-accent/20 text-accent px-2 py-1 rounded">
                        20% desconto
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-4 mb-8 max-h-96 overflow-y-auto">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    {typeof feature === 'string' && feature.includes('❌') ? (
                      <span className="text-xs text-muted-foreground">{feature}</span>
                    ) : (
                      <>
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        {typeof feature === 'object' && feature.bold ? (
                          <span className="text-sm font-bold text-accent bg-accent/10 px-3 py-1 rounded-md">
                            {feature.text}
                          </span>
                        ) : typeof feature === 'string' ? (
                          <span className="text-sm">{feature}</span>
                        ) : null}
                      </>
                    )}
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.popular ? "cta" : "outline"} 
                size="lg" 
                className="w-full"
                onClick={() => handlePlanClick(plan)}
              >
                {plan.cta}
              </Button>
              <p className="text-center text-xs text-muted-foreground mt-4">
                {plan.name === "Free" 
                  ? "✅ 14 dias de trial • Sem cartão necessário"
                  : ""
                }
              </p>
            </div>
          ))}
        </div>

        {/* Discount Modal */}
        <AlertDialog open={isDiscountModalOpen} onOpenChange={setIsDiscountModalOpen}>
          <AlertDialogContent className="max-w-md">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-center text-2xl">
                🎉 Economize 20%!
              </AlertDialogTitle>
              <AlertDialogDescription className="text-center space-y-4">
                <div className="text-lg">
                  Que tal economizar <span className="font-bold text-accent">
                    20%
                  </span> escolhendo o plano anual?
                </div>
                <div className="bg-accent/10 p-4 rounded-lg">
                  <div className="text-sm text-muted-foreground line-through">
                    12x R$ {selectedPlan?.price.monthly} = R$ {selectedPlan && selectedPlan.price.monthly * 12}
                  </div>
                  <div className="text-xl font-bold text-accent">
                    Por apenas R$ {selectedPlan?.price.yearly}/ano
                  </div>
                  <div className="text-sm text-accent">
                    Economize R$ {selectedPlan && (selectedPlan.price.monthly * 12) - selectedPlan.price.yearly} por ano!
                  </div>
                </div>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="flex-col gap-2">
              <AlertDialogAction 
                onClick={handleYearlyProceed}
                className="w-full bg-accent hover:bg-accent/90"
              >
                🎯 Quero Economizar 20%
              </AlertDialogAction>
              <AlertDialogCancel 
                onClick={handleMonthlyProceed}
                className="w-full"
              >
                Seguir com o Plano Mensal
              </AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

	  </div>
    </section>
  );
}

export default PricingSection;
