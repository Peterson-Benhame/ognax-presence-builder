import { Button } from "@/components/ui/button";

const Footer = () => {
  // Editable parameters
  const DDD = "11";
  const NUMERO = "999999999";
  const URL_PRIVACIDADE = "#"; // Replace with actual privacy policy URL
  
  const finalCtaMessage = "Olá! Quero estruturar minha presença profissional e facilitar o contato com uma landing page. Vamos conversar?";
  const finalCtaUrl = `https://wa.me/55${DDD}${NUMERO}?text=${encodeURIComponent(finalCtaMessage)}&utm_source=lp&utm_medium=cta&utm_campaign=footer_final`;

  return (
    <footer className="bg-foreground text-background">
      {/* Final CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Estruture sua presença e facilite o contato
            </h2>
            <p className="text-xl mb-8 text-background/80 max-w-2xl mx-auto leading-relaxed">
              Comece hoje a organizar sua oferta, reunir prova social e criar caminhos claros 
              para seus clientes encontrarem você.
            </p>
            
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary-light px-8 py-4 text-lg font-semibold glow-primary transition-professional"
              asChild
            >
              <a href={finalCtaUrl} target="_blank" rel="noopener noreferrer">
                Começar minha landing page
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <div className="border-t border-background/20 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Ôgnax</h3>
              <p className="text-background/70 leading-relaxed">
                Landing pages profissionais que facilitam o contato e organizam sua presença digital.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-background/70">
                <li>Landing Pages Profissionais</li>
                <li>Otimização para Conversão</li>
                <li>Integração WhatsApp</li>
                <li>Google Analytics & SEO</li>
                <li>Consultoria de Tráfego</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-background/70">
                <p>WhatsApp: +55 ({DDD}) {NUMERO.replace(/(\d{5})(\d{4})/, '$1-$2')}</p>
                <p>Atendimento: Seg-Sex, 9h-18h</p>
                <p>Resposta em até 2 horas úteis</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-background/20">
            <div className="text-background/70 text-sm mb-4 md:mb-0">
              © 2024 Ôgnax. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-background/70">
              <a 
                href={URL_PRIVACIDADE} 
                className="hover:text-background transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Política de Privacidade
              </a>
              <span>•</span>
              <span>CNPJ: 00.000.000/0001-00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Analytics & Pixels - ADD YOUR IDs HERE */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Google Analytics 4 - Replace {GA4_ID} with your actual ID
            // gtag('config', '{GA4_ID}');
            
            // Meta Pixel - Replace {PIXEL_ID} with your actual ID  
            // fbq('init', '{PIXEL_ID}');
            
            // Event tracking for WhatsApp clicks
            document.addEventListener('click', function(e) {
              const link = e.target.closest('a');
              if (link && link.href.includes('wa.me')) {
                // GA4 Event
                // gtag('event', 'whatsapp_click', {
                //   'campaign': link.href.includes('utm_campaign') ? 
                //     new URLSearchParams(link.href.split('?')[1]).get('utm_campaign') : 'unknown'
                // });
                
                // Meta Pixel Event
                // fbq('track', 'Contact');
                
                console.log('WhatsApp click tracked:', link.href);
              }
            });
          `
        }}
      />
    </footer>
  );
};

export default Footer;