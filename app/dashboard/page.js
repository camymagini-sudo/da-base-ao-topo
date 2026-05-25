"use client";

import { useState } from "react";

export default function DashboardPage() {

  const [contentUnlocked] = useState(false);

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
            {!contentUnlocked ? "Semana 2 🔒" : "Semana 2"}
          </a>

          <a className="block text-zinc-500 hover:bg-zinc-900 rounded-2xl px-5 py-4 transition">
            {!contentUnlocked ? "Semana 3 🔒" : "Semana 3"}
          </a>

          <a className="block text-zinc-500 hover:bg-zinc-900 rounded-2xl px-5 py-4 transition">
            {!contentUnlocked ? "Semana 4 🔒" : "Semana 4"}
          </a>

          <a className="block text-zinc-500 hover:bg-zinc-900 rounded-2xl px-5 py-4 transition">
            {!contentUnlocked ? "Semana 5 🔒" : "Semana 5"}
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

          {/* PROGRESSO */}
          <div className="mt-8">

            <div className="flex items-center justify-between mb-3">

              <p className="text-sm text-zinc-400">
                Progresso da plataforma
              </p>

              <p className="text-sm text-zinc-400">
                20%
              </p>

            </div>

            <div className="w-full bg-zinc-900 rounded-full h-3 overflow-hidden">

              <div className="bg-white h-full w-[20%] rounded-full" />

            </div>

          </div>

          {/* AVISO TEMPORÁRIO */}
          {!contentUnlocked && (
            <div className="mt-8 bg-zinc-900 border border-white/10 rounded-[24px] p-6">

              <p className="text-white font-semibold mb-2">
                Liberação semanal ativa
              </p>

              <p className="text-zinc-400 leading-relaxed">
                Após os primeiros 7 dias, toda a plataforma será desbloqueada automaticamente
                para você acessar no seu próprio ritmo.
              </p>

            </div>
          )}

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
    Nível Estratégico
  </p>

  <h3 className="text-3xl font-bold mb-4">
    Executivo em Desenvolvimento
  </h3>

  <p className="text-zinc-400 leading-relaxed">
    Continue avançando para desbloquear novos frameworks, templates e conteúdos estratégicos.
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
                  Supervisora • São Paulo • há 2 horas
                </p>

                <div className="bg-zinc-800 px-4 py-2 rounded-full text-sm">
                  Promoção
                </div>

              </div>

              <h4 className="text-2xl font-bold mb-4">
                Entrego resultado há meses, mas nunca sou considerada nas movimentações internas.
              </h4>

              <p className="text-zinc-400 leading-relaxed">
                Sinto que pessoas com mais relacionamento político acabam tendo mais visibilidade do que quem performa operacionalmente.
              </p>

            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-[28px] p-8">

              <div className="flex items-center justify-between mb-6">

                <p className="text-zinc-500 text-sm">
                  Analista Sênior • Curitiba • há 5 horas
                </p>

                <div className="bg-zinc-800 px-4 py-2 rounded-full text-sm">
                  Liderança
                </div>

              </div>

              <h4 className="text-2xl font-bold mb-4">
                Como saber se estou pronta para gestão ou apenas absorvendo mais responsabilidade?
              </h4>

              <p className="text-zinc-400 leading-relaxed">
                Tenho liderado projetos, treinado pessoas e resolvido crises, mas nunca recebo movimentação formal.
              </p>

            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-[28px] p-8">

              <div className="flex items-center justify-between mb-6">

                <p className="text-zinc-500 text-sm">
                  Coordenadora • Recife • há 8 horas
                </p>

                <div className="bg-zinc-800 px-4 py-2 rounded-full text-sm">
                  Política Corporativa
                </div>

              </div>

              <h4 className="text-2xl font-bold mb-4">
                Como desenvolver influência sem parecer interesseira ou artificial?
              </h4>

              <p className="text-zinc-400 leading-relaxed">
                Percebo que networking interno pesa muito, mas ainda tenho dificuldade em me posicionar estrategicamente.
              </p>

            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-[28px] p-8">

              <div className="flex items-center justify-between mb-6">

                <p className="text-zinc-500 text-sm">
                  Gerente Operacional • Belo Horizonte • há 1 dia
                </p>

                <div className="bg-zinc-800 px-4 py-2 rounded-full text-sm">
                  Gestão de Crise
                </div>

              </div>

              <h4 className="text-2xl font-bold mb-4">
                Como manter autoridade em operações sob pressão sem desgastar completamente a equipe?
              </h4>

              <p className="text-zinc-400 leading-relaxed">
                KPI agressivo, absenteísmo alto e turnover constante estão afetando diretamente o clima operacional.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
