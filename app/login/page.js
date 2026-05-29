"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setErro("");

    if (!email || !senha) {
      setErro("Preencha email e senha.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password: senha,
    });

    setLoading(false);

    if (error) {
      setErro("Email ou senha inválidos.");
      return;
    }

    router.push("/dashboard");
  };

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
            Entre na sua conta para acessar os conteúdos exclusivos,
            biblioteca estratégica e mentorias.
          </p>

        </div>

        {erro && (
          <div className="mb-6 bg-red-500/10 border border-red-500/20 rounded-2xl p-4 text-red-400">
            {erro}
          </div>
        )}

        <div className="space-y-5">

          <div>
            <label className="text-sm text-zinc-400 mb-2 block">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="********"
              className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/30 transition"
            />
          </div>

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-white text-black py-4 rounded-2xl font-semibold hover:scale-[1.02] transition-transform disabled:opacity-50"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>

        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">

          <p className="text-zinc-400 text-sm mb-4">
            Ainda não possui conta?
          </p>

          <a
            href="/register"
            className="inline-flex border border-white/10 rounded-2xl px-6 py-3 hover:bg-white hover:text-black transition"
          >
            Criar conta
          </a>

        </div>

      </div>

    </main>
  );
}
