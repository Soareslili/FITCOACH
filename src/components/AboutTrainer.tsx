import { Progress } from "../components/ui/progress";
import trainerImage from "../assets/trainer.png";

const stats = [
  { label: "Força", value: 95, emoji: "💪" },
  { label: "Resistência", value: 88, emoji: "🏋️‍♂️" },
  { label: "Motivação", value: 100, emoji: "🔥" },
];

const AboutTrainer = () => {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={trainerImage}
                alt="Personal Trainer"
                className="w-full h-[600px] object-center object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>


            <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
          </div>


          <div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              Comprometimento com Resultados Reais
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed"
              data-aos="fade-up"
              data-aos-duration="1400"
            >
              Mais de <span className="text-accent font-bold">10 anos</span> ajudando pessoas a conquistarem
              seu melhor corpo com comprometimento, disciplina e resultados reais.
              Cada aluno recebe um plano personalizado baseado em seus objetivos únicos.
            </p>

            <div className="space-y-6">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2"
                  data-aos="fade-right"
                  data-aos-delay={index * 400}


                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <span className="text-2xl">{stat.emoji}</span>
                      {stat.label}
                    </span>
                    <span className="text-accent font-bold text-xl">{stat.value}%</span>
                  </div>
                  <Progress
                    value={stat.value}
                    className="h-3 bg-muted"
                  />
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-accent/10 border border-accent/20 rounded-xl animate-pulse-zoom"
              data-aos="zoom-in"
              data-aos-duration="1200"
              data-aos-delay="800"
            >
              <p className="text-lg font-semibold text-accent">
                "A transformação começa quando você decide que está pronto para mudar."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default AboutTrainer;
