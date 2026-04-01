export default function About() {
  return (
    <section id="about" className="py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[220px_1fr] gap-8 items-start">
        <figure className="text-center">
          <img
            src="/profil.png"
            alt="Muhammed Beşir Kesen profil fotoğrafı"
            className="w-44 h-44 rounded-full object-cover mx-auto border-4 border-blue-200 dark:border-blue-900"
          />
          <figcaption className="mt-3 font-medium">Muhammed Beşir Kesen</figcaption>
        </figure>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Hakkımda</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Fırat Üniversitesi Yazılım Mühendisliği öğrencisiyim. Backend ve yapay zeka
            odaklı projelerde aktif geliştirici olarak yer alıyor, React + TypeScript ile modern
            arayüzler geliştiriyorum.
          </p>
        </div>
      </div>
    </section>
  )
}

