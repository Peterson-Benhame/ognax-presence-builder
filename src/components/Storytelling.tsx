import { AlertTriangle, Target, CheckCircle, BarChart } from "lucide-react";

const Storytelling = () => {
  const steps = [
    {
      icon: AlertTriangle,
      title: "Situação",
      description: "Profissional depende só de Instagram e indicações",
      color: "text-warning"
    },
    {
      icon: Target,
      title: "Problema", 
      description: "Conversas dispersas, falta de clareza da oferta, contatos perdidos",
      color: "text-destructive"
    },
    {
      icon: CheckCircle,
      title: "Solução",
      description: "Página única que organiza mensagem, prepara prova e facilita contato",
      color: "text-success"
    },
    {
      icon: BarChart,
      title: "Plano",
      description: "Diagnóstico → construção → publicação → medir/ajustar",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            O problema que resolvemos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transformamos profissionais dependentes de redes sociais em autoridades 
            com presença organizada e pronta para captação
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 bg-card rounded-full mb-6 shadow-lg ${step.color}`}>
                <step.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-accent/5 border border-accent/20 rounded-2xl p-8 text-center">
          <p className="text-lg text-accent-foreground/80 font-medium">
            <strong className="text-accent">Importante:</strong> A landing page é infraestrutura de captação. 
            Não prometemos clientes, mas sim uma base sólida para suas estratégias de aquisição.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Storytelling;