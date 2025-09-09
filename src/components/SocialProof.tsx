import { Star, Quote } from "lucide-react";

const SocialProof = () => {
  const testimonials = [
    {
      name: "Dr. Maria Silva",
      role: "Psicóloga Clínica",
      text: "Minha página ficou profissional e os contatos via WhatsApp aumentaram significativamente. Muito mais organizado que só o Instagram.",
      rating: 5
    },
    {
      name: "Carlos Mendes", 
      role: "Personal Trainer",
      text: "Agora tenho um lugar para explicar meus serviços direito. Os clientes chegam mais preparados para fechar.",
      rating: 5
    },
    {
      name: "Ana Paula Costa",
      role: "Nutricionista",
      text: "A landing page me deu credibilidade. Parece que tenho uma clínica grande, mesmo trabalhando home office.",
      rating: 5
    }
  ];

  const metrics = [
    {
      number: "150+",
      label: "Landing Pages Criadas"
    },
    {
      number: "85%",
      label: "Taxa de Satisfação"
    },
    {
      number: "2.3s",
      label: "Tempo Médio de Carregamento"
    },
    {
      number: "40%",
      label: "Aumento Médio em Contatos"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Resultados dos nossos clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Profissionais que organizaram sua presença e facilitaram o contato
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {metric.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card-professional p-8 rounded-2xl animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center justify-center mb-6">
                <Quote className="w-8 h-8 text-primary/30" />
              </div>
              
              <div className="flex items-center justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-warning fill-current" />
                ))}
              </div>
              
              <p className="text-card-foreground mb-6 leading-relaxed text-center">
                "{testimonial.text}"
              </p>
              
              <div className="text-center">
                <div className="font-semibold text-card-foreground">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Before/After Preview */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card-professional p-6 rounded-2xl text-center">
            <h3 className="text-xl font-semibold mb-4 text-card-foreground">Antes</h3>
            <div className="bg-muted/50 h-48 rounded-lg flex items-center justify-center mb-4">
              <span className="text-muted-foreground">Instagram disperso</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Informações espalhadas, sem foco na conversão
            </p>
          </div>

          <div className="card-professional p-6 rounded-2xl text-center">
            <h3 className="text-xl font-semibold mb-4 text-card-foreground">Depois</h3>
            <div className="bg-primary/10 h-48 rounded-lg flex items-center justify-center mb-4">
              <span className="text-primary font-medium">Landing Page Profissional</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Oferta clara, prova social e CTAs estratégicos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;