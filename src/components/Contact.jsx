function Contact() {
  return (
    <section
      id="contato"
      className="mt-32 border-t border-slate-800 pt-20 pb-20"
    >
      <h2 className="text-4xl font-bold">
        Contato
      </h2>

      <p className="mt-6 text-slate-400">
        Disponível para oportunidades, projetos e desenvolvimento de soluções web.
      </p>

      <div className="mt-8 flex flex-col gap-4">

        <a
          href="mailto:fernando_devbr@outlook.com"
          className="text-blue-400 hover:text-blue-300"
        >
          📧 fernando_devbr@outlook.com
        </a>

        <a
          href="https://github.com/FersouBR"
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 hover:text-blue-300"
        >
          💻 GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/fernando-moreira-de-sousa-680653179/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 hover:text-blue-300"
        >
          🔗 LinkedIn
        </a>

      </div>
    </section>
  )
}

export default Contact