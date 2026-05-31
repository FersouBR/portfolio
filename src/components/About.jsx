function About() {
  return (
    <section
      id="sobre"
      className="mt-32 border-t border-slate-800 pt-20"
    >
      <h2 className="text-4xl font-bold">
        Sobre Mim
      </h2>

      <p className="mt-8 max-w-3xl text-lg text-slate-400 leading-relaxed">
        Profissional com experiência em manutenção industrial,
        diagnóstico de falhas, planejamento técnico e melhoria contínua.

        Atualmente em transição para o desenvolvimento de software,
        construindo aplicações modernas com React, JavaScript,
        TypeScript e Node.js.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">

        <div className="rounded-lg border border-slate-800 p-5">
          ✓ Diagnóstico de Falhas
        </div>

        <div className="rounded-lg border border-slate-800 p-5">
          ✓ Planejamento Técnico
        </div>

        <div className="rounded-lg border border-slate-800 p-5">
          ✓ Desenvolvimento Web
        </div>

        <div className="rounded-lg border border-slate-800 p-5">
          ✓ Automação de Processos
        </div>

      </div>

    </section>
  )
}

export default About