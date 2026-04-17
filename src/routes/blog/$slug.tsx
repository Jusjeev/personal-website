import { createFileRoute, Link } from '@tanstack/react-router'
import { allBlogs } from 'content-collections'
import { marked } from 'marked'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Calendar } from 'lucide-react'

export const Route = createFileRoute('/blog/$slug')({
  component: BlogPost,
})

function BlogPost() {
  const { slug } = Route.useParams()
  const post = allBlogs.find((p) => p._meta.path === slug)

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1
            className="text-2xl font-bold text-foreground mb-3"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Post not found
          </h1>
          <Link to="/" className="text-sm text-accent hover:opacity-80">
            Back to home
          </Link>
        </div>
      </div>
    )
  }

  const html = marked(post.content)

  return (
    <div className="max-w-2xl mx-auto px-6 pt-12 pb-20">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
      >
        <ArrowLeft size={14} />
        Back
      </Link>

      <article>
        <header className="mb-10">
          <h1
            className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
            <Calendar size={13} />
            <time>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>·</span>
            <span>{post.author}</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        <div
          className="prose prose-sm max-w-none text-muted-foreground [&_h1]:text-foreground [&_h2]:text-foreground [&_h3]:text-foreground [&_strong]:text-foreground [&_code]:font-mono [&_code]:text-xs [&_code]:bg-secondary [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_pre]:bg-secondary [&_pre]:rounded-lg [&_pre]:p-4 [&_a]:text-accent [&_a]:no-underline hover:[&_a]:underline"
          dangerouslySetInnerHTML={{ __html: html as string }}
        />
      </article>
    </div>
  )
}
