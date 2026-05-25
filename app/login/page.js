"use client";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-zinc-900 border border-white/10 rounded-[32px] p-10">

        <div className="mb-10">

          <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-4">
            O Mundo Corporativo Real
          </p>

          <h1 className="text-4xl font-bold mb-4">
            Acesse sua plataforma
          </h1>

          <p className="text-zinc-400 leading-relaxed">
            Entre na sua conta para acessar os conteúdos exclusivos, biblioteca estratégica e mentorias.
          </p>

        </div>

        <div className="space-y-5">

          <div>
            <label className="text-sm text-zinc-400 mb-2 block">
              Email
            </label>

            <input
              type="email"
              placeholder="seuemail@email.com"
              className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/30 transition"
            />
          </div>

          <div>
            <label className="text-sm text-zinc-400 mb-2 block">
              Senha
            </label>

            <input
              type="password"
              placeholder="********"
              className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/30 transition"
            />
          </div>

          <button className="w-full bg-white text-black py-4 rounded-2xl font-semibold hover:scale-[1.02] transition-transform">
            Entrar
          </button>

        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">

          <p className="text-zinc-400 text-sm mb-4">
            Ainda não possui conta?
          </p>

          <button className="border border-white/10 px-6 py-3 rounded-2xl hover:bg-white/5 transition">
            Criar conta
          </button>

        </div>

      </div>

    </main>
  );
}
