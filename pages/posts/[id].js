import Link from 'next/link'
import { useRouter } from 'next/router'
import postsModule from '@/data/posts.json'
import SEO from '@/components/SEO'

const SITE_URL = 'https://actualidadsocialchile.vercel.app'
const posts = Array.isArray(postsModule) ? postsModule : (postsModule.default ? postsModule.default : [])

function Header() {
  return (
    <header className="bg-white">
      <div className="border-b border-gray-200">
        <div className="flex items-center justify-between max-w-6xl px-4 py-2 mx-auto">
          <p className="font-sans text-xs tracking-wide text-gray-500 uppercase">
            Santiago, Chile
          </p>
          <nav className="hidden gap-6 md:flex">
            {['Inicio', 'Política', 'Economía', 'Opinión'].map(item => (
              <Link key={item} href="/" className="font-sans text-xs tracking-wider text-gray-500 uppercase transition-colors hover:text-wsj-red">
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="py-6 border-b-4 border-ink">
        <div className="max-w-6xl px-4 mx-auto text-center">
          <Link href="/">
            <h1 className="text-5xl font-black leading-none tracking-tight uppercase transition-colors font-display md:text-7xl text-ink hover:text-wsj-red">
              Actualidad Social Chile
            </h1>
          </Link>
          <div className="flex items-center justify-center gap-4 mt-3">
            <div className="flex-1 h-px max-w-xs bg-gray-300"></div>
            <p className="font-sans text-xs italic tracking-widest text-gray-500 uppercase">
              "Condensando el Cuarto Poder"
            </p>
            <div className="flex-1 h-px max-w-xs bg-gray-300"></div>
          </div>
        </div>
      </div>

      <div className="h-3 bg-ink"></div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="mt-16 text-gray-300 bg-ink">
      <div className="max-w-6xl px-4 py-12 mx-auto">
        <div className="pb-8 mb-8 text-center border-b border-gray-700">
          <h2 className="text-3xl font-black tracking-tight text-white uppercase font-display">
            Actualidad Social Chile
          </h2>
          <p className="mt-1 font-sans text-xs italic tracking-widest text-gray-500 uppercase">
            "Condensando el Cuarto Poder"
          </p>
          <p className="max-w-xl mx-auto mt-4 font-serif text-sm leading-relaxed text-gray-400">
            Medio informativo independiente comprometido con el periodismo crítico y la defensa de los derechos humanos. Sin financiamiento corporativo, sin falsas neutralidades.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 pb-8 mb-8 border-b border-gray-700 md:grid-cols-3">
          <div>
            <h4 className="mb-3 font-sans text-xs tracking-widest text-gray-500 uppercase">Secciones</h4>
            <ul className="space-y-2">
              {['Última Hora', 'Nacional', 'Internacional', 'Economía', 'Sociedad', 'Opinión'].map(s => (
                <li key={s}>
                  <a href="#" className="font-serif text-sm text-gray-400 transition-colors hover:text-white">{s}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-sans text-xs tracking-widest text-gray-500 uppercase">Contacto</h4>
            <ul className="space-y-2 font-serif text-sm text-gray-400">
              <li>redaccion@actualidadsocialchile.cl</li>
              <li>contacto@actualidadsocialchile.cl</li>
              <li className="pt-2 text-gray-500">Santiago, Región Metropolitana</li>
              <li className="text-gray-500">Chile</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-sans text-xs tracking-widest text-gray-500 uppercase">Nosotros</h4>
            <ul className="space-y-2">
              {['Quiénes somos', 'Política editorial', 'Colabora con nosotros', 'Aviso legal'].map(s => (
                <li key={s}>
                  <a href="#" className="font-serif text-sm text-gray-400 transition-colors hover:text-white">{s}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
          <p className="font-sans text-xs text-gray-600">
            © {new Date().getFullYear()} Actualidad Social Chile. Todos los derechos reservados.
          </p>
          <p className="font-sans text-xs italic text-gray-600">
            Dirección: XXXXXXX, Santiago, Chile. Teléfono: +56 2 1234 5678. Correo:
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
      <div className="flex flex-col min-h-screen">
        <SEO title="Artículo no encontrado" />
        <Header />
        <div className="flex items-center justify-center flex-1 font-serif text-gray-500">
          Artículo no encontrado
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen font-serif bg-white text-ink">
      <SEO
        title={post.title}
        description={post.excerpt}
        url={`${SITE_URL}/posts/${post.id}`}
      />
      <Header />

      <main className="flex-1 w-full max-w-2xl px-4 py-12 mx-auto">
        <Link href="/" className="font-sans text-xs tracking-widest uppercase text-wsj-red hover:underline">
          ← Volver al inicio
        </Link>

        <article className="mt-6">
          <h1 className="mb-4 text-4xl font-bold leading-tight font-display md:text-5xl">{post.title}</h1>
          <div className="flex items-center gap-3 py-3 mb-8 border-t border-b border-gray-200">
            <p className="font-sans text-xs tracking-wider text-gray-500 uppercase">{post.date}</p>
            <span className="text-gray-300">|</span>
            <p className="font-sans text-xs tracking-wider text-gray-500 uppercase">Actualidad Social Chile</p>
          </div>

          <div className="space-y-5">
            {post.content.split('\n').filter(p => p.trim()).map((paragraph, i) => (
              <p key={i} className="font-serif text-lg leading-relaxed text-justify text-gray-800">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="pt-6 mt-12 font-serif text-sm italic text-gray-400 border-t border-gray-200">
            Actualidad Social Chile — Condensando el Cuarto Poder.
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}