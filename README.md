💪 FitCoach – Plataforma Fitness com React + TypeScript + Vite

O FitCoach é um site moderno e responsivo desenvolvido com React + TypeScript + Vite, projetado para apresentar treinos, depoimentos, estatísticas e informações de contato de forma dinâmica e envolvente.
Com animações suaves via AOS (Animate On Scroll) e design elegante, o projeto oferece uma experiência inspiradora para quem busca motivação e resultados no mundo fitness.

🚀 Tecnologias Utilizadas

⚛️ React
 — Biblioteca para criação de interfaces dinâmicas

⚡ Vite
 — Build rápido com Hot Module Replacement (HMR)

💎 TypeScript
 — Tipagem estática para código seguro

🎨 Tailwind CSS
 — Estilização moderna e responsiva

✨ AOS (Animate On Scroll)
 — Animações suaves ao rolar

📦 Lucide Icons
 — Ícones leves e personalizáveis

🧠 ESLint
 — Padrões e boas práticas de código

📂 Estrutura do Projeto
fitcoach/
├─ public/
│   └─ assets/               # Imagens e recursos estáticos
├─ src/
│   ├─ components/           # Componentes reutilizáveis do site
│   │   ├─ ui/               # Componentes utilitários (ex: AOSInit)
│   │   ├─ Hero.tsx          # Seção principal com chamada de ação
│   │   ├─ Header.tsx        # Navegação e logo
│   │   ├─ Stats.tsx         # Estatísticas e conquistas
│   │   ├─ Testimonials.tsx  # Depoimentos de clientes
│   │   ├─ WorkoutCategories.tsx # Categorias de treino
│   │   ├─ AboutTrainer.tsx  # Sobre o treinador
│   │   ├─ Contact.tsx       # Formulário de contato
│   │   └─ CallToAction.tsx  # Bloco final de incentivo
│   ├─ lib/                  # Utilitários e funções auxiliares
│   ├─ App.tsx               # Estrutura principal do site
│   ├─ main.tsx              # Ponto de entrada da aplicação
│   └─ index.css             # Estilos globais
├─ package.json
└─ tsconfig.json

🧩 Instalação e Execução
1️⃣ Clonar o repositório
git clone https://github.com/teuusuario/fitcoach.git

2️⃣ Instalar dependências
npm install

3️⃣ Rodar o servidor de desenvolvimento
npm run dev


O projeto abrirá em: http://localhost:5173

🧠 Configuração do AOS (Animações)

O projeto utiliza o arquivo AOSInit.tsx para inicializar o AOS apenas uma vez:

'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
      easing: 'ease-in-out',
    });
  }, []);
  return null;
}


E o componente é adicionado no topo do App.tsx:

<main className="min-h-screen">
  <AOSInit />
  <Header />
  <Hero />
  {/* demais seções */}
</main>

🎬 Animações Infinitas (CSS Customizado)

Para elementos com animação contínua, foi criado o efeito animate-pulse-zoom:

@keyframes pulse-zoom {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.animate-pulse-zoom {
  animation: pulse-zoom 2s ease-in-out infinite;
}


Exemplo de uso:

<div className="mt-10 p-6 bg-accent/10 border border-accent/20 rounded-xl animate-pulse-zoom">
  Transforme seu corpo. Supere seus limites.
</div>

🌈 Paleta de Cores e Estilo Visual

O FitCoach segue um estilo moderno e energético, com destaque para a cor de acento personalizada (accent) definida no Tailwind.
As seções possuem animações suaves e gradientes, transmitindo movimento e motivação.

🧰 Scripts Disponíveis
Comando	Função
npm run dev	Inicia o servidor de desenvolvimento
npm run build	Cria a build de produção
npm run preview	Visualiza a build localmente
npm run lint	Executa verificação de código com ESLint