import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Não preciso pagar comissão por cada pedido?",
      answer: "Exatamente! Diferente do iFood e outros apps de delivery, aqui você paga apenas uma mensalidade fixa. Pode vender o quanto quiser que não pagará nenhuma taxa adicional por pedido. É seu restaurante, seus clientes, suas regras."
    },
    {
      question: "Qual é a diferença entre os planos?",
      answer: "Cada plano desbloqueia funcionalidades: Free para testar, Starter com notificações WhatsApp, Growth com fidelização e chatbot, e Enterprise com múltiplas unidades e API. Comece no plano que se adequa ao seu negócio e evolua quando precisar."
    },
    {
      question: "Posso cancelar quando quiser?",
      answer: "Claro! Não temos fidelidade. Você pode cancelar quando quiser, sem multa nem burocracia. Além disso, oferecemos 7 dias de garantia total - se não gostar, devolvemos seu dinheiro."
    },
    {
      question: "Como funciona a configuração inicial?",
      answer: "Nossa equipe faz toda a configuração inicial gratuitamente. Criamos seu cardápio personalizado, configuramos a impressora e deixamos tudo funcionando em até 48h. Você só precisa nos enviar seu cardápio atual e os dados da empresa."
    },
    {
      question: "Funciona em qualquer dispositivo?",
      answer: "Sim! A AEZap Smart Menu é 100% online e responsiva. Funciona perfeitamente em computador, tablet ou celular (Android e iOS). Você e sua equipe podem acessar de qualquer lugar, a qualquer hora."
    },
    {
      question: "É seguro? Meus dados ficam protegidos?",
      answer: "Totalmente seguro! Todos os dados são armazenados em servidores protegidos com criptografia de ponta a ponta. Fazemos backups automáticos diários e seguimos os mais altos padrões de segurança da informação (LGPD compliant)."
    },
    {
      question: "Como funciona o ChatBot Atendente?",
      answer: "Integramos um robô em seu WhatsApp que responde automaticamente perguntas frequentes, envia cardápio, localização, horário de funcionamento e muito mais. Disponível a partir do plano Growth."
    },
    {
      question: "Ainda tem dúvidas sobre integração ou features específicas?",
      answer: "Nossa equipe está pronta para esclarecer qualquer questão! Entre em contato conosco via WhatsApp e vamos ajudar você a escolher o melhor plano e implementar o sistema no seu estabelecimento."
    }
  ];

  return (
    <section className="py-20 bg-card-gradient border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Dúvidas{" "}
            <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
              frequentes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Respondemos as principais dúvidas sobre nosso sistema de cardápio digital
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border border-border rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-background border border-border rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-muted-foreground mb-6">
              Fale diretamente com nossa equipe. Estamos sempre prontos para ajudar você!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://api.whatsapp.com/send/?phone=5521996643311&text=Ol%C3%A1%2C+ainda+tenho+d%C3%BAvidas+sobre+o+%2Asistema+aezap+SmartMenu%2A&type=phone_number&app_absent=0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg font-medium transition-colors"
              >
                💬 Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
