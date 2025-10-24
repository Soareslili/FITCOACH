import { useEffect, useState } from "react";
import { Users, Dumbbell, Award, Star } from "lucide-react";

const stats = [
  { label: "Alunos Atendidos", value: 91000, suffix: "K+", icon: Users },
  { label: "Planos de Treino", value: 84000, suffix: "K+", icon: Dumbbell },
  { label: "Treinadores Parceiros", value: 42, suffix: "+", icon: Award },
  { label: "Avaliação Média", value: 4.7, suffix: " ⭐", icon: Star, isDecimal: true },
];

const AnimatedCounter = ({
  end,
  suffix,
  isDecimal = false
}: {
  end: number;
  suffix: string;
  isDecimal?: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span className="text-5xl md:text-6xl lg:text-7xl font-black text-background">
      {isDecimal ? count.toFixed(1) : Math.floor(count).toLocaleString()}
      {suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section className="py-24 px-6 bg-accent relative overflow-hidden">

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-background rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-background rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-background mb-4">
            Resultados que Falam por Si
          </h2>
          <p className="text-xl text-background/80">
            Números que comprovam nossa excelência
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-8 bg-background/10 backdrop-blur-sm rounded-2xl border-2 border-background/20 hover:bg-background/20 transition-all duration-300"
               
                data-aos="fade-down"
                data-aos-delay={index * 300}
                data-aos-duration="1200"

              >
                <Icon className="w-12 h-12 text-background mx-auto mb-4" />
                <div className="mb-2">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    isDecimal={stat.isDecimal}
                  />
                </div>
                <p className="text-lg font-semibold text-background/90">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;