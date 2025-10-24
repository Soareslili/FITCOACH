
import AboutTrainer from "./components/AboutTrainer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import WorkoutCategories from "./components/WorkoutCategories";
import CallToAction from "./components/CallToAction";
import Contact from "./components/Contact";
import AOSInit from "./components/AOSInit";


function App() {


  return (
    <main className="min-h-screen">
      <AOSInit />
      <Header />
      <Hero />
      <div id="treinos">
        <WorkoutCategories />
      </div>
      <div id="sobre">
        <AboutTrainer />
      </div>
      <div id="resultados">
        <Stats />
      </div>
      <div id="depoimentos">
        <Testimonials />
      </div>
      <div id="contato">
        <Contact />
      </div>
      <CallToAction />
    </main>
  )
}

export default App
