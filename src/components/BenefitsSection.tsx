import { 
  Smartphone, 
  Pizza, 
  Receipt, 
  Bot, 
  Zap,
  CheckCircle 
} from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
        {
      icon: Receipt,
      title: "Sistema de Fidedelização (cashback, pontos, cupons)",
      description: "Se o sistema fidelizar só 3 clientes que compram duas vezes por mês com um ticket médio de R$ 60, já são R$ 360, o app se paga sozinho com apenas 3 clientes."
    },

    {
      icon: Smartphone,
      title: "WhatsApp, facebook e instagram",
      description: "Clientes fazem pedidos pelo link do cardápio e você recebe tudo organizado no WhatsApp, com impressão automática."
    },

    {
      icon: Pizza,
      title: "Ajustável para qualquer estabelecimento",
      description: "Clientes montam pizzas meia a meia, bebidas e acompanhamentos. Escolhem promoções seguindo regras personalizada para qualquer negócio."
    },

    {
      icon: Bot,
      title: "Chatbot Atendente Whatsapp",
      description: "Responde perguntas frequentes dos clientes, envia localização, cardápio e muito mais."
    },
    {
      icon: Zap,
      title: "Simples para o cliente",
      description: "Interface intuitiva que qualquer cliente consegue usar, sem necessidade de cadastro ou aplicativo."
    },
    {
      icon: CheckCircle,
      title: "Automático para o dono",
      description: "Tudo funciona automaticamente: pedido chega, imprime e você só precisa preparar e entregar."
    }
  ];

  return (
    <section className="py-20 bg-card-gradient border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Por que escolher{" "}
            <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
              AEZap Smart Menu?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sistema completo para quem trabalha com pedidos. Venda mais, sem complicação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="group bg-background border border-border rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-background border border-border rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-accent">
              💡 Diferente de outros apps
            </h3>
            <p className="text-lg text-muted-foreground">
              Aqui você <strong className="text-foreground">não paga comissão por pedido</strong>. 
              É seu aplicativo, seus clientes, suas regras. O cardápio digital é seu, 
              os dados dos clientes são seus, e você mantém 100% do valor de cada venda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;