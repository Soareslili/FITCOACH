import { Button } from "../components/ui/button";
import { Calendar } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="bg-card py-32 px-6 relative overflow-hidden">
     
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto text-center relative z-10"
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-delay="200"
      >
        <h2 className=" text-foreground text-4xl md:text-6xl lg:text-7xl font-black mb-6 max-w-4xl mx-auto leading-tight">
          Eleve seu desempenho com treinos{" "}
          <span className="text-accent text-glow">personalizados</span>
        </h2>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Acompanhamento completo e suporte 24/7 para garantir seus resultados
        </p>

        <Button 
          size="lg"
          className="bg-accent cursor-pointer text-accent-foreground hover:bg-accent/90 font-bold text-xl px-12 py-8 hover-glow group"
        >
          <Calendar className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform" />
          Agende sua Consultoria
        </Button>                  

        <div className="mt-16 flex flex-wrap justify-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span>Sem taxas escondidas</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span>Cancele quando quiser</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span>Primeira consulta grátis</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
