"use client";

export default function PaymentPendingPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="max-w-2xl text-center">

        <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-6">
          Acesso Restrito
        </p>

        <h1 className="text-5xl font-bold mb-8">
          Pagamento Pendente
        </h1>

        <p className="text-zinc-400 text-xl leading-relaxed mb-10">
          Seu cadastro foi criado com sucesso.
          Assim que o pagamento for confirmado,
          seu acesso será liberado automaticamente.
        </p>

        <a
          href="/checkout"
          className="inline-flex bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:bg-zinc-200 transition"
        >
          Ir para pagamento
        </a>

      </div>

    </main>
  );
}
