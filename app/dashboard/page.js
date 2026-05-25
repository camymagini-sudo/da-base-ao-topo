"use client";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black text-white flex">

      {/* SIDEBAR */}
      <aside className="w-[300px] border-r border-white/10 p-8 hidden lg:flex flex-col">

        <div className="mb-12">

          <p className="text-xs tracking-[0.3em] text-zinc-500 uppercase mb-4">
            O Mundo Corporativo Real
          </p>

          <h1 className="text-3xl font-bold leading-tight">
            Plataforma Estratégica
          </h1>

        </div>

        <nav className="space-y-3 flex-1">

          <a className="block bg-white text-black rounded-2xl px-5 py-4 font-medium">
            Início
          </a>

          <a className="block hover:bg-zinc-900 rounded-2xl px-5 py-4 transition">
            Semana 1
          </a>

          <a className="block text-zinc-500 hover:bg-zinc-900 rounded-2xl px-5 py-4 transition">
            Semana 2 🔒
          </a>

          <a className="block text-zinc-500 hover:bg-zinc-900 rounded-2xl px-5 py-4 transition">
            Semana 3 🔒
          </a>

          <a className="block text-zinc-500 hover:bg-zinc-900 rounded-2xl px-5 py-4 transition">
            Semana 4 🔒
          </a>

          <a className="block text-zinc-500 hover:bg-zinc-900 rounded-2xl px-5 py-4 transition">
            Semana 5 🔒
          </a>

          <div className="border-t border-white/10 my-6" />

          <a className="block hover:bg-zinc-900 rounded-2xl px-5 py-4 transition">
            Biblioteca Estratégica
          </a>

          <a className="block hover:bg-zinc-900 rounded-2xl px-5 py-4 transition">
            Templates Executivos
          </a>

          <a className="block hover:bg-zinc-900 rounded-2xl px-5 py-4 transition">
            Mentoria
          </a>

          <a className="block hover:bg-zinc-900 rounded-2xl px-5 py-4 transition">
            Comunidade • Q&A
          </a>

          <a className="block hover:bg-zinc-900 rounded-2xl px-5 py-4 transition">
            Meu Perfil
          </a>

        </nav>

        <div className="border-t border-white/10 pt-6">

          <p className="text-sm text-zinc-500 mb-2">
            Plano atual
          </p>

          <p className="font-semibold">
            Combo Executivo
          </p>

        </div>

      </aside>

      {/* CONTEÚDO */}
      <section className="flex-1 px-6 py-10 md:px-10 lg:px-14">

        {/* HEADER */}
        <div className="mb-14">

          <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm mb-4">
            Dashboard
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Bem-vinda de volta, Camila.
          </h2>

          <p className="text-zinc-400 text-xl leading-relaxed max-w-3xl">
            Seu crescimento estratégico começa aqui. Acompanhe sua evolução,
            conteúdos liberados e próximos desbloqueios.
          </p>

        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">

          <div className="bg-zinc-900 border border-white/10 rounded-[28px] p-6">

            <p className="text-zinc-500 text-sm mb-4">
              Semana atual
            </p>

            <h3 className="text-3xl font-bold mb-2">
              Semana 1
            </h3>

            <p className="text-zinc-400">
              Fundamentos do crescimento corporativo
            </p>

          </div>

          <div className="bg-zinc-900 border border-white/10 rounded-[28px] p-6">

            <p className="text-zinc-500 text-sm mb-4">
              Próxima liberação
            </p>

            <h3 className="text-3xl font-bold mb-2">
              7 dias
            </h3>

            <p className="text-zinc-400">
              Semana 2 • Performance & Influência
            </p>

          </div>

          <div className="bg-zinc-900 border border-white/10 rounded-[28px] p-6">

            <p className="text-zinc-500 text-sm mb-4">
              Templates
            </p>

            <h3 className="text-3xl font-bold mb-2">
              12
            </h3>

            <p className="text-zinc-400">
              materiais executivos disponíveis
            </p>

          </div>

          <div className="bg-zinc-900 border border-white/10 rounded-[28px] p-6">

            <p className="text-zinc-500 text-sm mb-4">
              Comunidade
            </p>

            <h3 className="text-3xl font-bold mb-2">
              24
            </h3>

            <p className="text-zinc-400">
              perguntas respondidas
            </p>

          </div>

        </div>

        {/* SEMANA 1 */}
        <div className="mb-16">

          <div className="flex items-center justify-between mb-8">

            <div>

              <p className="text-zinc-500 uppercase tracking-[0.2em] text-sm mb-3">
                Semana 1
              </p>

              <h3 className="text-4xl font-bold">
                Fundamentos do Crescimento Corporativo
              </h3>

            </div>

            <div className="bg-green-500/10 text-green-400 px-5 py-3 rounded-2xl">
              Liberado
            </div>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            <div className="bg-zinc-900 border border-white/10 rounded-[28px] p-8">

              <p className="text-zinc-500 text-sm mb-4">
                Módulo 1
              </p>

              <h4 className="text-2xl font-bold mb-4">
                Visibilidade Corporativa
              </h4>

              <p className="text-zinc-400 leading-relaxed">
                Como ser percebida estrategicamente dentro do ambiente corporativo.
              </p>

            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-[28px] p-8">

              <p className="text-zinc-500 text-sm mb-4">
                Módulo 2
              </p>

              <h4 className="text-2xl font-bold mb-4">
                Posicionamento Estratégico
              </h4>

              <p className="text-zinc-400 leading-relaxed">
                Como construir autoridade antes mesmo do cargo de liderança.
              </p>

            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-[28px] p-8">

              <p className="text-zinc-500 text-sm mb-4">
                Módulo 3
              </p>

              <h4 className="text-2xl font-bold mb-4">
                Erros que travam promoções
              </h4>

              <p className="text-zinc-400 leading-relaxed">
                Comportamentos que limitam crescimento profissional sem você perceber.
              </p>

            </div>

          </div>

        </div>

        {/* COMUNIDADE */}
        <div>

          <div className="flex items-center justify-between mb-8">

            <div>

              <p className="text-zinc-500 uppercase tracking-[0.2em] text-sm mb-3">
                Comunidade • Q&A
              </p>

              <h3 className="text-4xl font-bold">
                Perguntas recentes
              </h3>

            </div>

            <button className="bg-white text-black px-6 py-4 rounded-2xl font-semibold hover:bg-zinc-200 transition">
              Fazer pergunta
            </button>

          </div>

          <div className="space-y-6">

            <div className="bg-zinc-900 border border-white/10 rounded-[28px] p-8">

              <div className="flex items-center justify-between mb-6">

                <p className="text-zinc-500 text-sm">
                  Anônimo • há 2 horas
                </p>

                <div className="bg-zinc-800 px-4 py-2 rounded-full text-sm">
                  Liderança
                </div>

              </div>

              <h4 className="text-2xl font-bold mb-4">
                Como ganhar visibilidade sem parecer arrogante?
              </h4>

              <p className="text-zinc-400 leading-relaxed">
                Existem formas estratégicas de construir presença corporativa
                através de comunicação, ownership e influência sem gerar rejeição política.
              </p>

            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-[28px] p-8">

              <div className="flex items-center justify-between mb-6">

                <p className="text-zinc-500 text-sm">
                  Público • há 5 horas
                </p>

                <div className="bg-zinc-800 px-4 py-2 rounded-full text-sm">
                  Promoção
                </div>

              </div>

              <h4 className="text-2xl font-bold mb-4">
                Como saber se estou pronta para liderança?
              </h4>

              <p className="text-zinc-400 leading-relaxed">
                Liderança não começa no cargo. Existem sinais claros de prontidão
                ligados à influência, visão estratégica e tomada de decisão.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
