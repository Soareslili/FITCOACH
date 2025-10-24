import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   
  };

  return (
    <section className="py-20 px-6 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className=" text-foreground text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            Entre em <span className="text-accent text-glow">contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Agende sua consultoria gratuita e comece sua transformação hoje mesmo
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        
          <div className="space-y-8">
            <div>
              <h3 className=" text-foreground text-2xl font-bold mb-6">Fale conosco</h3>
              <p className="text-muted-foreground mb-8">
                Estamos prontos para ajudar você a alcançar seus objetivos. 
                Entre em contato e agende sua primeira consulta gratuitamente.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className=" text-foreground font-semibold mb-1">Telefone</h4>
                  <p className="text-muted-foreground">(11) 98765-4321</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-foreground font-font-semibold mb-1">Email</h4>
                  <p className="text-muted-foreground">contato@personaltrainer.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-1">Localização</h4>
                  <p className="text-muted-foreground">São Paulo, SP - Brasil</p>
                </div>
              </div>
            </div>
          </div>

        
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input 
                type="text" 
                placeholder="Seu nome completo"
                className="bg-background border-border focus:border-accent"
                required
              />
            </div>

            <div>
              <Input 
                type="email" 
                placeholder="Seu melhor email"
                className="bg-background border-border focus:border-accent"
                required
              />
            </div>

            <div>
              <Input 
                type="tel" 
                placeholder="Seu telefone/WhatsApp"
                className="bg-background border-border focus:border-accent"
                required
              />
            </div>

            <div>
              <Textarea 
                placeholder="Conte-nos sobre seus objetivos..."
                className="bg-background border-border focus:border-accent min-h-[150px] resize-none"
                required
              />
            </div>

            <Button 
              type="submit"
              size="lg"
              className="w-full cursor-pointer bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg py-6 hover-glow"
            >
              Agendar Consultoria Gratuita
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              Responderemos em até 24 horas
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;