import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "A landing page sozinha traz clientes?",
      answer: "Não. A landing page organiza sua mensagem e facilita o contato, mas os resultados dependem de tráfego qualificado. É como ter um balcão bem organizado - ainda precisa de pessoas passando na rua. Por isso sempre incluímos recomendações de como atrair visitantes."
    },
    {
      question: "Preciso necessariamente investir em anúncios?",
      answer: "Anúncios ajudam muito a acelerar resultados, mas não são obrigatórios. Também orientamos sobre ações orgânicas como SEO local, Google Meu Negócio, parcerias estratégicas e uso otimizado das redes sociais para direcionar tráfego."
    },
    {
      question: "Qual é o prazo de entrega?",
      answer: "A primeira versão fica pronta em até 7 dias após o diagnóstico inicial e recebimento de todos os materiais (textos, fotos, informações). Ajustes e revisões podem levar mais 2-3 dias dependendo do plano escolhido."
    },
    {
      question: "O que exatamente está incluso em cada plano?",
      answer: "Cada plano tem escopo específico detalhado na seção de preços. Todos incluem design responsivo, integrações básicas (WhatsApp, formulário) e hospedagem. Planos maiores incluem SEO, analytics, mais revisões e consultoria de tráfego."
    },
    {
      question: "E se eu quiser fazer mudanças depois da entrega?",
      answer: "Revisões estão incluídas conforme o plano escolhido. Após esse período, correções técnicas (bugs, problemas de funcionamento) são cobertas pela garantia. Mudanças de conteúdo ou design podem ter custo adicional."
    },
    {
      question: "Como vocês garantem que a página vai converter?",
      answer: "Não podemos garantir conversões específicas pois dependem de muitos fatores (oferta, público, tráfego, mercado). Nossa garantia é técnica: página funcionando perfeitamente, carregando rápido e com todas as integrações operando. O resto trabalhamos juntos na estratégia."
    },
    {
      question: "Preciso fornecer textos e imagens?",
      answer: "Para o plano Essencial, sim - você fornece os materiais e nós organizamos profissionalmente. Nos planos Profissional e Performance incluímos apoio na criação/revisão de textos e orientações sobre imagens ideais."
    },
    {
      question: "A página fica no meu nome ou no de vocês?",
      answer: "A página fica 100% sua. Registramos domínio em seu nome (se escolher ter um próprio) e você recebe todos os acessos. Oferecemos suporte técnico conforme o período de garantia, mas a propriedade é toda sua."
    },
    {
      question: "Posso cancelar ou pedir reembolso?",
      answer: "Trabalhamos com diagnóstico gratuito para alinhar expectativas antes de começar. Uma vez iniciado o projeto e aprovado o layout, não oferecemos reembolso, mas garantimos todas as correções técnicas necessárias."
    },
    {
      question: "Como funciona o suporte pós-entrega?",
      answer: "Durante o período de garantia (varia por plano), fazemos todas as correções técnicas necessárias. Planos maiores incluem período de consultoria para otimizações. Após isso, oferecemos suporte técnico por valores acessíveis."
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Perguntas frequentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Esclarecemos as principais dúvidas sobre nosso processo e resultados
          </p>
        </div>

        <div className="animate-slide-up">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="card-professional rounded-xl px-6"
              >
                <AccordionTrigger className="text-left py-6 hover:no-underline">
                  <span className="font-semibold text-card-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-12">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Ainda tem dúvidas?
            </h3>
            <p className="text-muted-foreground mb-6">
              Agende uma conversa de 15 minutos para esclarecer suas questões específicas
            </p>
            <a 
              href={`https://wa.me/5511999999999?text=${encodeURIComponent('Olá! Tenho algumas dúvidas sobre os planos de landing page. Posso agendar uma conversa?')}&utm_source=lp&utm_medium=cta&utm_campaign=faq_duvidas`}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary-dark px-6 py-3 rounded-lg font-semibold transition-professional"
            >
              Tirar dúvidas no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;