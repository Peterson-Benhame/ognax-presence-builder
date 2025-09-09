import { Search, Wrench, Rocket } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Diagnóstico de 20 min (gratuito)",
      description: "Identificamos seu público, oferta e meta de captação para estruturar a estratégia ideal",
      details: ["Análise do público-alvo", "Definição da oferta principal", "Metas de captação", "Estratégia de conteúdo"]
    },
    {
      number: "02", 
      icon: Wrench,
      title: "Construção da LP",
      description: "Criamos design profissional, copy persuasiva e integrações essenciais",
      details: ["Design responsivo", "Copy focada em conversão", "Integração WhatsApp", "Google Analytics"]
    },
    {
      number: "03",
      icon: Rocket,
      title: "Publicação e ajustes",
      description: "Colocamos no ar e fornecemos recomendações para atrair tráfego qualificado",
      details: ["Publicação otimizada", "Medição básica configurada", "Recomendações de tráfego", "Ajustes iniciais"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-secondary to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Como funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Processo simples e direto em 3 etapas para sua landing page ficar pronta
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-8 animate-slide-up ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Step Visual */}
              <div className="flex-shrink-0 text-center">
                <div className="relative inline-block">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-4 shadow-xl">
                    <step.icon className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                </div>
              </div>

              {/* Step Content */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  {step.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {step.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {step.details.map((detail, detailIndex) => (
                    <div 
                      key={detailIndex}
                      className="flex items-center gap-3 bg-card p-3 rounded-lg shadow-sm"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-card-foreground">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;