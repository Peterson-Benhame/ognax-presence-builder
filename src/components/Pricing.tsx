import { Check, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  // Editable pricing parameters - UPDATE THESE VALUES
  const PRECO_ESSENCIAL = "790";
  const PRECO_PROFISSIONAL = "1.490"; 
  const PRECO_PERFORMANCE = "2.490";
  const PRAZO_GARANTIA = "30";
  
  // WhatsApp parameters
  const DDD = "11";
  const NUMERO = "999999999";

  const plans = [
    {
      name: "Essencial",
      price: PRECO_ESSENCIAL,
      badge: null,
      description: "Ideal para quem está começando a organizar sua presença digital",
      features: [
        "Hero section com oferta clara",
        "1 CTA para WhatsApp otimizado",
        "1 formulário de contato simples",
        "Design responsivo",
        "1 revisão incluída",
        "Publicação no ar"
      ],
      buttonText: "Começar Agora",
      popular: false
    },
    {
      name: "Profissional", 
      price: PRECO_PROFISSIONAL,
      badge: "Mais Popular",
      description: "Para profissionais que querem prova social e otimização completa",
      features: [
        "Tudo do plano Essencial",
        "Seção de provas sociais",
        "Área de portfólio/cases",
        "SEO básico (title, description, OG tags)",
        "Google Analytics 4 e Meta Pixel",
        "2 revisões incluídas",
        "Integração com calendário"
      ],
      buttonText: "Escolher Profissional",
      popular: true
    },
    {
      name: "Performance",
      price: PRECO_PERFORMANCE, 
      badge: "Resultado Máximo",
      description: "Para quem quer testar, otimizar e acompanhar resultados",
      features: [
        "Tudo do plano Profissional",
        "2 variações para teste A/B",
        "Copy revisada por especialista",
        "Recomendações de tráfego pago",
        "30 dias de ajustes e otimizações",
        "Consultoria de captação",
        "Relatório de performance"
      ],
      buttonText: "Maximizar Resultados",
      popular: false
    }
  ];

  const generateWhatsAppLink = (planName: string, price: string) => {
    const message = `Olá! Tenho interesse no plano ${planName} (R$ ${price}). Gostaria de agendar uma conversa para entender melhor como vocês podem me ajudar a organizar minha presença profissional.`;
    return `https://wa.me/55${DDD}${NUMERO}?text=${encodeURIComponent(message)}&utm_source=lp&utm_medium=cta&utm_campaign=pricing_${planName.toLowerCase()}`;
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-secondary to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Planos e investimento
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Escolha o plano ideal para organizar sua presença e facilitar o contato
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`card-professional rounded-2xl p-8 relative animate-slide-up ${
                plan.popular ? 'ring-2 ring-primary shadow-2xl' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    {plan.popular && <Star className="w-4 h-4" />}
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-card-foreground">
                  {plan.name}
                </h3>
                <div className="text-4xl font-bold text-primary mb-2">
                  R$ {plan.price}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-success/10 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-success" />
                    </div>
                    <span className="text-card-foreground text-sm leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                className={`w-full py-6 text-lg font-semibold transition-professional ${
                  plan.popular 
                    ? 'bg-primary hover:bg-primary-dark text-primary-foreground glow-primary' 
                    : 'bg-card-foreground hover:bg-card-foreground/90 text-card'
                }`}
                asChild
              >
                <a 
                  href={generateWhatsAppLink(plan.name, plan.price)}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {plan.buttonText}
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="bg-success/5 border border-success/20 rounded-xl p-8 text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
              <Zap className="w-6 h-6 text-success" />
            </div>
            <h3 className="text-xl font-semibold text-success">
              Garantia Técnica de {PRAZO_GARANTIA} dias
            </h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Correções de bugs, ajustes de estilo e problemas técnicos por {PRAZO_GARANTIA} dias após a entrega. 
            <br />
            <span className="text-sm italic">*Não incluí garantia de resultados comerciais - estes dependem de tráfego e estratégia de aquisição.</span>
          </p>
        </div>

        {/* Payment methods or additional info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            💳 Aceitamos PIX, cartão de crédito (até 6x) e transferência bancária
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;