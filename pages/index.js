import { useRouter } from 'next/router'
import Link from 'next/link'
import postsModule from '@/data/posts.json'

const POSTS_PER_PAGE = 5
const posts = Array.isArray(postsModule) ? postsModule : (postsModule.default ? postsModule.default : [])

export default function Home() {
  const router = useRouter()
  const page = Number(router.query.page) || 1

  const startIndex = (page - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const paginatedPosts = posts.slice(startIndex, endIndex)
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)

  return (
    <div className="min-h-screen bg-white font-serif text-gray-900">
      <header className="border-b border-gray-300 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center tracking-tight uppercase text-wsj-red">
            Actualidad Social Chile
          </h1>
          <p className="text-center text-sm text-gray-600 mt-1 italic">
            "Condensando el Cuarto Poder"
          </p>
          <div className="border-t border-gray-300 mt-4"></div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-10 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-8 border-b border-gray-300 pb-2 uppercase tracking-wide">
          Últimas ediciones {page > 1 && `- Página ${page}`}
        </h2>
        <div className="space-y-8">
          {paginatedPosts.map((post) => (
            <article key={post.id} className="border-b border-gray-200 pb-6 last:border-b-0">
              <h3 className="text-3xl font-bold mb-2 leading-tight">
                <Link href={`/posts/${post.id}`} className="hover:underline hover:text-wsj-red transition-colors">
                  {post.title}
                </Link>
              </h3>
              <p className="text-gray-600 text-sm mb-3">{post.date}</p>
              <p className="text-gray-800 text-lg leading-relaxed mb-4 line-clamp-4">{post.excerpt}</p>
              <Link
                href={`/posts/${post.id}`}
                className="text-wsj-red font-medium hover:underline text-sm uppercase tracking-wider"
              >
                Continuar leyendo →
              </Link>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-4 mt-12 pt-6 border-t border-gray-300">
            {page > 1 && (
              <Link href={`/?page=${page - 1}`} className="text-wsj-red hover:underline text-sm uppercase tracking-wider">
                ← Anterior
              </Link>
            )}
            <span className="text-gray-600 text-sm">
              Página {page} de {totalPages}
            </span>
            {page < totalPages && (
              <Link href={`/?page=${page + 1}`} className="text-wsj-red hover:underline text-sm uppercase tracking-wider">
                Siguiente →
              </Link>
            )}
          </div>
        )}
      </main>
    </div>
  )
}