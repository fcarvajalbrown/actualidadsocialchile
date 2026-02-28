import Link from 'next/link'
import posts from '@/data/posts.json'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-red-600 text-white py-6 shadow-md">
        <h1 className="text-4xl font-bold text-center">Actualidad Social Chile</h1>
        <p className="text-center mt-2">Condensando la Voz del Cuarto Poder</p>
      </header>
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-6">Últimas noticias</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link href={`/posts/${post.id}`} className="text-red-600 hover:underline font-medium">
                  Leer más →
                </Link>
              </div>
              <div className="bg-gray-50 px-6 py-3 text-sm text-gray-500">
                Publicado el {post.date}
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}