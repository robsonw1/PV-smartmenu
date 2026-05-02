import whatsappPrinter from "@/assets/whatsapp-printer.jpg";
import whatsappPrinter1 from "@/assets/whatsapp-printer1.png";

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Resultado real de nossos{" "}
            <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
              clientes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja como o AEZap Smart Menu está transformando os negócios
          </p>
        </div>

        {/* Real Client Evidence */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8">
              <img 
                src={whatsappPrinter}
                alt="Impressora térmica AEZap Smart Menu em funcionamento - Forneiro Éden"
                className="w-full h-auto rounded-xl border border-border shadow-lg"
              />
              <img 
                src={whatsappPrinter1}
                alt="Sistema de pedidos AEZap Smart Menu integrado - Forneiro Éden"
                className="w-full h-auto rounded-xl border border-border shadow-lg"
              />
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 max-w-2xl mx-auto">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Sistema pronto, em funcionamento e gerando resultados reais para seu negócio
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;