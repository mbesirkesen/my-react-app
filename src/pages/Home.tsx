import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

export function Home() {
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set())
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme') as 'dark' | 'light' | null
      return saved ?? (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
    }
    return 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <header className="site-header">
        <div className="header-brand">
          <h1 className="site-title">Muhammed Beşir Kesen</h1>
          <p className="site-subtitle">Yazılım Mühendisi</p>
        </div>
        <div className="header-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Aydınlık moda geç' : 'Karanlık moda geç'}
            title={theme === 'dark' ? 'Aydınlık mod' : 'Karanlık mod'}
          >
            <span className="theme-icon" aria-hidden="true">{theme === 'dark' ? '☀️' : '🌙'}</span>
          </button>
          <nav aria-label="Ana navigasyon">
            <ul className="nav-list">
              <li>
                <a href="#hakkimda">Hakkımda</a>
              </li>
              <li>
                <a href="#projeler">Projeler</a>
              </li>
              <li>
                <a href="#iletisim">İletişim</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section id="hakkimda" className="section">
          <h2>Hakkımda</h2>

          <div className="about-content">
            <figure className="profile-figure">
              <img
                src="/profil.png"
                alt="Muhammed Beşir Kesen'in profil fotoğrafı"
                className="profile-image"
              />
              <figcaption>Muhammed Beşir Kesen</figcaption>
            </figure>

            <p>
              Fırat Üniversitesi Yazılım Mühendisliği 3. sınıf öğrencisiyim, HSD Fırat Core Team üyesiyim.
              TEKNOFEST Robolig KUHEYLAN Türkiye Finalisti, 5 farklı TEKNOFEST projesinde Scrum Master ve teknik ekip üyesi olarak yer aldım.
              Python (FastAPI), Node.js ve yapay zeka teknolojileri (RAG, Agentic AI) ile ölçeklenebilir backend sistemleri geliştiriyorum.
            </p>

            <h3>Dijital Beceriler</h3>
            <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
              <li>Python</li>
              <li>C#</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>TypeScript</li>
              <li>FastAPI</li>
              <li>LangChain</li>
              <li>Docker</li>
              <li>Git</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
        </section>

        <section id="projeler" className="section">
          <h2>Projelerim</h2>

          <div className="project-grid">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/proje/${project.id}`}
                className="project-card project-card--link"
              >
                <div className="project-card__image-wrap">
                  {project.image && !failedImages.has(project.id) ? (
                    <img
                      src={project.image}
                      alt={`${project.title} projesi görüntüsü`}
                      className="project-card__image"
                      onError={() => setFailedImages((prev) => new Set(prev).add(project.id))}
                    />
                  ) : (
                    <div className="project-card__placeholder" aria-hidden="true">
                      Görsel eklenmedi
                    </div>
                  )}
                </div>
                <div className="project-card__body">
                  <h3>{project.title}</h3>
                  <p>{project.shortDesc}</p>
                  <p className="project-tech">Teknolojiler: {project.tech.join(', ')}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="iletisim" className="section">
          <h2>İletişim</h2>

          <div className="contact-info">
            <p><strong>Telefon:</strong> +90 553 713 92 44</p>
            <p><strong>E-posta:</strong> kesenmuhammedbesir@gmail.com</p>
            <p>
              <a href="https://www.linkedin.com/in/muhammed-besir-kesen" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              {' · '}
              <a href="https://github.com/mbesirkesen" target="_blank" rel="noopener noreferrer">GitHub</a>
            </p>
          </div>

          <form action="#" method="POST" className="contact-form" noValidate>
            <fieldset>
              <legend>İletişim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  minLength={2}
                  aria-describedby="name-error"
                />
                <small id="name-error" className="error-msg" role="alert" aria-live="polite" />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  aria-describedby="email-error"
                />
                <small id="email-error" className="error-msg" role="alert" aria-live="polite" />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu</label>
                <select id="subject" name="subject" required aria-describedby="subject-error">
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert" aria-live="polite" />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  aria-describedby="message-error"
                />
                <small id="message-error" className="error-msg" role="alert" aria-live="polite" />
              </div>

              <button type="submit" className="submit-button">
                Gönder
              </button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2025 Muhammed Beşir Kesen. Tüm hakları saklıdır.</p>
      </footer>
    </>
  )
}
