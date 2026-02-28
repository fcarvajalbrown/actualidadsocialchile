import { useRouter } from 'next/router'
import Link from 'next/link'
import postsModule from '@/data/posts.json'

const posts = Array.isArray(postsModule) ? postsModule : (postsModule.default ? postsModule.default : [])

export default function Post() {
  const router = useRouter()
  const { id } = router.query
  const post = posts.find(p => p.id === id)

  if (!post) {
    return <div className="text-center py-20 font-serif">Artículo no encontrado</div>
  }

  return (
    <div className="min-h-screen bg-white font-serif text-gray-900">
      <header className="border-b border-gray-300 py-4">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-wsj-red hover:underline text-sm uppercase tracking-wider">
            ← Volver al inicio
          </Link>
          <div className="border-t border-gray-300 mt-4"></div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-10 max-w-2xl">
        <article>
          <h1 className="text-4xl font-bold mb-3 leading-tight">{post.title}</h1>
          <p className="text-gray-600 text-sm mb-6">{post.date}</p>
          <div className="prose prose-lg prose-slate prose-headings:font-serif prose-p:font-serif prose-p:text-gray-800 max-w-none">
            {post.content.split('\n').map((paragraph, i) => (
              <p key={i} className="mb-5 text-justify">{paragraph}</p>
            ))}
          </div>
          <div className="border-t border-gray-300 mt-10 pt-6 text-sm text-gray-500 italic">
            Actualidad Social Chile — Condensando el Cuarto Poder.
          </div>
        </article>
      </main>
    </div>
  )
}