export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-zinc-950 border border-white/10 rounded-[32px] p-10">
        
        <p className="text-xs tracking-[0.3em] text-zinc-500 uppercase mb-6">
          O Mundo Corporativo Real
        </p>

        <h1 className="text-5xl font-bold leading-tight mb-6">
          Crie sua conta
        </h1>

        <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
          Cadastre-se para acessar a plataforma, conteúdos estratégicos,
          mentorias e materiais exclusivos.
        </p>

        <div className="space-y-5">
          
          <div>
            <label className="block mb-2 text-sm text-zinc-300">
              Nome completo
            </label>

            <input
              type="text"
              placeholder="Seu nome"
              className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 text-white outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-zinc-300">
              Email
            </label>

            <input
              type="email"
              placeholder="seuemail@email.com"
              className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 text-white outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-zinc-300">
              Senha
            </label>

            <input
              type="password"
              placeholder="********"
              className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 text-white outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-zinc-300">
              Confirmar senha
            </label>

            <input
              type="password"
              placeholder="********"
              className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 text-white outline-none"
            />
          </div>

          <button className="w-full bg-white text-black rounded-2xl py-4 font-semibold text-lg mt-4 hover:bg-zinc-200 transition">
            Criar conta
          </button>

        </div>

        <div className="border-t border-white/10 mt-10 pt-8 text-center">
          <p className="text-zinc-400 mb-4">
            Já possui conta?
          </p>

          <a
            href="/login"
            className="inline-flex border border-white/10 rounded-2xl px-6 py-3 hover:bg-white hover:text-black transition"
          >
            Fazer login
          </a>
        </div>

      </div>
    </main>
  );
}
