import { useRouter } from 'next/router'
import Link from 'next/link'
import posts from '@/data/posts.json'

export default function Post() {
  const router = useRouter()
  const { id } = router.query
  const post = posts.find(p => p.id === id)

  if (!post) {
    return <div className="text-center py-20">Artículo no encontrado</div>
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-red-600 text-white py-4 shadow-md">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-white hover:underline">← Volver al inicio</Link>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <article className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-500 mb-6">Publicado el {post.date}</p>
          <div className="prose prose-lg max-w-none">
            {post.content.split('\n').map((paragraph, i) => (
              <p key={i} className="mb-4">{paragraph}</p>
            ))}
          </div>
        </article>
      </main>
    </div>
  )
}