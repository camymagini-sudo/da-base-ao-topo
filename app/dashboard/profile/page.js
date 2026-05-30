"use client";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <section className="max-w-6xl mx-auto px-6 py-16">

        {/* HERO */}
        <div className="mb-16">

          <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-4">
            Meu Perfil
          </p>

          <h1 className="text-5xl font-bold mb-6">
            Sua Jornada Estratégica
          </h1>

          <p className="text-zinc-400 text-xl max-w-4xl">
            Acompanhe sua evolução profissional dentro da plataforma e visualize
            seus próximos passos de desenvolvimento.
          </p>

        </div>

        {/* PERFIL */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">

          <div className="bg-zinc-900 border border-white/10 rounded-[28px] p-8">

            <p className="text-zinc-500 text-sm mb-4">
              Nome
            </p>

            <h2 className="text-2xl font-bold">
              Camila Magini
            </h2>

          </div>

          <div className="bg-zinc-900 border border-white/10 rounded-[28px] p-8">

            <p className="text-zinc-500 text-sm mb-4">
              Objetivo Principal
            </p>

            <h2 className="text-xl font-bold">
              Crescimento para Liderança
            </h2>

          </div>

          <div className="bg-zinc-900 border border-white/10 rounded-[28px] p-8">

            <p className="text-zinc-500 text-sm mb-4">
              Plano Atual
            </p>

            <h2 className="text-xl font-bold">
              Combo Executivo
            </h2>

          </div>

        </div>

        {/* EVOLUÇÃO */}
        <div className="bg-zinc-900 border border-white/10 rounded-[32px] p-10 mb-12">

          <h2 className="text-3xl font-bold mb-8">
            Evolução na Plataforma
          </h2>

          <div className="space-y-6">

            <div className="flex justify-between items-center">

              <span>Semana 1</span>

              <span className="text-green-400">
                Concluída
              </span>

            </div>

            <div className="flex justify-between items-center">

              <span>Semana 2</span>

              <span className="text-zinc-500">
                Pendente
              </span>

            </div>

            <div className="flex justify-between items-center">

              <span>Semana 3</span>

              <span className="text-zinc-500">
                Pendente
              </span>

            </div>

            <div className="flex justify-between items-center">

              <span>Semana 4</span>

              <span className="text-zinc-500">
                Pendente
              </span>

            </div>

            <div className="flex justify-between items-center">

              <span>Semana 5</span>

              <span className="text-zinc-500">
                Pendente
              </span>

            </div>

          </div>

        </div>

        {/* INSIGHT */}
        <div className="bg-white text-black rounded-[32px] p-10">

          <p className="uppercase tracking-[0.2em] text-sm mb-4">
            Insight Executivo
          </p>

          <h2 className="text-3xl font-bold leading-relaxed">
            Crescimento profissional não acontece por acaso.
            Ele é resultado da combinação entre competência,
            visibilidade, influência e posicionamento.
          </h2>

        </div>

      </section>

    </main>
  );
}
