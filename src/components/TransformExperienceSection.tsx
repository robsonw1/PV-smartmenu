import restaurantsImage from "@/assets/restaurants-category.jpg";
import deliveryImage from "@/assets/delivery-category.jpg";
import franchisesImage from "@/assets/franchises-category.jpg";
import distributorsImage from "@/assets/distributors-category-new.jpg";

const TransformExperienceSection = () => {
  const categories = [
    {
      title: "Restaurantes e Lanchonetes",
      image: restaurantsImage,
      description: "Aplicativo próprio e Cardápio digital com pedidos automáticos direto para a cozinha."
    },
    {
      title: "Delivery e Dark Kitchens", 
      image: deliveryImage,
      description: "Ideal para pizzarias, hamburguerias, lanchonetes, açaíterias, pastelarias, marmitarias, food trucks, cafeterias, docerias, bares e operações de delivery em geral."
    },
    {
      title: "Lojas de bairro no geral",
      image: franchisesImage,
      description: "Serve para petshops, auto peças, lojas de suplementos, padarias, encomendas, mercadinhos, salão de beleza e muito mais. Se vende algo, nosso sistema pode ajudar a vender mais e melhor."
    },
    {
      title: "Distribuidoras",
      image: distributorsImage,
      description: "Serve para Bares pequenos, Adegas com delivery, Distribuidoras de bebidas, Quiosques, Cozinhas compartilhadas"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Mais pedidos, menos erros e atendimento mais rápido com a{" "}
            <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
              ÆZap Smart Menu
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cardápio ou Catálogo Digital com impressão automática e resumo no whatsapp. 
            IDEAL PARA...
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-background border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <div className="bg-white rounded-lg shadow-md px-4 py-2 mb-4 w-fit">
                  <h3 className="text-xl font-bold text-primary">
                    {category.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformExperienceSection;