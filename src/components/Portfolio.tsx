import { ExternalLink, Zap, Target, TrendingUp } from "lucide-react";

const Portfolio = () => {
  const cases = [
    {
      title: "Psicóloga Clínica",
      thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop&crop=center",
      metrics: [
        { icon: Target, text: "Oferta de terapia individual claramente explicada" },
        { icon: Zap, text: "Carregamento em 1.8s no mobile" },  
        { icon: TrendingUp, text: "65% de cliques no WhatsApp" }
      ]
    },
    {
      title: "Personal Trainer",
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&crop=center", 
      metrics: [
        { icon: Target, text: "3 tipos de treino organizados por objetivo" },
        { icon: Zap, text: "Otimizada para Stories do Instagram" },
        { icon: TrendingUp, text: "45% de conversão em agendamentos" }
      ]
    },
    {
      title: "Consultório Odontológico",
      thumbnail: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&h=250&fit=crop&crop=center",
      metrics: [
        { icon: Target, text: "Especialidades e valores transparentes" },
        { icon: Zap, text: "Integração com Google Meu Negócio" },
        { icon: TrendingUp, text: "2x mais agendamentos online" }
      ]
    },
    {
      title: "Advogada Família",
      thumbnail: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&h=250&fit=crop&crop=center",
      metrics: [
        { icon: Target, text: "Áreas de atuação explicadas didaticamente" },
        { icon: Zap, text: "Formulário de consulta otimizado" },
        { icon: TrendingUp, text: "80% dos contatos são qualificados" }
      ]
    },
    {
      title: "Nutricionista",
      thumbnail: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=400&h=250&fit=crop&crop=center",
      metrics: [
        { icon: Target, text: "Consulta online e presencial bem definidas" },
        { icon: Zap, text: "Calendário integrado para agendamentos" },
        { icon: TrendingUp, text: "3x mais consultas que o perfil anterior" }
      ]
    },
    {
      title: "Estética Avançada",
      thumbnail: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=250&fit=crop&crop=center",
      metrics: [
        { icon: Target, text: "Procedimentos com antes/depois organizados" },
        { icon: Zap, text: "Galeria otimizada para mobile" },
        { icon: TrendingUp, text: "55% de conversão em avaliações" }
      ]
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-6 bg-gradient-to-b from-background to-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Portfólio de resultados
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cases reais de profissionais que organizaram sua presença e facilitaram o contato
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((project, index) => (
            <div 
              key={index}
              className="card-professional rounded-2xl overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.thumbnail}
                  alt={`Case ${project.title}`}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Metrics */}
              <div className="p-6">
                <div className="space-y-4">
                  {project.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                        <metric.icon className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-card-foreground leading-relaxed">
                        {metric.text}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-border">
                  <button className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-medium text-sm">
                    <span>Ver caso completo</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to see full portfolio */}
        <div className="text-center mt-12">
          <button className="bg-primary text-primary-foreground hover:bg-primary-dark px-8 py-4 rounded-lg font-semibold transition-professional">
            Ver portfólio completo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;