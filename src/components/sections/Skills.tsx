const skills = [
  'React',
  'TypeScript',
  'JavaScript',
  'Tailwind',
  'Python',
  'FastAPI',
  'Node.js',
  'PostgreSQL',
  'Docker',
  'Git',
]

export default function Skills() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Yetenekler</h2>
        <ul className="flex flex-wrap gap-2" role="list" aria-label="Yetenekler">
          {skills.map((skill) => (
            <li
              key={skill}
              className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-3 py-1.5 rounded-full text-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

