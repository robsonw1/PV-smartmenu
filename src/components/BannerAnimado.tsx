import { Megaphone } from "lucide-react";

const messages = [
  "ROBÔ DE PEDIDOS 24/7",
  "🚀 IMPRESSÃO AUTOMÁTICA",
  "✅ CARDÁPIO DIGITAL INTEGRADO",
  "🚀 VENDA E FIDELIZE CLIENTES",
  "✅ TESTE GRÁTIS POR 14 DIAS"
];

const BannerAnimado = () => {
  return (
    <div
      className="w-full overflow-hidden bg-gradient-to-r from-primary to-accent text-white font-bold py-3 text-sm flex items-center"
      style={{ position: 'relative' }}
    >
      <div
        className="flex animate-banner-loop whitespace-nowrap"
        style={{ minWidth: '200%', width: 'max-content' }}
      >
        {[...messages, ...messages].map((msg, idx) => (
          <span key={idx} className="flex items-center mx-6">
            <Megaphone className="w-4 h-4 mr-2" /> {msg}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BannerAnimado;
