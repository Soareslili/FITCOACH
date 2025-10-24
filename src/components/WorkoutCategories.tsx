import { Card } from "../components/ui/card";
import { Dumbbell, Activity, Flame, Target, Users, Zap } from "lucide-react";

import MusculationIntensive from "../assets/MusculationIntensive.png";
import workoutFunctional from "../assets/workoutFunctional.png";
import workoutCardio from "../assets/workoutCardio.png";
import workoutResistance from "../assets/workoutResistance.png";
import workoutWomen from "../assets/workoutWomen.png";
import workoutWeightloss from "../assets/workoutWeightloss.png";

const categories = [
  {
    title: "Musculação Intensiva",
    icon: Dumbbell,
    image: MusculationIntensive,
  },
  {
    title: "Treino Funcional",
    icon: Activity,
    image: workoutFunctional,
  },
  {
    title: "HIIT Cardio",
    icon: Flame,
    image: workoutCardio,
  },
  {
    title: "Força e Resistência",
    icon: Target,
    image: workoutResistance,
  },
  {
    title: "Treino para Mulheres",
    icon: Users,
    image: workoutWomen,
  },
  {
    title: "Emagrecimento Rápido",
    icon: Zap,
    image: workoutWeightloss,
  },
];

const WorkoutCategories = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Encontre o Treino Ideal para o Seu Objetivo
          </h2>
          <p className="text-xl text-muted-foreground">
            Programas personalizados para cada tipo de meta
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden bg-card border-border hover-glow cursor-pointer"

                data-aos="fade-right"
                data-aos-delay={index * 300}
                data-aos-duration="1200"

              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>


                  <div className="absolute top-4 right-4 bg-accent/20 backdrop-blur-sm p-3 rounded-lg neon-border opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {category.title}
                  </h3>
                  <div className="w-12 h-1 bg-accent rounded-full transform origin-left transition-transform duration-300 group-hover:scale-x-150"></div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkoutCategories;
