"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

export default function RegisterPage() {
  const router = useRouter();

const [nome, setNome] = useState("");
const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");
const [confirmarSenha, setConfirmarSenha] = useState("");
const [whatsapp, setWhatsapp] = useState("");
const [cidade, setCidade] = useState("");
const [estado, setEstado] = useState("");

const [cargo, setCargo] = useState("");
const [empresa, setEmpresa] = useState("");
const [area, setArea] = useState("");
const [nivel, setNivel] = useState("");
const [experiencia, setExperiencia] = useState("");

const [objetivo, setObjetivo] = useState("");
const [desafio, setDesafio] = useState("");
const [loading, setLoading] = useState(false);
const [erro, setErro] = useState("");

const handleRegister = async () => {
  setErro("");

  if (!nome || !email || !senha) {
    setErro("Preencha todos os campos obrigatórios.");
    return;
  }

  if (senha !== confirmarSenha) {
    setErro("As senhas não coincidem.");
    return;
  }

  setLoading(true);

  const { data, error } = await supabase.auth.signUp({
    email,
    password: senha,
    options: {
      data: {
        nome,
      },
    },
  });

  setLoading(false);

  if (error) {
    setErro(error.message);
    return;
  }

  router.push("/checkout");
};
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-3xl mx-auto">

        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] text-zinc-500 uppercase mb-4">
            O Mundo Corporativo Real
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Crie sua conta
          </h1>

          <p className="text-zinc-400 text-xl leading-relaxed max-w-2xl">
            Complete seu cadastro para acessar a plataforma estratégica,
            mentorias, conteúdos exclusivos e trilhas de crescimento profissional.
          </p>
        </div>

        <div className="bg-zinc-950 border border-white/10 rounded-[32px] p-8 md:p-12">

          {/* ETAPA 1 */}
          <div className="mb-14">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold">
                1
              </div>

              <div>
                <h2 className="text-2xl font-semibold">
                  Dados pessoais
                </h2>

                <p className="text-zinc-500 text-sm">
                  Informações básicas de acesso
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="md:col-span-2">
                <label className="block mb-2 text-sm text-zinc-300">
                  Nome completo
                </label>

<input
  type="text"
  value={nome}
  onChange={(e) => setNome(e.target.value)}
  placeholder="Seu nome"
  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none"
/>
              </div>

              <div>
                <label className="block mb-2 text-sm text-zinc-300">
                  Email
                </label>

<input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="seuemail@email.com"
  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none"
/>
              </div>

              <div>
                <label className="block mb-2 text-sm text-zinc-300">
                  WhatsApp
                </label>

<input
  type="text"
  value={whatsapp}
  onChange={(e) => setWhatsapp(e.target.value)}
  placeholder="(11) 99999-9999"
  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none"
/>
              </div>

              <div>
                <label className="block mb-2 text-sm text-zinc-300">
                  Cidade
                </label>

<input
  type="text"
  value={cidade}
  onChange={(e) => setCidade(e.target.value)}
  placeholder="São Paulo"
  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none"
/>
              </div>

              <div>
                <label className="block mb-2 text-sm text-zinc-300">
                  Estado
                </label>

<input
  type="text"
  value={estado}
  onChange={(e) => setEstado(e.target.value)}
  placeholder="SP"
  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none"
/>
              </div>

            </div>
          </div>

          {/* ETAPA 2 */}
          <div className="mb-14 border-t border-white/10 pt-14">

            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold">
                2
              </div>

              <div>
                <h2 className="text-2xl font-semibold">
                  Perfil profissional
                </h2>

                <p className="text-zinc-500 text-sm">
                  Entenda seu momento profissional
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="block mb-2 text-sm text-zinc-300">
                  Cargo atual
                </label>

<input
  type="text"
  value={cargo}
  onChange={(e) => setCargo(e.target.value)}
  placeholder="Ex: Coordenador de Operações"
  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none"
/>
              </div>

              <div>
                <label className="block mb-2 text-sm text-zinc-300">
                  Empresa atual
                </label>

<input
  type="text"
  value={empresa}
  onChange={(e) => setEmpresa(e.target.value)}
  placeholder="Nome da empresa"
  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none"
/>
              </div>

              <div>
                <label className="block mb-2 text-sm text-zinc-300">
                  Área de atuação
                </label>

<select
  value={area}
  onChange={(e) => setArea(e.target.value)}
  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none"
>
  <option value="">Selecione</option>
  <option value="Operações">Operações</option>
  <option value="Qualidade">Qualidade</option>
  <option value="Treinamento">Treinamento</option>
  <option value="Projetos">Projetos</option>
  <option value="Processos">Processos</option>
  <option value="Customer Experience">Customer Experience</option>
  <option value="RH">RH</option>
  <option value="Tecnologia">Tecnologia</option>
  <option value="Financeiro">Financeiro</option>
</select>
              </div>

              <div>
                <label className="block mb-2 text-sm text-zinc-300">
                  Nível profissional
                </label>

<select
  value={nivel}
  onChange={(e) => setNivel(e.target.value)}
  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none"
>
  <option value="">Selecione</option>
  <option value="Analista">Analista</option>
  <option value="Especialista">Especialista</option>
  <option value="Supervisor">Supervisor</option>
  <option value="Coordenador">Coordenador</option>
  <option value="Gerente">Gerente</option>
  <option value="Diretor">Diretor</option>
</select>
              </div>

              <div className="md:col-span-2">
                <label className="block mb-2 text-sm text-zinc-300">
                  Tempo de experiência
                </label>

<select
  value={experiencia}
  onChange={(e) => setExperiencia(e.target.value)}
  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none"
>
  <option value="">Selecione</option>
  <option value="0-2 anos">0-2 anos</option>
  <option value="3-5 anos">3-5 anos</option>
  <option value="6-10 anos">6-10 anos</option>
  <option value="10+ anos">10+ anos</option>
</select>
              </div>

            </div>
          </div>

          {/* ETAPA 3 */}
          <div className="mb-14 border-t border-white/10 pt-14">

            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold">
                3
              </div>

              <div>
                <h2 className="text-2xl font-semibold">
                  Objetivos profissionais
                </h2>

                <p className="text-zinc-500 text-sm">
                  Entenda o que você busca desenvolver
                </p>
              </div>
            </div>

            <div className="space-y-6">

              <div>
                <label className="block mb-2 text-sm text-zinc-300">
                  Principal objetivo na plataforma
                </label>

<select
  value={objetivo}
  onChange={(e) => setObjetivo(e.target.value)}
  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none"
>
  <option value="">Selecione</option>
  <option value="Crescimento para liderança">Crescimento para liderança</option>
  <option value="Melhorar performance">Melhorar performance</option>
  <option value="Buscar promoção">Buscar promoção</option>
  <option value="Migrar de área">Migrar de área</option>
  <option value="Desenvolver gestão">Desenvolver gestão</option>
  <option value="Mentoria individual">Mentoria individual</option>
</select>
              </div>

              <div>
                <label className="block mb-2 text-sm text-zinc-300">
                  Qual seu maior desafio profissional hoje?
                </label>

<textarea
  rows="5"
  value={desafio}
  onChange={(e) => setDesafio(e.target.value)}
  placeholder="Descreva seus desafios atuais..."
  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none resize-none"
/>
              </div>

            </div>
          </div>

          {/* SENHA */}
          <div className="border-t border-white/10 pt-14 mb-10">

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="block mb-2 text-sm text-zinc-300">
                  Senha
                </label>

<input
  type="password"
  value={senha}
  onChange={(e) => setSenha(e.target.value)}
  placeholder="********"
  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none"
/>
              </div>

              <div>
                <label className="block mb-2 text-sm text-zinc-300">
                  Confirmar senha
                </label>

<input
  type="password"
  value={confirmarSenha}
  onChange={(e) => setConfirmarSenha(e.target.value)}
  placeholder="********"
  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none"
/>
              </div>

            </div>
          </div>

          {/* BOTÃO */}
  {erro && (
  <div className="mb-6 bg-red-500/10 border border-red-500/20 rounded-2xl p-4 text-red-400">
    {erro}
  </div>
)}
<button
  onClick={handleRegister}
  disabled={loading}
  className="w-full bg-white text-black rounded-2xl py-5 font-semibold text-lg hover:bg-zinc-200 transition text-center disabled:opacity-50"
>
  {loading ? "Criando conta..." : "Criar conta e continuar"}
</button>

          {/* LOGIN */}
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
      </div>
    </main>
  );
}
