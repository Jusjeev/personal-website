import { createFileRoute, Link } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { ArrowRight, Github, ExternalLink } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

const SKILLS = [
  { category: 'Languages', items: ['TypeScript', 'Python', 'Go', 'SQL'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'TanStack', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'FastAPI', 'PostgreSQL', 'Redis'] },
  { category: 'Tooling', items: ['Docker', 'Git', 'AWS', 'Figma'] },
]

function Home() {
  const featured = allProjects.slice(0, 2)

  return (
    <div className="max-w-5xl mx-auto px-6">
      {/* Hero */}
      <section className="pt-20 pb-20 md:pt-28 md:pb-28">
        <div className="animate-fade-up">
          <p className="text-sm font-medium text-accent mb-4 tracking-wide uppercase" style={{ fontFamily: 'var(--font-mono)' }}>
            Available for opportunities
          </p>
        </div>
        <h1
          className="animate-fade-up-delay-1 text-5xl md:text-7xl font-bold leading-[1.08] tracking-tight text-foreground mb-6"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Alex Chen
        </h1>
        <p className="animate-fade-up-delay-2 text-xl md:text-2xl text-muted-foreground mb-3 font-light max-w-lg">
          Full-Stack Developer
        </p>
        <p className="animate-fade-up-delay-3 text-base text-muted-foreground max-w-xl leading-relaxed mb-10">
          CS graduate building thoughtful software for the web. I care about clean code,
          good UX, and shipping things that actually work.
        </p>
        <div className="animate-fade-up-delay-4 flex flex-wrap gap-3">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-sm font-medium rounded-md hover:opacity-90 transition-opacity"
          >
            View Projects <ArrowRight size={14} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground text-sm font-medium rounded-md hover:bg-secondary transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Skills */}
      <section className="py-16">
        <h2
          className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-8"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Tech Stack
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {SKILLS.map((group) => (
            <div key={group.category}>
              <p className="text-xs font-semibold text-accent mb-3 uppercase tracking-wide">
                {group.category}
              </p>
              <ul className="space-y-1.5">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Featured Projects */}
      <section className="py-16">
        <div className="flex items-center justify-between mb-8">
          <h2
            className="text-xs font-medium text-muted-foreground uppercase tracking-widest"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Featured Projects
          </h2>
          <Link
            to="/projects"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
          >
            All projects <ArrowRight size={13} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {featured.map((project) => (
            <div
              key={project._meta.path}
              className="group border border-border rounded-lg overflow-hidden hover:border-accent/40 transition-colors"
            >
              {project.image && (
                <div className="aspect-[16/9] overflow-hidden bg-secondary">
                  <img
                    src={`/.netlify/images?url=${encodeURIComponent(project.image)}&w=800&h=450&fit=cover&q=85`}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-5">
                <h3
                  className="text-lg font-semibold text-foreground mb-2"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 bg-secondary text-secondary-foreground rounded"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github size={13} /> GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-accent hover:opacity-80 transition-opacity"
                    >
                      <ExternalLink size={13} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* CTA strip */}
      <section className="py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2
            className="text-2xl font-semibold text-foreground mb-1"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Open to new roles
          </h2>
          <p className="text-sm text-muted-foreground">
            Looking for full-stack or frontend engineering positions.
          </p>
        </div>
        <Link
          to="/contact"
          className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground text-sm font-medium rounded-md hover:opacity-90 transition-opacity"
        >
          Say hello <ArrowRight size={14} />
        </Link>
      </section>
    </div>
  )
}
