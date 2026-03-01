import { useRouter } from 'next/router'
import Link from 'next/link'
import postsModule from '@/data/posts.json'
import SEO from '@/components/SEO'

const POSTS_PER_PAGE = 5
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
          <h1 className="text-5xl font-black leading-none tracking-tight uppercase font-display md:text-7xl text-ink">
            Actualidad Social Chile
          </h1>
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
            Dirección: Felipe Carvajal Brown
          </p>
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  const router = useRouter()
  const page = Number(router.query.page) || 1

  const startIndex = (page - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const paginatedPosts = posts.slice(startIndex, endIndex)
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)

  return (
    <div className="flex flex-col min-h-screen font-serif bg-white text-ink">
      <SEO />
      <Header />

      <main className="flex-1 w-full max-w-6xl px-4 py-10 mx-auto">
        <div className="flex items-baseline gap-3 pb-2 mb-6 border-b-2 border-ink">
          <h2 className="text-2xl font-bold tracking-tight uppercase font-display">
            Últimas Ediciones
          </h2>
          {page > 1 && (
            <span className="font-sans text-xs tracking-wider text-gray-500 uppercase">
              Página {page}
            </span>
          )}
        </div>

        <div className="divide-y divide-gray-200">
          {paginatedPosts.map((post) => (
            <article key={post.id} className="flex flex-col gap-2 py-8">
              <h3 className="text-3xl font-bold leading-tight font-display">
                <Link href={`/posts/${post.id}`} className="transition-colors hover:text-wsj-red">
                  {post.title}
                </Link>
              </h3>
              <p className="font-sans text-xs tracking-wider text-gray-500 uppercase">{post.date}</p>
              <p className="font-serif text-lg leading-relaxed text-gray-700 line-clamp-4">{post.excerpt}</p>
              <Link
                href={`/posts/${post.id}`}
                className="mt-1 font-sans text-xs font-semibold tracking-widest uppercase text-wsj-red hover:underline w-fit"
              >
                Continuar leyendo →
              </Link>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-6 pt-6 mt-12 border-t border-gray-200">
            {page > 1 && (
              <Link href={`/?page=${page - 1}`} className="font-sans text-xs tracking-wider uppercase text-wsj-red hover:underline">
                ← Anterior
              </Link>
            )}
            <span className="font-sans text-xs text-gray-500">
              Página {page} de {totalPages}
            </span>
            {page < totalPages && (
              <Link href={`/?page=${page + 1}`} className="font-sans text-xs tracking-wider uppercase text-wsj-red hover:underline">
                Siguiente →
              </Link>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}