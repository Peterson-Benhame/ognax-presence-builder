import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Editable parameters
  const URL_BACKEND = "https://formspree.io/f/YOUR_FORM_ID"; // Replace with actual Formspree endpoint
  const URL_PRIVACIDADE = "#"; // Replace with actual privacy policy URL

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: "Consentimento necessário",
        description: "É necessário autorizar o contato para prosseguir.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(URL_BACKEND, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          whatsapp: formData.whatsapp,
          source: "Landing Page Ôgnax",
          consent: formData.consent
        })
      });

      if (response.ok) {
        toast({
          title: "Formulário enviado!",
          description: "Entraremos em contato em breve via WhatsApp.",
          variant: "default"
        });
        
        // Reset form
        setFormData({ name: "", whatsapp: "", consent: false });
        
        // Analytics event
        if (typeof (window as any).gtag !== 'undefined') {
          (window as any).gtag('event', 'form_submit', {
            'form_type': 'contact_form',
            'engagement_time_msec': Date.now()
          });
        }
        
        if (typeof (window as any).fbq !== 'undefined') {
          (window as any).fbq('track', 'CompleteRegistration');
        }
        
      } else {
        throw new Error('Erro no envio');
      }
    } catch (error) {
      toast({
        title: "Erro no envio",
        description: "Tente novamente ou entre em contato via WhatsApp.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card p-8 rounded-2xl shadow-lg max-w-md">
      <h3 className="text-xl font-semibold mb-6 text-card-foreground text-center">
        Receba uma proposta personalizada
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name" className="text-card-foreground">
            Nome completo
          </Label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            required
            className="mt-1"
            placeholder="Seu nome"
          />
        </div>

        <div>
          <Label htmlFor="whatsapp" className="text-card-foreground">
            WhatsApp
          </Label>
          <Input
            id="whatsapp"
            type="tel"
            value={formData.whatsapp}
            onChange={(e) => setFormData(prev => ({ ...prev, whatsapp: e.target.value }))}
            required
            className="mt-1"
            placeholder="(11) 99999-9999"
          />
        </div>

        <div className="flex items-start space-x-2 pt-2">
          <Checkbox
            id="consent"
            checked={formData.consent}
            onCheckedChange={(checked) => 
              setFormData(prev => ({ ...prev, consent: checked === true }))
            }
          />
          <Label 
            htmlFor="consent" 
            className="text-sm text-muted-foreground leading-relaxed"
          >
            Autorizo contato para fins comerciais. Leia nossa{" "}
            <a 
              href={URL_PRIVACIDADE} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Política de Privacidade
            </a>
            .
          </Label>
        </div>

        <Button 
          type="submit" 
          className="w-full" 
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Solicitar Proposta"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;