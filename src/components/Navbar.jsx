function Navbar() {
  return (
    <header className="border-b border-slate-800">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="font-bold text-xl">
          Fernando Souza
        </h1>

        <div className="flex gap-6 text-slate-300">

          <a href="#sobre" className="hover:text-white">
            Sobre
          </a>

          <a href="#projetos" className="hover:text-white">
            Projetos
          </a>

          <a href="#contato" className="hover:text-white">
            Contato
          </a>

        </div>

      </nav>
    </header>
  )
}

export default Navbar