"use client";

export default function TemplatesPage() {
  const templates = [
    {
      title: "1:1 com Liderança",
      description:
        "Estrutura para reuniões estratégicas com gestores e diretores.",
    },
    {
      title: "Plano de Desenvolvimento",
      description:
        "Template para construção de metas de crescimento profissional.",
    },
    {
      title: "Mapa de Stakeholders",
      description:
        "Ferramenta para identificar influenciadores e decisores internos.",
    },
    {
      title: "Plano de Visibilidade",
      description:
        "Estrutura para aumentar exposição estratégica dentro da empresa.",
    },
    {
      title: "Preparação para Promoção",
      description:
        "Checklist executivo para se posicionar para o próximo cargo.",
    },
    {
      title: "Reunião com Diretoria",
      description:
        "Framework para apresentar resultados de forma executiva.",
    },
    {
      title: "Feedback Difícil",
      description:
        "Roteiro para conduzir conversas delicadas com profissionais.",
    },
    {
      title: "Plano de Influência",
      description:
        "Modelo para desenvolver networking e influência interna.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="mb-16">

          <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-4">
            Templates Executivos
          </p>

          <h1 className="text-5xl font-bold mb-6">
            Ferramentas de Aplicação Imediata
          </h1>

          <p className="text-zinc-400 text-xl max-w-4xl">
            Frameworks, modelos e estruturas utilizadas para acelerar
            crescimento profissional, influência e posicionamento corporativo.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          {templates.map((template, index) => (

            <div
              key={index}
              className="bg-zinc-900 border border-white/10 rounded-[28px] p-6"
            >

              <h2 className="text-xl font-bold mb-4">
                {template.title}
              </h2>

              <p className="text-zinc-400 mb-8">
                {template.description}
              </p>

              <button className="w-full bg-white text-black rounded-2xl py-3 font-semibold hover:bg-zinc-200 transition">
                Baixar Template
              </button>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}
