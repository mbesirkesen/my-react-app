import './App.css'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <header className="site-header">
        <h1 className="site-title">Muhammed Beşir Kesen</h1>
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
      </header>

      <main id="main-content">
        <section id="hakkimda" className="section">
          <h2>Hakkımda</h2>

          <figure className="profile-figure">
            <img
              src="/profil.jpg"
              alt="Muhammed Beşir Kesen'in profil fotoğrafı"
              className="profile-image"
            />
            <figcaption>Muhammed Beşir Kesen</figcaption>
          </figure>

          <p>
            Yazılım Mühendisliği öğrencisiyim. Web geliştirme, IoT ve backend
            teknolojileriyle ilgileniyorum.
          </p>

          <h3>Kullandığım Teknolojiler</h3>
          <ul className="tech-list">
            <li>HTML5 &amp; CSS3</li>
            <li>JavaScript &amp; TypeScript</li>
            <li>React</li>
            <li>Node.js</li>
          </ul>
        </section>

        <section id="projeler" className="section">
          <h2>Projelerim</h2>

          <article className="project-card">
            <h3>Web Tasarımı ve Programlama LAB-1</h3>
            <p>Vite, React ve TypeScript kullanarak oluşturduğum ilk web projesi.</p>
            <p className="project-tech">Teknolojiler: React, TypeScript, Vite</p>
          </article>

          <article className="project-card">
            <h3>IoT Sensör İzleme Uygulaması</h3>
            <p>Raspberry Pi ve FastAPI kullanarak sensör verilerini web arayüzünde görüntüleyen sistem.</p>
            <p className="project-tech">Teknolojiler: Python, FastAPI, WebSockets</p>
          </article>
        </section>

        <section id="iletisim" className="section">
          <h2>İletişim</h2>

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
                <small
                  id="name-error"
                  className="error-msg"
                  role="alert"
                  aria-live="polite"
                />
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
                <small
                  id="email-error"
                  className="error-msg"
                  role="alert"
                  aria-live="polite"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  aria-describedby="subject-error"
                >
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
                <small
                  id="subject-error"
                  className="error-msg"
                  role="alert"
                  aria-live="polite"
                />
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
                <small
                  id="message-error"
                  className="error-msg"
                  role="alert"
                  aria-live="polite"
                />
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

export default App
