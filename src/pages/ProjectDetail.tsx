import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div className="project-detail project-detail--not-found">
        <header className="site-header">
          <Link to="/" className="site-title-link">Muhammed Beşir Kesen</Link>
        </header>
        <div className="project-detail__content">
          <p>Proje bulunamadı.</p>
          <Link to="/#projeler" className="back-link">← Projelere dön</Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <header className="site-header site-header--detail">
        <Link to="/" className="site-title-link">Muhammed Beşir Kesen</Link>
        <Link to="/#projeler" className="back-link" aria-label="Projelere dön">
          ← Projelere dön
        </Link>
      </header>
    <article className="project-detail">

      <header className="project-detail__header">
        {project.image && (
          <figure className="project-detail__figure">
            <img
              src={project.image}
              alt={`${project.title} projesinin ekran görüntüsü`}
              className="project-detail__image"
            />
          </figure>
        )}
        <h1 className="project-detail__title">{project.title}</h1>
        <ul className="project-detail__tech" role="list">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </header>

      <div className="project-detail__content">
        <p className="project-detail__desc">{project.description}</p>
      </div>
    </article>
    </>
  )
}
