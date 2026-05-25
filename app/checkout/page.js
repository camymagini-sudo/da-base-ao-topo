export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-16 text-center">

          <p className="text-xs tracking-[0.3em] text-zinc-500 uppercase mb-4">
            O Mundo Corporativo Real
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Escolha seu acesso
          </h1>

          <p className="text-zinc-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Escolha o formato ideal para acelerar sua evolução profissional,
            liderança e crescimento estratégico.
          </p>

        </div>

        {/* PLANOS */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* PLATAFORMA */}
          <div className="bg-zinc-950 border border-white/10 rounded-[32px] p-8 flex flex-col">

            <p className="text-zinc-500 uppercase tracking-[0.2em] text-sm mb-6">
              Plataforma
            </p>

            <h2 className="text-3xl font-bold mb-4">
              Acesso Estratégico
            </h2>

            <p className="text-zinc-400 leading-relaxed mb-8">
              Biblioteca executiva, frameworks reais, conteúdos semanais,
              templates e perguntas & respostas da comunidade.
            </p>

            <div className="mb-8">
              <p className="text-zinc-500 line-through text-xl">
                R$197
              </p>

              <div className="flex items-end gap-2">
                <span className="text-5xl font-bold">
                  R$109
                </span>

                <span className="text-zinc-400 mb-1">
                  acesso vitalício
                </span>
              </div>
            </div>

            <ul className="space-y-4 text-zinc-300 mb-10 flex-1">
              <li>• Conteúdos liberados semanalmente</li>
              <li>• Biblioteca estratégica</li>
              <li>• Templates executivos</li>
              <li>• Perguntas & Respostas</li>
              <li>• Atualizações futuras</li>
            </ul>

<a
  href="https://mpago.la/25BRre1"
  target="_blank"
  className="block w-full bg-white text-black rounded-2xl py-4 font-semibold hover:bg-zinc-200 transition text-center"
>
  Escolher Plataforma
</a>

          </div>

          {/* MENTORIA */}
          <div className="bg-zinc-950 border border-white/10 rounded-[32px] p-8 flex flex-col">

            <p className="text-zinc-500 uppercase tracking-[0.2em] text-sm mb-6">
              Mentoria
            </p>

            <h2 className="text-3xl font-bold mb-4">
              Mentoria Individual
            </h2>

            <p className="text-zinc-400 leading-relaxed mb-8">
              Sessões estratégicas individuais focadas em liderança,
              crescimento, performance, gestão e posicionamento executivo.
            </p>

            <div className="mb-8">
              <p className="text-zinc-500 line-through text-xl">
                R$1.000
              </p>

              <div className="flex items-end gap-2">
                <span className="text-5xl font-bold">
                  R$500
                </span>

                <span className="text-zinc-400 mb-1">
                  lançamento
                </span>
              </div>
            </div>

            <ul className="space-y-4 text-zinc-300 mb-10 flex-1">
              <li>• Sessões individuais</li>
              <li>• Plano estratégico profissional</li>
              <li>• Revisão de carreira</li>
              <li>• Crescimento para liderança</li>
              <li>• Direcionamento executivo</li>
            </ul>

<a
  href="https://mpago.la/33DkRz8"
  target="_blank"
  className="block w-full border border-white/20 rounded-2xl py-4 font-semibold hover:bg-white hover:text-black transition text-center"
>
  Escolher Mentoria
</a>

          </div>

          {/* COMBO */}
          <div className="relative bg-white text-black rounded-[32px] p-8 flex flex-col overflow-hidden">

            <div className="absolute top-5 right-5 bg-black text-white text-xs px-4 py-2 rounded-full uppercase tracking-[0.2em]">
              Mais escolhido
            </div>

            <p className="uppercase tracking-[0.2em] text-sm mb-6 text-zinc-600">
              Combo Executivo
            </p>

            <h2 className="text-3xl font-bold mb-4">
              Plataforma + Mentoria
            </h2>

            <p className="text-zinc-700 leading-relaxed mb-8">
              Acesso completo à plataforma + acompanhamento individual
              estratégico para acelerar sua evolução profissional.
            </p>

            <div className="mb-8">
              <p className="text-zinc-500 line-through text-xl">
                R$1.197
              </p>

              <div className="flex items-end gap-2">
                <span className="text-5xl font-bold">
                  R$549
                </span>

                <span className="text-zinc-600 mb-1">
                  oferta lançamento
                </span>
              </div>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
              <li>• Tudo da plataforma</li>
              <li>• Mentoria individual</li>
              <li>• Prioridade no suporte</li>
              <li>• Direcionamento estratégico</li>
              <li>• Crescimento acelerado</li>
            </ul>

<a
  href="https://mpago.la/2orAoTG"
  target="_blank"
  className="block w-full bg-black text-white rounded-2xl py-4 font-semibold hover:bg-zinc-800 transition text-center"
>
  Escolher Combo Executivo
</a>

          </div>

        </div>

        {/* RODAPÉ */}
        <div className="mt-20 text-center">

          <p className="text-zinc-500 text-sm max-w-2xl mx-auto leading-relaxed">
            Após o pagamento, seu acesso será liberado automaticamente.
            Os conteúdos da plataforma são liberados semanalmente para melhor
            absorção prática e estratégica.
          </p>

        </div>

      </div>
    </main>
  );
}
