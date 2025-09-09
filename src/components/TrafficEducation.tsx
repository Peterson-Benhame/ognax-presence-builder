import { MapPin, Megaphone, PenTool, Users, Link2, Instagram } from "lucide-react";

const TrafficEducation = () => {
  const trafficSources = [
    {
      icon: MapPin,
      title: "Google Meu Negócio",
      description: "Perfil otimizado com link da LP na descrição e posts regulares",
      difficulty: "Fácil",
      color: "text-success"
    },
    {
      icon: Megaphone, 
      title: "Anúncios Meta/Google",
      description: "Campanhas direcionadas para sua região e público específico",
      difficulty: "Intermediário",
      color: "text-warning"
    },
    {
      icon: PenTool,
      title: "Conteúdo/SEO Local",
      description: "Artigos sobre sua área de atuação mencionando sua cidade",
      difficulty: "Intermediário",
      color: "text-warning"
    },
    {
      icon: Users,
      title: "Parcerias Estratégicas",
      description: "Troca de indicações com profissionais complementares",
      difficulty: "Fácil",
      color: "text-success"
    },
    {
      icon: Link2,
      title: "Link na Bio",
      description: "Instagram, TikTok, LinkedIn direcionando para a LP",
      difficulty: "Muito Fácil",
      color: "text-success"
    },
    {
      icon: Instagram,
      title: "Stories e Posts",
      description: "Conteúdo educativo com CTA para acessar a landing page",
      difficulty: "Fácil", 
      color: "text-success"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Como levar visitantes até aqui
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Lista prática de estratégias para direcionar tráfego para sua landing page
          </p>
          
          <div className="bg-warning/10 border border-warning/20 rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-warning-foreground font-medium">
              ⚠️ <strong>Importante:</strong> Sem tráfego, a LP recebe poucas visitas. 
              Planeje a aquisição junto com a criação da página.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trafficSources.map((source, index) => (
            <div 
              key={index}
              className="card-professional p-8 rounded-2xl animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg ${source.color}`}>
                  <source.icon className="w-6 h-6" />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${source.color} bg-current bg-opacity-10`}>
                  {source.difficulty}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                {source.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {source.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Tips */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              🎯 Dica para iniciantes
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Comece com o link na bio das redes sociais e Google Meu Negócio. 
              São estratégias gratuitas e de resultado rápido.
            </p>
          </div>

          <div className="bg-accent/5 border border-accent/20 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              🚀 Para acelerar resultados
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Invista em anúncios direcionados. Com R$ 10-20/dia já é possível 
              ter visitantes qualificados diariamente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrafficEducation;