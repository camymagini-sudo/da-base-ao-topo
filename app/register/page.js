export default function RegisterPage() {
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
                  placeholder="Nome da empresa"
                  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-zinc-300">
                  Área de atuação
                </label>

                <select className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none">
                  <option>Selecione</option>
                  <option>Operações</option>
                  <option>Qualidade</option>
                  <option>Treinamento</option>
                  <option>Projetos</option>
                  <option>Processos</option>
                  <option>Customer Experience</option>
                  <option>RH</option>
                  <option>Tecnologia</option>
                  <option>Financeiro</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm text-zinc-300">
                  Nível profissional
                </label>

                <select className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none">
                  <option>Selecione</option>
                  <option>Analista</option>
                  <option>Especialista</option>
                  <option>Supervisor</option>
                  <option>Coordenador</option>
                  <option>Gerente</option>
                  <option>Diretor</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block mb-2 text-sm text-zinc-300">
                  Tempo de experiência
                </label>

                <select className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none">
                  <option>Selecione</option>
                  <option>0-2 anos</option>
                  <option>3-5 anos</option>
                  <option>6-10 anos</option>
                  <option>10+ anos</option>
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

                <select className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none">
                  <option>Selecione</option>
                  <option>Crescimento para liderança</option>
                  <option>Melhorar performance</option>
                  <option>Buscar promoção</option>
                  <option>Migrar de área</option>
                  <option>Desenvolver gestão</option>
                  <option>Mentoria individual</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm text-zinc-300">
                  Qual seu maior desafio profissional hoje?
                </label>

                <textarea
                  rows="5"
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
                  placeholder="********"
                  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none"
                />
              </div>

            </div>
          </div>

          {/* BOTÃO */}
          <button className="w-full bg-white text-black rounded-2xl py-5 font-semibold text-lg hover:bg-zinc-200 transition">
            Criar conta e continuar
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
