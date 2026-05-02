import { useEffect } from "react";

const AdminPanelSection = () => {
  useEffect(() => {
    // Load Wistia scripts
    const script1 = document.createElement("script");
    script1.src = "https://fast.wistia.com/player.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://fast.wistia.com/embed/pry58qabo7.js";
    script2.async = true;
    script2.type = "module";
    document.body.appendChild(script2);

    // Add styles for wistia player
    const style = document.createElement("style");
    style.textContent = `
      wistia-player[media-id='pry58qabo7']:not(:defined) { 
        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/pry58qabo7/swatch'); 
        display: block; 
        filter: blur(5px); 
        padding-top: 56.25%; 
      }
    `;
    document.head.appendChild(style);

    return () => {
      // Cleanup
      document.body.removeChild(script1);
      document.body.removeChild(script2);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Conheça o{" "}
            <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
              Painel Administrativo
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vídeo completo mostrando todas as funcionalidades do sistema administrativo da ÆZap Smart Menu. 
            Veja como gerenciar seu negócio de forma simples e intuitiva.
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative w-full bg-card rounded-2xl overflow-hidden shadow-xl border border-border">
            <div className="relative" style={{ paddingBottom: "56.25%" }}>
              <div className="absolute inset-0">
                <wistia-player media-id="pry58qabo7" aspect="1.7777777777777777"></wistia-player>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl border border-border p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">O que você vai aprender:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Como criar e gerenciar seu cardápio digital</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Configurar categorias e personalizações de produtos</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Sistema de fidelização e cupons</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Relatórios e análise de vendas em tempo real</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Funcionalidades principais:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Gerenciamento de pedidos centralizado</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Integração automática com WhatsApp</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Histórico e dados de clientes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Suporte dedicado 24/7</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminPanelSection;
