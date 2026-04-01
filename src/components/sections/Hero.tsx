export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 px-4"
    >
      <div className="text-center max-w-2xl">
        <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">Merhaba, ben</p>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Muhammed Beşir Kesen
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
          Frontend Developer | React & TypeScript
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Projelerimi Gör
          </a>
          <a
            href="#contact"
            className="border border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
          >
            İletişime Geç
          </a>
        </div>
      </div>
    </section>
  )
}

