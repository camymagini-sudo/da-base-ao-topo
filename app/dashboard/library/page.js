"use client";

export default function LibraryPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <section className="max-w-7xl mx-auto px-6 py-16">

        {/* HERO */}
        <div className="mb-16">

          <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-4">
            Biblioteca Estratégica
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Conhecimento Executivo Aplicado
          </h1>

          <p className="text-zinc-400 text-xl leading-relaxed max-w-4xl">
            Leituras estratégicas, análises corporativas, frameworks e estudos
            de caso para acelerar sua evolução profissional além dos módulos da
            plataforma.
          </p>

        </div>

        {/* CRESCIMENTO CORPORATIVO */}
        <div className="mb-16">

          <h2 className="text-3xl font-bold mb-8">
            Crescimento Corporativo
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            <div className="bg-zinc-900 border border-white/10 rounded-[28px] p-6">
              <h3 className="font-bold text-xl mb-4">
                Visibilidade Executiva
              </h3>

              <p className="text-zinc-400">
                Como aumentar sua exposição estratégica dentro da organização.
              </p>
            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-[28px] p-6">
              <h3 className="font-bold text-xl mb-4">
                Influência sem Cargo
              </h3>

              <p className="text-zinc-400">
                Construindo autoridade antes da liderança formal.
              </p>
            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-[28px] p-6">
              <h3 className="font-bold text-xl mb-4">
                Política Corporativa
              </h3>

              <p className="text-zinc-400">
                Entenda as dinâmicas invisíveis que influenciam decisões.
              </p>
            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-[28px] p-6">
              <h3 className="font-bold text-xl mb-4">
                Stakeholders Internos
              </h3>

              <p className="text-zinc-400">
                Como construir alianças estratégicas.
              </p>
            </div>

          </div>

        </div>

        {/* LIDERANÇA */}
        <div className="mb-16">

          <h2 className="text-3xl font-bold mb-8">
            Liderança
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            <div className="bg-zinc-900 border border-white/10 rounded-[28px] p-6">
              <h3 className="font-bold text-xl mb-4">
                Primeiros 90 Dias
              </h3>

              <p className="text-zinc-400">
                O que fazer ao assumir uma posição de liderança.
              </p>
            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-[28px] p-6">
              <h3 className="font-bold text-xl mb-4">
                Delegação Estratégica
              </h3>

              <p className="text-zinc-400">
                Como desenvolver autonomia no time.
              </p>
            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-[28px] p-6">
              <h3 className="font-bold text-xl mb-4">
                Conversas Difíceis
              </h3>

              <p className="text-zinc-400">
                Framework para feedback e gestão de conflitos.
              </p>
            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-[28px] p-6">
              <h3 className="font-bold text-xl mb-4">
                Gestão de Performance
              </h3>

              <p className="text-zinc-400">
                Como elevar resultados sem perder engajamento.
              </p>
            </div>

          </div>

        </div>

        {/* CARREIRA */}
        <div className="mb-16">

          <h2 className="text-3xl font-bold mb-8">
            Carreira
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            <div className="bg-zinc-900 border border-white/10 rounded-[28px] p-6">
              <h3 className="font-bold text-xl mb-4">
                Como Ser Promovida
              </h3>

              <p className="text-zinc-400">
                O que realmente pesa nas movimentações internas.
              </p>
            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-[28px] p-6">
              <h3 className="font-bold text-xl mb-4">
                Negociação Salarial
              </h3>

              <p className="text-zinc-400">
                Como defender seu valor profissional.
              </p>
            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-[28px] p-6">
              <h3 className="font-bold text-xl mb-4">
                Autoridade Profissional
              </h3>

              <p className="text-zinc-400">
                Construindo reputação de longo prazo.
              </p>
            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-[28px] p-6">
              <h3 className="font-bold text-xl mb-4">
                Networking Interno
              </h3>

              <p className="text-zinc-400">
                Relacionamentos que impulsionam crescimento.
              </p>
            </div>

          </div>

        </div>

        {/* CASOS REAIS */}
        <div>

          <h2 className="text-3xl font-bold mb-8">
            Casos Reais
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-zinc-900 border border-white/10 rounded-[28px] p-8">
              <h3 className="text-2xl font-bold mb-4">
                A Promoção Perdida
              </h3>

              <p className="text-zinc-400">
                Análise completa de um caso onde performance não foi suficiente
                para garantir crescimento.
              </p>
            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-[28px] p-8">
              <h3 className="text-2xl font-bold mb-4">
                Conflito com Gestor
              </h3>

              <p className="text-zinc-400">
                Como agir quando seu crescimento depende de alguém que não apoia
                sua evolução.
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
