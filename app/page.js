"use client";

import { useEffect, useState } from "react";

export default function CorporateGrowthSite() {

  const gallery = [
    {
      image: "/palestra.jpg",
      title: "Palestra Motivacional",
      description:
        "Carreira, liderança feminina e desenvolvimento profissional.",
    },

    {
      image: "/lideranca.jpg",
      title: "Liderança & Gestão",
      description:
        "Atuação como Gerente Sênior liderando operações e gestores.",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % gallery.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      text:
        "Camila demonstrou um nível extremamente alto de profissionalismo, organização e foco em resultados. Mesmo em ambientes de alta pressão, manteve clareza, liderança e capacidade de direcionar equipes com eficiência.",
      name: "Gerente Operacional",
      role: "Operação Local",
    },

    {
      text:
        "Seu maior diferencial é a capacidade de gerar resultados escaláveis e estruturar operações complexas com visão estratégica. Camila agrega valor real para performance, cultura e crescimento organizacional.",
      name: "Ex-Líder Qualidade & Treinamento",
      role: "Global Operations",
    },

    {
      text:
        "Camila possui uma visão estratégica rara. Atua antecipando riscos, estruturando soluções sustentáveis e elevando a qualidade operacional com foco em impacto de longo prazo.",
      name: "Parceiro de Projeto",
      role: "Customer Experience",
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="px-6 py-24 md:px-16 lg:px-24 border-b border-white/10">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <p className="uppercase tracking-[0.35em] text-sm text-zinc-500 mb-6">
              O Mundo Corporativo Real
            </p>

            <h1 className="text-6xl md:text-7xl font-bold leading-[0.95] mb-8">
              Da Base à Liderança Global
            </h1>

            <p className="text-xl text-zinc-300 leading-relaxed max-w-2xl mb-10">
              Estratégias reais de crescimento corporativo baseadas em 10 anos de experiência em operações globais, gestão de crise, performance, liderança e qualidade.
            </p>

            <div className="flex flex-wrap gap-4">

              <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-transform">
                Entrar para a Plataforma
              </button>

              <button className="border border-white/20 px-8 py-4 rounded-2xl hover:bg-white/10 transition">
                Conhecer Mentoria
              </button>

            </div>

          </div>

          <div className="bg-zinc-900 border border-white/10 rounded-[32px] p-10 shadow-2xl">

            <p className="text-zinc-400 mb-4">
              Inclui:
            </p>

            <ul className="space-y-4 text-lg text-zinc-200 mb-10">

              <li>• Biblioteca exclusiva de estratégias corporativas</li>
              <li>• Casos reais e lições práticas</li>
              <li>• Frameworks de liderança e performance</li>
              <li>• Templates e prompts de IA</li>
              <li>• Mentoria personalizada opcional</li>

            </ul>

            <div className="border-t border-white/10 pt-6">

              <p className="text-zinc-500 line-through mb-1">
                De R$197
              </p>

              <div className="flex items-end gap-3">

                <span className="text-6xl font-bold">
                  R$109,90
                </span>

                <span className="text-zinc-400 mb-2">
                  lançamento
                </span>

              </div>

              <p className="text-zinc-500 mt-2">
                acesso vitalício
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* SOBRE */}
      <section className="px-6 py-24 md:px-16 lg:px-24 border-b border-white/10">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">

          <div>

            <p className="uppercase tracking-[0.35em] text-sm text-zinc-500 mb-6">
              Sobre Mim
            </p>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-10">
              10 anos crescendo dentro do ambiente corporativo.
            </h2>

            <div className="space-y-8 text-zinc-300 text-xl leading-relaxed">

              <p>
                Comecei minha trajetória em operações de atendimento ao cliente e cresci até posições de liderança global em operações, qualidade, performance e gestão estratégica.
              </p>

              <p>
                Passei por diferentes níveis hierárquicos, mudanças de estado por oportunidades profissionais, ambientes de crise, operações sob risco contratual e projetos globais de transformação.
              </p>

              <p>
                Hoje, compartilho os aprendizados, decisões, erros e frameworks que realmente fizeram diferença em cada etapa da carreira — sem teoria genérica e sem discurso corporativo superficial.
              </p>

            </div>

            <div className="mt-14 pt-8 border-t border-white/10">

              <div className="flex items-center gap-6">

                <img
                  src="/perfil.jpg"
                  alt="Camila Magini"
                  className="w-28 h-28 rounded-full object-cover border-2 border-white/20 shadow-xl"
                />

                <div>

                  <h3 className="text-3xl font-bold">
                    Camila Magini Da Costa
                  </h3>

                  <p className="text-zinc-400 text-lg mt-1">
                    Global Quality Assurance Manager
                  </p>

                </div>

              </div>

            </div>

          </div>

         <div>

  <div className="bg-zinc-900 border border-white/10 rounded-[32px] p-8 h-full flex flex-col justify-between">

    {/* MÉTRICAS */}
    <div>

      <div className="grid grid-cols-2 gap-8 mb-8">

        <div>
          <p className="text-5xl font-bold mb-1">7</p>
          <p className="text-zinc-400 text-sm leading-relaxed">
            promoções ao longo da carreira corporativa
          </p>
        </div>

        <div>
          <p className="text-5xl font-bold mb-1">5</p>
          <p className="text-zinc-400 text-sm leading-relaxed">
            áreas de atuação estratégica
          </p>
        </div>

        <div>
          <p className="text-5xl font-bold mb-1">Global</p>
          <p className="text-zinc-400 text-sm leading-relaxed">
            experiência multinacional em gestão
          </p>
        </div>

        <div>
          <p className="text-5xl font-bold mb-1">10</p>
          <p className="text-zinc-400 text-sm leading-relaxed">
            anos em operações, performance e liderança
          </p>
        </div>

      </div>

      {/* ESCALADA */}
      <div className="border-t border-white/10 pt-6">

        <h3 className="text-3xl font-bold mb-3">
          Escalada profissional
        </h3>

        <p className="text-zinc-300 leading-relaxed">
          Especialista • Supervisor • Coordenadora • Gerente • Gerente Sênior • Gerente Global
        </p>

      </div>

      {/* ÁREAS */}
      <div className="border-t border-white/10 pt-6 mt-6">

        <h3 className="text-3xl font-bold mb-3">
          Áreas de atuação
        </h3>

        <p className="text-zinc-300 leading-relaxed">
          Qualidade • Treinamento • Operações • Processos • Projetos
        </p>

      </div>

    </div>

    {/* MINI SHOWCASE */}
    <div className="border-t border-white/10 pt-6 mt-8">

      <div className="flex items-center gap-4 bg-black/30 border border-white/10 rounded-2xl overflow-hidden">

        <img
          src={gallery[currentImage].image}
          alt={gallery[currentImage].title}
          className="w-[140px] h-[110px] object-cover"
        />

        <div className="pr-4">

          <p className="font-semibold text-lg mb-1">
            {gallery[currentImage].title}
          </p>

          <p className="text-zinc-400 text-sm leading-relaxed">
            {gallery[currentImage].description}
          </p>

        </div>

      </div>

    </div>

  </div>

</div>

            {/* MINI CARROSSEL EXECUTIVO */}
<div className="mt-8 border-t border-white/10 pt-8">

  <div className="bg-black/40 border border-white/10 rounded-3xl overflow-hidden max-w-[320px] transition-all duration-700">

    <img
      src={gallery[currentImage].image}
      alt={gallery[currentImage].title}
      className="w-full h-[180px] object-cover"
    />

    <div className="p-5">

      <p className="text-xl font-semibold mb-2">
        {gallery[currentImage].title}
      </p>

      <p className="text-sm text-zinc-400 leading-relaxed">
        {gallery[currentImage].description}
      </p>

    </div>

  </div>

</div>

          </div>

        </div>

      </section>

      {/* MENTORIA */}
      <section className="px-6 py-24 md:px-16 lg:px-24 border-b border-white/10">

        <div className="max-w-5xl mx-auto text-center">

          <p className="uppercase tracking-[0.35em] text-sm text-zinc-500 mb-6">
            Mentoria Estratégica
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
            Mentoria personalizada para crescimento corporativo.
          </h2>

          <p className="text-xl text-zinc-300 leading-relaxed mb-12">
            Sessões práticas focadas em posicionamento, liderança, performance, gestão política corporativa, entrevistas, promoção e crescimento estratégico.
          </p>

          <div className="bg-zinc-900 border border-white/10 rounded-[32px] p-12 inline-block">

            <p className="text-zinc-500 line-through text-2xl mb-2">
              R$1000
            </p>

            <div className="flex items-end justify-center gap-4">

              <span className="text-7xl font-bold">
                R$500
              </span>

              <span className="text-zinc-400 mb-3">
                lançamento
              </span>

            </div>

            <p className="text-zinc-500 mt-4 text-lg">
              pacote com 4 sessões estratégicas
            </p>

          </div>

        </div>

      </section>

      {/* FEEDBACKS */}
      <section className="px-6 py-24 md:px-16 lg:px-24">

        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.35em] text-sm text-zinc-500 mb-6">
            Feedbacks
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-16">
            O impacto percebido por quem trabalhou comigo.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {testimonials.map((testimonial, index) => (

              <div
                key={index}
                className="bg-zinc-900 border border-white/10 rounded-[32px] p-8"
              >

                <p className="text-zinc-300 leading-relaxed text-lg mb-10">
                  "{testimonial.text}"
                </p>

                <div>

                  <p className="font-semibold text-xl">
                    {testimonial.name}
                  </p>

                  <p className="text-zinc-500 mt-1">
                    {testimonial.role}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}
