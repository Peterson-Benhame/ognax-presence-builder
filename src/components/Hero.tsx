import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  // EDITABLE PARAMETERS - UPDATE THESE VALUES
  const DDD = "11"; // Replace with your area code
  const NUMERO = "999999999"; // Replace with your WhatsApp number
  
  // A/B TEST OPPORTUNITY: Alternative WhatsApp messages
  const whatsappMessage = `Olá, quero uma landing page com foco em presença profissional. Sou [{PROFISSAO}], atendo [{PUBLICO}] e oferto [{OFERTA}].`;
  // Alternative message: `Oi! Vi o site de vocês e me interessei pelas landing pages profissionais. Podem me ajudar?`;
  
  const whatsappUrl = `https://wa.me/55${DDD}${NUMERO}?text=${encodeURIComponent(whatsappMessage)}&utm_source=lp&utm_medium=cta&utm_campaign=contato_whatsapp`;

  return (
    <section 
      className="min-h-screen flex items-center justify-center px-6 py-20 relative"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(34, 99, 235, 0.9) 0%, rgba(59, 130, 246, 0.8) 100%), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-6xl mx-auto text-center text-white relative z-10">
        <div className="animate-fade-in">
          {/* A/B TEST OPPORTUNITY: Alternative headlines */}
          {/* Option A (current): "Presença profissional que facilita o contato" */}
          {/* Option B: "Explique sua oferta. Facilite o contato. Comece pelo essencial." */}
          {/* Option C: "Uma página clara e rápida para concentrar sua presença." */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Presença profissional que{" "}
            <span className="text-gradient bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              facilita o contato
            </span>
          </h1>
          
          {/* Sub-headline */}
          <p className="text-xl md:text-2xl mb-8 leading-relaxed text-blue-50 max-w-4xl mx-auto">
            Landing pages enxutas, rápidas e prontas para captação — com oferta clara, 
            prova social e CTA para WhatsApp.
          </p>
          
          {/* A/B TEST OPPORTUNITY: CTA positioning and text */}
          {/* Test: Single CTA vs Two CTAs */}
          {/* Test: "Falar no WhatsApp" vs "Começar Agora" vs "Quero Minha Landing Page" */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-blue-50 px-8 py-4 text-lg font-semibold glow-primary transition-professional"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold transition-professional"
              asChild
            >
              <a href="#portfolio">
                Ver portfólio
              </a>
            </Button>
          </div>
          
          {/* Disclaimer */}
          <p className="text-sm text-blue-100 max-w-3xl mx-auto leading-relaxed">
            *Resultados dependem de tráfego e estratégia de aquisição (anúncios, SEO, conteúdo). 
            A LP organiza e facilita a captação.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;