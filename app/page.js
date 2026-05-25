export default function CorporateGrowthSite() {
  const modules = [
    {
      title: 'Da Base à Liderança',
      description:
        'Lições práticas sobre crescimento corporativo, visibilidade interna, promoções e posicionamento profissional.',
    },
    {
      title: 'Gestão & Performance',
      description:
        'KPIs, gestão de crise, liderança de times, absenteísmo, performance operacional e tomada de decisão.',
    },
    {
      title: 'Mundo Corporativo Real',
      description:
        'Política corporativa, stakeholders, comunicação executiva, influência e sobrevivência em ambientes de alta pressão.',
    },
    {
      title: 'IA no Trabalho',
      description:
        'Como usar IA para produtividade, análise, apresentações, organização e diferenciação profissional.',
    },
  ];

  const mentorshipSteps = [
    {
      title: 'Sessão 1 — Diagnóstico Profundo',
      text: 'Mapeamento da sua trajetória, objetivos, gaps, posicionamento e desafios atuais.',
    },
    {
      title: 'Sessão 2 — Estratégia de Crescimento',
      text: 'Plano prático de evolução profissional, promoção ou transição.',
    },
    {
      title: 'Sessão 3 — Desafios Reais',
      text: 'Discussão de conflitos, liderança, política corporativa, entrevistas e situações críticas.',
    },
    {
      title: 'Sessão 4 — Refinamento & Próximos Passos',
      text: 'Plano de ação de 90 dias com direcionamento personalizado.',
    },
  ];

  const testimonials = [
    {
      name: 'Gerente Operacional',
      role: 'Operação Local',
      text: 'Camila sempre demonstrou um nível excepcional de profissionalismo, organização e compromisso com resultados. Mesmo em ambientes de alta pressão, conseguia manter clareza e direcionar o time com segurança.',
    },

    {
      name: 'Ex-Líder Qualidade e Treinamento',
      role: 'Global Operations',
      text: 'Camila demonstrava uma capacidade excepcional na gestão e implementação de processos complexos. Seu maior diferencial sempre foi unir visão estratégica, escalabilidade e habilidades interpessoais extremamente fortes.',
    },

    {
      name: 'Parceiro de Projeto',
      role: 'Customer Experience',
      text: 'Camila sempre operava alguns passos à frente, conectando pensamento analítico, visão de negócio e impacto de longo prazo.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="px-6 py-20 md:px-16 lg:px-24 border-b border-white/10">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          <div>

            <p className="uppercase tracking-[0.3em] text-sm text-zinc-400 mb-5">
              O Mundo Corporativo Real
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              Da Base à Liderança Global.
            </h1>

            <p className="text-zinc-300 text-lg leading-relaxed mb-8 max-w-2xl">
              Estratégias reais de crescimento corporativo baseadas em 10 anos de experiência em operações globais,
              gestão de crise, performance, liderança e qualidade.
            </p>

            <div className="flex flex-wrap gap-4">

              <button className="bg-white text-black px-6 py-4 rounded-2xl font-semibold hover:scale-105 transition-transform">
                Quero acesso imediato
              </button>

              <button className="border border-white/20 px-6 py-4 rounded-2xl hover:bg-white/5 transition">
                Aplicar para Mentoria
              </button>

            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8 border border-white/10 shadow-2xl">

            <div className="space-y-6">

              <div>

                <p className="text-zinc-400 text-sm mb-2">
                  Inclui:
                </p>

                <ul className="space-y-3 text-zinc-200">
                  <li>• Biblioteca exclusiva de estratégias corporativas</li>
                  <li>• Casos reais e lições práticas</li>
                  <li>• Frameworks de liderança e performance</li>
                  <li>• Templates e prompts de IA</li>
                  <li>• Mentoria personalizada opcional</li>
                </ul>

              </div>

              <div className="border-t border-white/10 pt-6">

                <p className="text-zinc-400 text-sm mb-3">
                  Oferta de lançamento
                </p>

                <div className="flex items-center gap-3 mb-3">

                  <p className="text-zinc-500 line-through text-2xl">
                    R$197
                  </p>

                  <div className="bg-white text-black text-xs px-3 py-1 rounded-full font-semibold">
                    44% OFF
                  </div>

                </div>

                <div className="flex items-end gap-3">

                  <h2 className="text-5xl font-bold">
                    R$109,90
                  </h2>

                  <p className="text-zinc-400 mb-1">
                    pagamento único
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="px-6 py-20 md:px-16 lg:px-24 border-b border-white/10">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-start">

          <div>

            <p className="uppercase tracking-[0.3em] text-sm text-zinc-400 mb-4">
              Sobre Mim
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              10 anos crescendo dentro do ambiente corporativo.
            </h2>

            <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">

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
          </div>

          <div className="space-y-6">

            <div className="bg-zinc-900 rounded-[32px] border border-white/10 p-10">

              <div className="grid grid-cols-2 gap-8">

                <div>

                  <p className="text-5xl font-bold mb-2">
                    7
                  </p>

                  <p className="text-zinc-400">
                    promoções ao longo da carreira corporativa
                  </p>

                </div>

                <div>

                  <p className="text-5xl font-bold mb-2">
                    5
                  </p>

                  <p className="text-zinc-400">
                    áreas de atuação estratégica
                  </p>

                </div>

                <div>

                  <p className="text-5xl font-bold mb-2">
                    Global
                  </p>

                  <p className="text-zinc-400">
                    experiência multinacional em gestão
                  </p>

                </div>

                <div>

                  <p className="text-5xl font-bold mb-2">
                    10
                  </p>

                  <p className="text-zinc-400">
                    anos em operações, performance e liderança
                  </p>

                </div>

                <div className="col-span-2 border-t border-white/10 pt-6">

                  <p className="text-2xl font-bold mb-4">
                    Escalada profissional
                  </p>

                  <p className="text-zinc-300 leading-relaxed">
                    Especialista • Supervisor • Coordenadora • Gerente • Gerente Sênior • Gerente Global
                  </p>

                </div>

                <div className="col-span-2 border-t border-white/10 pt-6">

                  <p className="text-2xl font-bold mb-4">
                    Áreas de atuação
                  </p>

                  <p className="text-zinc-300 leading-relaxed">
                    Qualidade • Treinamento • Operações • Processos • Projetos
                  </p>

                </div>

              </div>
            </div>

            <div className="space-y-6">

              <div className="flex items-center gap-4">

                <img
                  src="/perfil.jpg"
                  alt="Camila Magini"
                  className="w-24 h-24 rounded-full object-cover border border-white/10"
                />

                <div>

                  <p className="text-2xl font-semibold text-white">
                    Camila Magini Da Costa
                  </p>

                  <p className="text-zinc-400">
                    Global Quality Assurance Manager
                  </p>

                </div>
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden">

                <img
                  src="/palestra.jpg"
                  alt="Palestra Motivacional"
                  className="w-full h-[260px] object-cover"
                />

                <div className="p-5">

                  <p className="text-lg font-semibold">
                    Palestra Motivacional
                  </p>

                  <p className="text-zinc-400 text-sm mt-1">
                    Carreira, liderança feminina e desenvolvimento profissional.
                  </p>

                </div>
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden">

                <img
                  src="/lideranca.jpg"
                  alt="Liderança & Gestão"
                  className="w-full h-[260px] object-cover"
                />

                <div className="p-5">

                  <p className="text-lg font-semibold">
                    Liderança & Gestão
                  </p>

                  <p className="text-zinc-400 text-sm mt-1">
                    Atuação como Gerente Sênior liderando operações e gestores.
                  </p>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* MÓDULOS */}
      <section className="px-6 py-20 md:px-16 lg:px-24 border-b border-white/10">

        <div className="max-w-6xl mx-auto">

          <div className="mb-14 max-w-3xl">

            <p className="uppercase tracking-[0.3em] text-sm text-zinc-400 mb-4">
              O que você vai encontrar
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Uma biblioteca estratégica sobre o mundo corporativo real.
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {modules.map((module, index) => (

              <div
                key={index}
                className="bg-zinc-900 border border-white/10 rounded-3xl p-8"
              >

                <h3 className="text-2xl font-semibold mb-4">
                  {module.title}
                </h3>

                <p className="text-zinc-300 leading-relaxed">
                  {module.description}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FEEDBACKS */}
      <section className="px-6 py-20 md:px-16 lg:px-24">

        <div className="max-w-6xl mx-auto">

          <div className="mb-14 max-w-3xl">

            <p className="uppercase tracking-[0.3em] text-sm text-zinc-400 mb-4">
              Feedbacks
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              O impacto percebido por quem trabalhou comigo.
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {testimonials.map((testimonial, index) => (

              <div
                key={index}
                className="bg-zinc-900 border border-white/10 rounded-3xl p-8"
              >

                <p className="text-zinc-300 leading-relaxed mb-8 italic">
                  “{testimonial.text}”
                </p>

                <div>

                  <p className="font-semibold text-lg">
                    {testimonial.name}
                  </p>

                  <p className="text-zinc-400 text-sm mt-1">
                    {testimonial.role}
                  </p>

                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

    </div>
  );
}
