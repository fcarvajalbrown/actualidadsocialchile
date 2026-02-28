import Link from 'next/link'
import posts from '@/data/posts.json'

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-serif text-gray-900">
      <header className="border-b border-gray-300 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center tracking-tight uppercase text-wsj-red">
            Actualidad Social Chile
          </h1>
          <p className="text-center text-sm text-gray-600 mt-1 italic">
            “Condensando la Voz del Cuarto Poder”
          </p>
          <div className="border-t border-gray-300 mt-4"></div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-10 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-8 border-b border-gray-300 pb-2 uppercase tracking-wide">
          Últimas ediciones
        </h2>
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.id} className="border-b border-gray-200 pb-6 last:border-b-0">
              <h3 className="text-3xl font-bold mb-2 leading-tight">
                <Link href={`/posts/${post.id}`} className="hover:underline hover:text-wsj-red transition-colors">
                  {post.title}
                </Link>
              </h3>
              <p className="text-gray-600 text-sm mb-3">{post.date}</p>
              <p className="text-gray-800 text-lg leading-relaxed mb-4">{post.excerpt}</p>
              <Link 
                href={`/posts/${post.id}`} 
                className="text-wsj-red font-medium hover:underline text-sm uppercase tracking-wider"
              >
                Continuar leyendo →
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}