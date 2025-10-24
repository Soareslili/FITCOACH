import { Card } from "../components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Empresário",
    rating: 5,
    text: "Perdi 15kg em 4 meses e ganhei muito mais disposição. O acompanhamento personalizado fez toda a diferença!",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop"
  },
  {
    name: "Mariana Costa",
    role: "Advogada",
    rating: 5,
    text: "Finalmente encontrei um treino que se encaixa na minha rotina. Resultados incríveis em pouco tempo!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
  },
  {
    name: "Rafael Oliveira",
    role: "Engenheiro",
    rating: 5,
    text: "Ganhei massa muscular e força como nunca imaginei. O profissionalismo é excepcional!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className=" text-foreground text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            O que nossos <span className="text-accent text-glow">alunos dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transformações reais de pessoas que confiaram no nosso trabalho
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-accent/50 transition-all duration-300 hover-glow"

              data-aos="fade-down"
              data-aos-delay={index * 300}
              data-aos-duration="1200"

            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-accent/50"
                />
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed">
                "{testimonial.text}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;