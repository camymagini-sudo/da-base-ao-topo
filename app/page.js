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
      name: 'Ex-Líder Operacional',
      role: 'Global Operations',
      text: 'Camila possui uma capacidade rara de transformar operações críticas em ambientes altamente performáticos. Sua liderança une estratégia, execução e desenvolvimento humano.',
    },
    {
      name: 'Parceiro de Projeto',
      role: 'Customer Experience & QA',
      text: 'O diferencial da Camila sempre foi a profundidade analítica somada à habilidade de navegar ambientes corporativos complexos com inteligência e clareza.',
    },
    {
      name: 'Ex-Colaborador',
      role: 'Operations Leadership',
      text: 'Aprendi mais sobre liderança prática trabalhando com a Camila do que em anos de treinamentos corporativos tradicionais.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="px-6 py-20 md:px-16 lg:px-24 border-b border-white/10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-zinc-400 mb-5">
              Corporate Growth Platform
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              Da Operação à Liderança Global.
            </h1>

            <p className="text-zinc-300 text-lg leading-relaxed mb-8 max-w-2xl">
              Estratégias reais de crescimento corporativo baseadas em quase 10 anos de experiência em operações globais,
              gestão de crise, performance, liderança e qualidade.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-black px-6 py-4 rounded-2xl font-semibold hover:scale-105 transition-transform">
                Entrar para a Plataforma
              </button>

              <button className="border border-white/20 px-6 py-4 rounded-2xl hover:bg-white/5 transition">
                Conhecer Mentoria
              </button>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8 border border-white/10 shadow-2xl">
            <div className="space-y-6">
              <div>
                <p className="text-zinc-400 text-sm mb-2">Inclui:</p>
                <ul className="space-y-3 text-zinc-200">
                  <li>• Biblioteca exclusiva de estratégias corporativas</li>
                  <li>• Casos reais e lições práticas</li>
                  <li>• Frameworks de liderança e performance</li>
                  <li>• Templates e prompts de IA</li>
                  <li>• Mentoria personalizada opcional</li>
                </ul>
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="text-zinc-400 text-sm mb-2">Preço fundador</p>
                <div className="flex items-end gap-3">
                  <h2 className="text-5xl font-bold">R$197</h2>
                  <p className="text-zinc-400 mb-1">acesso vitalício</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-16 lg:px-24 border-b border-white/10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-zinc-400 mb-4">
              Sobre Mim
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Quase 10 anos crescendo dentro do ambiente corporativo.
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

          <div className="bg-zinc-900 rounded-[32px] border border-white/10 p-10">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-5xl font-bold mb-2">+9</p>
                <p className="text-zinc-400">anos em operações e liderança</p>
              </div>

              <div>
                <p className="text-5xl font-bold mb-2">Global</p>
                <p className="text-zinc-400">experiência em gestão multinacional</p>
              </div>

              <div>
                <p className="text-5xl font-bold mb-2">125%</p>
                <p className="text-zinc-400">melhoria operacional em turnaround crítico</p>
              </div>

              <div>
                <p className="text-5xl font-bold mb-2">64%</p>
                <p className="text-zinc-400">redução de absenteísmo em 4 meses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-16 lg:px-24 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 max-w-3xl">
            <p className="uppercase tracking-[0.3em] text-sm text-zinc-400 mb-4">
              O que você vai encontrar
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Uma biblioteca estratégica sobre o mundo corporativo real.
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed">
              Sem discurso motivacional vazio. Apenas experiências reais, erros, aprendizados, frameworks e decisões que fizeram diferença em cada etapa da carreira.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((module, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-white/10 rounded-3xl p-8 hover:border-white/20 transition"
              >
                <h3 className="text-2xl font-semibold mb-4">{module.title}</h3>
                <p className="text-zinc-300 leading-relaxed">{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-16 lg:px-24 border-b border-white/10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-zinc-400 mb-4">
              Mentoria Individual
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Aceleração personalizada de carreira.
            </h2>

            <p className="text-zinc-300 text-lg leading-relaxed mb-8">
              Mentoria focada em crescimento corporativo, liderança, estratégia profissional, comunicação executiva e posicionamento.
            </p>

            <div className="bg-zinc-900 rounded-3xl p-8 border border-white/10">
              <p className="text-zinc-400 mb-2">Pacote completo</p>
              <div className="flex items-end gap-3 mb-4">
                <h3 className="text-5xl font-bold">R$1497</h3>
                <p className="text-zinc-400 mb-1">4 sessões</p>
              </div>

              <ul className="space-y-3 text-zinc-200">
                <li>• Sessões de 60–90 minutos</li>
                <li>• Diagnóstico completo</li>
                <li>• Plano estratégico personalizado</li>
                <li>• Suporte entre sessões</li>
                <li>• Revisão de currículo e LinkedIn</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            {mentorshipSteps.map((step, index) => (
              <div
                key={index}
                className="border border-white/10 rounded-3xl p-8 bg-zinc-900"
              >
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-zinc-300 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-16 lg:px-24 border-b border-white/10">
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
                  <p className="font-semibold text-lg">{testimonial.name}</p>
                  <p className="text-zinc-400 text-sm mt-1">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center bg-zinc-900 border border-white/10 rounded-[40px] p-12">
          <p className="uppercase tracking-[0.3em] text-sm text-zinc-400 mb-4">
            Comece agora
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            O mapa corporativo que ninguém te entrega.
          </h2>

          <p className="text-zinc-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Aprenda a crescer com estratégia, visibilidade, liderança e inteligência corporativa real.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-transform">
              Quero entrar
            </button>

            <button className="border border-white/20 px-8 py-4 rounded-2xl hover:bg-white/5 transition">
              Agendar mentoria
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
