import { Smartphone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import InfoModal from "./InfoModal";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });

  const openModal = (title: string, content: string) => {
    setModalContent({ title, content });
    setIsModalOpen(true);
  };

  const scrollToSection = (sectionText: string) => {
    const section = Array.from(document.querySelectorAll('h2, h1')).find(
      el => el.textContent?.toLowerCase().includes(sectionText.toLowerCase())
    );
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  const integracoesContent = `
  `;

  const sobreNosContent = `
    <h3>Sobre a ÆZap Smart Menu</h3>
    <p>Somos uma empresa especializada em soluções digitais para o setor alimentício, fundada com o objetivo de simplificar a gestão de pedidos e aumentar as vendas de restaurantes, pizzarias, lanchonetes e estabelecimentos do ramo.</p>
    
    <h4>Nossa Missão</h4>
    <p>Democratizar o acesso à tecnologia de ponta para pequenos e médios empresários do setor alimentício, oferecendo ferramentas poderosas e intuitivas que antes eram exclusividade de grandes corporações.</p>
    
    <h4>Por que escolher a ÆZap?</h4>
    <ul>
      <li><strong>Especialização:</strong> Foco exclusivo no setor alimentício</li>
      <li><strong>Sem comissões:</strong> Diferente dos marketplaces, não cobramos por pedido</li>
      <li><strong>Suporte dedicado:</strong> Equipe especializada em atendimento gastronômico</li>
      <li><strong>Tecnologia própria:</strong> Sistema desenvolvido especificamente para suas necessidades</li>
      <li><strong>Resultados comprovados:</strong> Mais de 500 estabelecimentos atendidos</li>
    </ul>
    
    <p>Transforme seu negócio conosco e faça parte da revolução digital no setor alimentício!</p>
  `;

  const privacidadeContent = `
    <h3>Política de Privacidade</h3>
    <p><strong>Última atualização:</strong> Setembro de 2024</p>
    
    <h4>1. Coleta de Informações</h4>
    <p>Coletamos apenas as informações necessárias para o funcionamento do serviço:</p>
    <ul>
      <li>Dados do estabelecimento (nome, endereço, telefone)</li>
      <li>Informações de contato do responsável</li>
      <li>Dados de pedidos para processamento</li>
      <li>Informações de uso do sistema para melhorias</li>
    </ul>
    
    <h4>2. Uso das Informações</h4>
    <p>Suas informações são utilizadas exclusivamente para:</p>
    <ul>
      <li>Processamento de pedidos</li>
      <li>Suporte técnico</li>
      <li>Melhorias no sistema</li>
      <li>Comunicações relacionadas ao serviço</li>
    </ul>
    
    <h4>3. Compartilhamento de Dados</h4>
    <p>Não compartilhamos, vendemos ou cedemos seus dados pessoais a terceiros. Suas informações permanecem sob sua propriedade.</p>
    
    <h4>4. Segurança</h4>
    <p>Utilizamos protocolos de segurança avançados incluindo criptografia SSL e backup automático para proteger suas informações.</p>
    
    <h4>5. Seus Direitos</h4>
    <p>Você pode a qualquer momento:</p>
    <ul>
      <li>Solicitar acesso aos seus dados</li>
      <li>Corrigir informações incorretas</li>
      <li>Solicitar exclusão de dados</li>
      <li>Exportar suas informações</li>
    </ul>
    
    <p>Para exercer seus direitos ou esclarecer dúvidas, entre em contato conosco pelo WhatsApp (21) 99664-3311.</p>
  `;

  return (
    <>
      <footer className="bg-background border-t border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">
                ÆZap Smart Menu
              </h3>
              <p className="text-muted-foreground">
                Sistema completo para quem trabalha com pedidos. 
                Venda mais, sem complicação.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Produto</h4>
              <div className="space-y-2 text-muted-foreground">
                <button 
                  onClick={() => scrollToSection('por que escolher')}
                  className="block hover:text-primary transition-colors cursor-pointer text-left"
                >
                  Funcionalidades
                </button>
                <button 
                  onClick={() => scrollToSection('planos')}
                  className="block hover:text-primary transition-colors cursor-pointer text-left"
                >
                  Planos e Preços
                </button>
                <button 
                  onClick={() => scrollToSection('funcionando na prática')}
                  className="block hover:text-primary transition-colors cursor-pointer text-left"
                >
                  Demonstração
                </button>
                <button 
                  onClick={() => openModal('Integrações', integracoesContent)}
                  className="block hover:text-primary transition-colors cursor-pointer text-left"
                >
                 
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Empresa</h4>
              <div className="space-y-2 text-muted-foreground">
                <button 
                  onClick={() => openModal('Sobre Nós', sobreNosContent)}
                  className="block hover:text-primary transition-colors cursor-pointer text-left"
                >
                  Sobre Nós
                </button>
                <div className="text-muted-foreground cursor-not-allowed">Blog</div>
                <button 
                  onClick={() => scrollToSection('clientes estão falando')}
                  className="block hover:text-primary transition-colors cursor-pointer text-left"
                >
                  Casos de Sucesso
                </button>
                <button 
                  onClick={() => openModal('Política de Privacidade', privacidadeContent)}
                  className="block hover:text-primary transition-colors cursor-pointer text-left"
                >
                  Política de Privacidade
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Smartphone className="w-4 h-4" />
                  <span>(21) 2197224-3112</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>robsonw.negocios@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Rio de Janeiro, RJ</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span></span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>© 2026 ÆZap Smart Menu. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <InfoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalContent.title}
        content={modalContent.content}
      />
    </>
  );
};

export default Footer;