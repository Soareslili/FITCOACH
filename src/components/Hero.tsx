import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Star } from "lucide-react";
import heroImage from "../assets/hero.png";





const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-background"></div>
      </div>


      <div className="relative z-10 container mx-auto px-6 text-center">
        <Badge
           data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1300"

          variant="outline"
          className="mb-6 border-accent bg-accent/10 text-accent hover:bg-accent/20 px-4 py-2"
        >
          <Star className="w-4 h-4 fill-accent mr-1" />
          <span className="font-semibold">4.7/5</span>
          <span className="ml-2 text-muted-foreground">Avaliação de Clientes</span>
        </Badge>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-glow"

          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"

        >
          Transforme seu corpo.<br />
          Supere seus limites.
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto"
       
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1700"
        >
          Treinamento personalizado com resultados reais e acompanhamento completo
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground cursor-pointer hover:bg-accent/90 font-bold text-lg px-8 py-6 hover-glow"
        
            data-aos="fade-up"
          data-aos-duration="3000"
          
          >
            Começar Agora
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-foreground text-foreground cursor-pointer hover:bg-foreground hover:text-background font-bold text-lg px-8 py-6"
          
          
            data-aos="fade-up"
            data-aos-duration="3000"
         >
            Ver Planos
          </Button>
        </div>
      </div>


      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;