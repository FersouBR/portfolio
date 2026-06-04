import fotoPerfil from '../assets/fernando.jpeg'
function Hero() {
  return (
    <section className="grid items-center gap-12 lg:grid-cols-2">

      <div>

        <p className="text-blue-400 font-semibold uppercase tracking-widest">
          Portfolio Profissional
        </p>

        <h1 className="mt-4 text-6xl font-bold">
          Fernando Souza
        </h1>

        <h2 className="mt-4 text-2xl text-slate-300">
          Especialista Técnico em Manutenção
        </h2>

        <p className="mt-8 text-lg text-slate-400 leading-relaxed">
         
          Experiência em manutenção industrial e desenvolvimento
          de soluções digitais utilizando React, JavaScript,
          TypeScript e Node.js.
        </p>
         <div className="mt-8 flex gap-4">

          <a
            href="https://github.com/FersouBR"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-blue-600 px-5 py-3 hover:bg-blue-700"
            >
            GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/fernando-moreira-de-sousa-680653179/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-700 px-5 py-3 hover:bg-slate-800"
                >
              LinkedIn
              </a>

          </div>

      </div>

      <div className="flex justify-center">

        <img
          src={fotoPerfil}
          alt="Fernando Souza"
className="h-80 w-80 rounded-full object-cover border-4 border-blue-500 shadow-2xl shadow-blue-500/20"        />

      </div>

    </section>
  )
}

export default Hero