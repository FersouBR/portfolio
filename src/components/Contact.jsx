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
        Disponível para oportunidades, freelas e projetos.
      </p>

      <div className="mt-6">
        <a
          href="mailto:fernando@email.com"
          className="text-blue-400 hover:text-blue-300"
        >
          fernando@email.com
        </a>
      </div>
    </section>
  )
}

export default Contact