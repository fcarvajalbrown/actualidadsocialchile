import Link from 'next/link'
import { useRouter } from 'next/router'
import postsModule from '@/data/posts.json'

const posts = Array.isArray(postsModule) ? postsModule : (postsModule.default ? postsModule.default : [])

function Header() {
  return (
    <header className="bg-white">
      <div className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
          <p className="font-sans text-xs text-gray-500 tracking-wide uppercase">
            Santiago, Chile
          </p>
          <nav className="hidden md:flex gap-6">
            {['Inicio', 'Política', 'Economía', 'Opinión'].map(item => (
              <Link key={item} href="/" className="font-sans text-xs text-gray-500 uppercase tracking-wider hover:text-wsj-red transition-colors">
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="border-b-4 border-ink py-6">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Link href="/">
            <h1 className="font-display text-5xl md:text-7xl font-black tracking-tight text-ink leading-none uppercase hover:text-wsj-red transition-colors">
              Actualidad Social Chile
            </h1>
          </Link>
          <div className="flex items-center justify-center gap-4 mt-3">
            <div className="h-px flex-1 bg-gray-300 max-w-xs"></div>
            <p className="font-sans text-xs text-gray-500 italic tracking-widest uppercase">
              "Condensando el Cuarto Poder"
            </p>
            <div className="h-px flex-1 bg-gray-300 max-w-xs"></div>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200 bg-ink">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex gap-6 overflow-x-auto">
            {['Última Hora', 'Nacional', 'Internacional', 'Economía', 'Sociedad', 'Cultura', 'Opinión'].map(item => (
              <a key={item} href="#" className="font-sans text-xs text-gray-300 uppercase tracking-wider py-3 whitespace-nowrap hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-ink text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center border-b border-gray-700 pb-8 mb-8">
          <h2 className="font-display text-3xl font-black text-white uppercase tracking-tight">
            Actualidad Social Chile
          </h2>
          <p className="font-sans text-xs text-gray-500 italic mt-1 tracking-widest uppercase">
            "Condensando el Cuarto Poder"
          </p>
          <p className="font-serif text-sm text-gray-400 mt-4 max-w-xl mx-auto leading-relaxed">
            Medio informativo independiente comprometido con el periodismo crítico y la defensa de los derechos del pueblo chileno. Sin financiamiento corporativo, sin falsas neutralidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8 mb-8">
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-gray-500 mb-3">Secciones</h4>
            <ul className="space-y-2">
              {['Última Hora', 'Nacional', 'Internacional', 'Economía', 'Sociedad', 'Opinión'].map(s => (
                <li key={s}>
                  <a href="#" className="font-serif text-sm text-gray-400 hover:text-white transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-gray-500 mb-3">Contacto</h4>
            <ul className="space-y-2 font-serif text-sm text-gray-400">
              <li>redaccion@actualidadsocialchile.cl</li>
              <li>contacto@actualidadsocialchile.cl</li>
              <li className="pt-2 text-gray-500">Santiago, Región Metropolitana</li>
              <li className="text-gray-500">Chile</li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-gray-500 mb-3">Nosotros</h4>
            <ul className="space-y-2">
              {['Quiénes somos', 'Política editorial', 'Colabora con nosotros', 'Aviso legal'].map(s => (
                <li key={s}>
                  <a href="#" className="font-serif text-sm text-gray-400 hover:text-white transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="font-sans text-xs text-gray-600">
            © {new Date().getFullYear()} Actualidad Social Chile. Todos los derechos reservados.
          </p>
          <p className="font-sans text-xs text-gray-600 italic">
            Dirección: Felipe Carvajal Brown
          </p>
        </div>
      </div>
    </footer>
  )
}

export default function Post() {
  const router = useRouter()
  const { id } = router.query
  const post = posts.find(p => p.id === id)

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center font-serif text-gray-500">
          Artículo no encontrado
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white font-serif text-ink flex flex-col">
      <Header />

      <main className="flex-1 max-w-2xl mx-auto px-4 py-12 w-full">
        {/* Breadcrumb */}
        <Link href="/" className="font-sans text-xs text-wsj-red uppercase tracking-widest hover:underline">
          ← Volver al inicio
        </Link>

        <article className="mt-6">
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4">{post.title}</h1>
          <div className="flex items-center gap-3 border-t border-b border-gray-200 py-3 mb-8">
            <p className="font-sans text-xs text-gray-500 uppercase tracking-wider">{post.date}</p>
            <span className="text-gray-300">|</span>
            <p className="font-sans text-xs text-gray-500 uppercase tracking-wider">Actualidad Social Chile</p>
          </div>

          <div className="space-y-5">
            {post.content.split('\n').filter(p => p.trim()).map((paragraph, i) => (
              <p key={i} className="font-serif text-lg text-gray-800 leading-relaxed text-justify">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="border-t border-gray-200 mt-12 pt-6 text-sm text-gray-400 italic font-serif">
            Actualidad Social Chile — Condensando el Cuarto Poder.
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}