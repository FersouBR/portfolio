function Hero() {
  return (
    <section className="max-w-5xl">

      <div className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
        Disponível para Projetos e Freelancers
      </div>

      <h1 className="mt-8 text-6xl font-bold leading-tight">
        Fernando Souza
      </h1>

      <h2 className="mt-4 text-3xl text-slate-300">
        Especialista Técnico em Manutenção
      </h2>

      <h3 className="mt-2 text-xl text-blue-400">
        Desenvolvedor Full Stack em Formação
      </h3>

      <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-400">
        Experiência em manutenção industrial, análise de falhas,
        melhoria contínua e resolução de problemas complexos.
        Atualmente focado no desenvolvimento de aplicações web
        modernas utilizando React, TypeScript, Node.js e PostgreSQL.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">

        <a
          href="#projetos"
          className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700"
        >
          Ver Projetos
        </a>

        <a
          href="#contato"
          className="rounded-lg border border-slate-700 px-6 py-3 hover:bg-slate-800"
        >
          Entrar em Contato
        </a>

      </div>

    </section>
  )
}

export default Hero