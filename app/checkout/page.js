"use client";

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

        {/* ESQUERDA */}
        <div>

          <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-6">
            Checkout Seguro
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
            Acesso à Plataforma Premium
          </h1>

          <p className="text-xl text-zinc-300 leading-relaxed mb-10">
            Biblioteca estratégica corporativa, frameworks reais, gestão de crise, liderança global, performance e conteúdos exclusivos liberados semanalmente.
          </p>

          <div className="space-y-5">

            <div className="flex items-center gap-4 bg-zinc-900 border border-white/10 rounded-2xl p-5">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <p className="text-zinc-200">
                Acesso vitalício
              </p>
            </div>

            <div className="flex items-center gap-4 bg-zinc-900 border border-white/10 rounded-2xl p-5">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <p className="text-zinc-200">
                Novos conteúdos adicionados continuamente
              </p>
            </div>

            <div className="flex items-center gap-4 bg-zinc-900 border border-white/10 rounded-2xl p-5">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <p className="text-zinc-200">
                Espaço exclusivo de perguntas e respostas
              </p>
            </div>

            <div className="flex items-center gap-4 bg-zinc-900 border border-white/10 rounded-2xl p-5">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <p className="text-zinc-200">
                Garantia de 7 dias
              </p>
            </div>

          </div>

        </div>

        {/* DIREITA */}
        <div className="bg-zinc-900 border border-white/10 rounded-[32px] p-10 sticky top-10">

          <div className="mb-8">

            <p className="text-zinc-500 line-through text-2xl mb-2">
              R$197
            </p>

            <div className="flex items-end gap-4 mb-3">

              <span className="text-7xl font-bold">
                R$109
              </span>

              <span className="text-zinc-400 mb-3">
                lançamento
              </span>

            </div>

            <p className="text-zinc-500">
              pagamento único • acesso vitalício
            </p>

          </div>

          <div className="border-t border-white/10 pt-8 space-y-5">

            <div>

              <label className="text-sm text-zinc-400 mb-2 block">
                Nome completo
              </label>

              <input
                type="text"
                placeholder="Seu nome"
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/30"
              />

            </div>

            <div>

              <label className="text-sm text-zinc-400 mb-2 block">
                Email
              </label>

              <input
                type="email"
                placeholder="seuemail@email.com"
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/30"
              />

            </div>

            <div>

              <label className="text-sm text-zinc-400 mb-2 block">
                Forma de pagamento
              </label>

              <select className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/30">

                <option>PIX</option>
                <option>Cartão de Crédito</option>
                <option>Boleto</option>

              </select>

            </div>

            <button className="w-full bg-white text-black py-5 rounded-2xl font-semibold text-lg hover:scale-[1.02] transition-transform">

              Finalizar pagamento

            </button>

          </div>

          <div className="mt-8 pt-8 border-t border-white/10">

            <p className="text-sm text-zinc-500 leading-relaxed">
              Ao finalizar sua compra você receberá acesso imediato à plataforma e aos conteúdos disponíveis da semana atual.
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}
