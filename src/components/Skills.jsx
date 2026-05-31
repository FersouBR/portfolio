function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
    "GitHub",
    "Vite",
    "Tailwind CSS",
    "Node.js",
    "TypeScript"
  ]

  return (
    <section
      id="habilidades"
      className="mt-32 border-t border-slate-800 pt-20"
    >
      <h2 className="text-4xl font-bold">
        Habilidades
      </h2>

      <div className="mt-10 flex flex-wrap gap-4">

        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-lg border border-slate-700 px-4 py-2"
          >
            {skill}
          </div>
        ))}

      </div>
    </section>
  )
}

export default Skills