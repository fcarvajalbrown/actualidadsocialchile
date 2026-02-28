import { useRouter } from 'next/router'
import Link from 'next/link'
import postsModule from '@/data/posts.json'

const POSTS_PER_PAGE = 5
const posts = Array.isArray(postsModule) ? postsModule : (postsModule.default ? postsModule.default : [])

function Header() {
  return (
    <header className="bg-white">
      {/* Top bar */}
      <div className="h-3 bg-ink"></div>

      {/* Masthead */}
      <div className="border-b-4 border-ink py-6">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-7xl font-black tracking-tight text-ink leading-none uppercase">
            Actualidad Social Chile
          </h1>
          <div className="flex items-center justify-center gap-4 mt-3">
            <div className="h-px flex-1 bg-gray-300 max-w-xs"></div>
            <p className="font-sans text-xs text-gray-500 italic tracking-widest uppercase">
              "Condensando el Cuarto Poder"
            </p>
            <div className="h-px flex-1 bg-gray-300 max-w-xs"></div>
          </div>
        </div>
      </div>

      {/* Section nav */}
      <div className="h-3 bg-ink"></div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-ink text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Footer masthead */}
        <div className="text-center border-b border-gray-700 pb-8 mb-8">
          <h2 className="font-display text-3xl font-black text-white uppercase tracking-tight">
            Actualidad Social Chile
          </h2>
          <p className="font-sans text-xs text-gray-500 italic mt-1 tracking-widest uppercase">
            "Condensando el Cuarto Poder"
          </p>
          <p className="font-serif text-sm text-gray-400 mt-4 max-w-xl mx-auto leading-relaxed">
            Medio informativo independiente comprometido con el periodismo crítico y la defensa de los derechos humano. Sin financiamiento corporativo, sin falsas neutralidades.
          </p>
        </div>

        {/* Footer columns */}
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

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="font-sans text-xs text-gray-600">
            © {new Date().getFullYear()} Actualidad Social Chile. Todos los derechos reservados.
          </p>
          <p className="font-sans text-xs text-gray-600 italic">
            Dirección: Alameda 63745, Santiago, Chile. Teléfono: +56 2 1234 5678. Correo: contacto@actualidadsocialchile.cl
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
    <div className="min-h-screen bg-white font-serif text-ink flex flex-col">
      <Header />

      <main className="flex-1 max-w-6xl mx-auto px-4 py-10 w-full">
        <div className="flex items-baseline gap-3 mb-6 border-b-2 border-ink pb-2">
          <h2 className="font-display text-2xl font-bold uppercase tracking-tight">
            Últimas Ediciones
          </h2>
          {page > 1 && (
            <span className="font-sans text-xs text-gray-500 uppercase tracking-wider">
              Página {page}
            </span>
          )}
        </div>

        <div className="divide-y divide-gray-200">
          {paginatedPosts.map((post) => (
            <article key={post.id} className="py-8 flex flex-col gap-2">
              <h3 className="font-display text-3xl font-bold leading-tight">
                <Link href={`/posts/${post.id}`} className="hover:text-wsj-red transition-colors">
                  {post.title}
                </Link>
              </h3>
              <p className="font-sans text-xs text-gray-500 uppercase tracking-wider">{post.date}</p>
              <p className="font-serif text-lg text-gray-700 leading-relaxed line-clamp-4">{post.excerpt}</p>
              <Link
                href={`/posts/${post.id}`}
                className="font-sans text-xs text-wsj-red font-semibold uppercase tracking-widest hover:underline mt-1 w-fit"
              >
                Continuar leyendo →
              </Link>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-6 mt-12 pt-6 border-t border-gray-200">
            {page > 1 && (
              <Link href={`/?page=${page - 1}`} className="font-sans text-xs text-wsj-red uppercase tracking-wider hover:underline">
                ← Anterior
              </Link>
            )}
            <span className="font-sans text-xs text-gray-500">
              Página {page} de {totalPages}
            </span>
            {page < totalPages && (
              <Link href={`/?page=${page + 1}`} className="font-sans text-xs text-wsj-red uppercase tracking-wider hover:underline">
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