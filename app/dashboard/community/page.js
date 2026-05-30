"use client";

export default function CommunityPage() {
  const questions = [
    {
      author: "Supervisora • São Paulo",
      tag: "Promoção",
      likes: 24,
      comments: 8,
      question:
        "Entrego resultado há meses, mas nunca sou considerada nas movimentações internas.",
      answer:
        "Quando isso acontece, normalmente o problema não está na performance, mas na exposição estratégica. Quem conhece seus resultados além do seu gestor direto?",
    },
    {
      author: "Coordenadora • Recife",
      tag: "Política Corporativa",
      likes: 18,
      comments: 5,
      question:
        "Como desenvolver influência sem parecer artificial ou interesseira?",
      answer:
        "Influência saudável nasce de relacionamento genuíno, colaboração e entrega consistente. Networking não é pedir favores, é construir confiança.",
    },
    {
      author: "Analista Sênior • Curitiba",
      tag: "Liderança",
      likes: 31,
      comments: 12,
      question:
        "Como saber se estou pronta para gestão ou apenas assumindo mais responsabilidade?",
      answer:
        "Quando você deixa de ser apenas uma executora e começa a desenvolver pessoas, influenciar decisões e enxergar o negócio além da sua função.",
    },
    {
      author: "Gerente • Belo Horizonte",
      tag: "Gestão",
      likes: 15,
      comments: 6,
      question:
        "Como manter autoridade sem desgastar completamente a equipe?",
      answer:
        "Autoridade sustentável é construída através de clareza, consistência e confiança. Controle excessivo costuma gerar o efeito contrário.",
    },
    {
      author: "Especialista • Porto Alegre",
      tag: "Visibilidade",
      likes: 20,
      comments: 4,
      question:
        "Meu gestor me elogia individualmente, mas nunca me expõe para a liderança.",
      answer:
        "Nesse caso você precisa criar canais próprios de visibilidade através de projetos, fóruns e interações estratégicas.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">

      <section className="max-w-6xl mx-auto px-6 py-16">

        {/* HERO */}
        <div className="mb-16">

          <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-4">
            Comunidade • Q&A
          </p>

          <h1 className="text-5xl font-bold mb-6">
            Discussões Estratégicas
          </h1>

          <p className="text-zinc-400 text-xl max-w-4xl">
            Compartilhe desafios reais, acompanhe análises executivas
            e aprenda com situações vividas por outros profissionais.
          </p>

        </div>

        {/* NOVA PERGUNTA */}
        <div className="bg-zinc-900 border border-white/10 rounded-[32px] p-8 mb-12">

          <h2 className="text-2xl font-bold mb-6">
            Fazer uma pergunta
          </h2>

          <textarea
            rows="5"
            placeholder="Descreva sua situação..."
            className="w-full bg-black border border-white/10 rounded-2xl p-5 outline-none resize-none mb-6"
          />

          <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold">
            Publicar Pergunta
          </button>

        </div>

        {/* PERGUNTAS */}
        <div className="space-y-8">

          {questions.map((item, index) => (

            <div
              key={index}
              className="bg-zinc-900 border border-white/10 rounded-[32px] p-8"
            >

              <div className="flex items-center justify-between mb-6">

                <p className="text-zinc-500">
                  {item.author}
                </p>

                <span className="bg-zinc-800 px-4 py-2 rounded-full text-sm">
                  {item.tag}
                </span>

              </div>

              <h2 className="text-2xl font-bold mb-6">
                {item.question}
              </h2>

              <div className="bg-black rounded-[24px] p-6 mb-6">

                <p className="text-zinc-300 leading-relaxed">
                  {item.answer}
                </p>

              </div>

              <div className="flex gap-6 text-zinc-500">

                <span>👍 {item.likes}</span>

                <span>💬 {item.comments}</span>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}
