import projects from '../data/projects'

function Projects() {
  return (
    <section
      id="projetos"
      className="mt-32 border-t border-slate-800 pt-20"
    >
      <h2 className="text-4xl font-bold">
        Projetos
      </h2>

      <p className="mt-4 text-slate-400">
        Projetos em desenvolvimento.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {projects.map((project) => (
          <article
            key={project.id}
            className="rounded-xl border border-slate-800 p-6"
          >
            <h3 className="text-xl font-semibold">
              {project.title}
            </h3>

            <p className="mt-4 text-slate-400">
              {project.description}
            </p>

            <div className="mt-4 text-sm text-blue-400">
              {project.technologies}
            </div>

            <div className="mt-6 flex gap-3">

              <a
                href={project.demo}
                className="rounded bg-blue-600 px-4 py-2 hover:bg-blue-700"
              >
                Demo
              </a>

              <a
                href={project.github}
                className="rounded border border-slate-700 px-4 py-2 hover:bg-slate-800"
              >
                GitHub
              </a>

            </div>

          </article>
        ))}

      </div>
    </section>
  )
}

export default Projects