import { CheckCircle, MessageCircle, Star, TrendingUp, Zap } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Oferta clara e profissional",
      description: "Sua proposta de valor organizada de forma didática e convincente"
    },
    {
      icon: MessageCircle,
      title: "Caminhos fáceis de contato",
      description: "WhatsApp e formulários integrados para facilitar o primeiro contato"
    },
    {
      icon: Star,
      title: "Prova social integrada",
      description: "Depoimentos e cases organizados para gerar confiança"
    },
    {
      icon: TrendingUp,
      title: "Pronto para anúncios, SEO e métricas",
      description: "Estrutura otimizada para campanhas e acompanhamento de resultados"
    },
    {
      icon: Zap,
      title: "Carregamento rápido no 4G",
      description: "Experiência móvel otimizada para não perder nenhum contato"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Por que ter uma landing page?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Organize sua presença digital e facilite o caminho do interesse ao contato
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="card-professional p-8 rounded-2xl text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;