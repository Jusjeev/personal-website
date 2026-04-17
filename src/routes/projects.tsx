import { createFileRoute } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { Github, ExternalLink } from 'lucide-react'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

function Projects() {
  const [featured, ...rest] = allProjects

  return (
    <div className="max-w-5xl mx-auto px-6 pt-16 pb-20">
      <p
        className="text-xs font-medium text-accent uppercase tracking-widest mb-4"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        Work
      </p>
      <h1
        className="text-4xl md:text-5xl font-bold text-foreground mb-3 leading-tight"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        Projects
      </h1>
      <p className="text-base text-muted-foreground mb-14 max-w-lg">
        A selection of things I've built — side projects, internship work, and academic
        projects that I'm proud of.
      </p>

      {/* Featured project */}
      {featured && (
        <div className="group mb-10 border border-border rounded-xl overflow-hidden hover:border-accent/40 transition-colors">
          {featured.image && (
            <div className="aspect-[21/9] overflow-hidden bg-secondary">
              <img
                src={`/.netlify/images?url=${encodeURIComponent(featured.image)}&w=1200&h=514&fit=cover&q=85`}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-[1.015] transition-transform duration-700"
              />
            </div>
          )}
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
              <h2
                className="text-2xl font-semibold text-foreground"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {featured.title}
              </h2>
              <span
                className="text-xs text-accent font-medium px-2 py-1 border border-accent/30 rounded"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Featured
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-2xl">
              {featured.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {featured.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 bg-secondary text-secondary-foreground rounded"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-5">
              {featured.github && (
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github size={14} /> GitHub
                </a>
              )}
              {featured.liveUrl && (
                <a
                  href={featured.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-accent hover:opacity-80 transition-opacity"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Rest of projects grid */}
      <div className="grid md:grid-cols-2 gap-5">
        {rest.map((project) => (
          <div
            key={project._meta.path}
            className="group border border-border rounded-xl overflow-hidden hover:border-accent/40 transition-colors flex flex-col"
          >
            {project.image && (
              <div className="aspect-[16/9] overflow-hidden bg-secondary">
                <img
                  src={`/.netlify/images?url=${encodeURIComponent(project.image)}&w=800&h=450&fit=cover&q=82`}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            )}
            <div className="p-5 flex flex-col flex-1">
              <h3
                className="text-lg font-semibold text-foreground mb-2"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
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
    </div>
  )
}
