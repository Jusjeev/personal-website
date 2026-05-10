import { createFileRoute } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { Github, ExternalLink, Video, FileText } from 'lucide-react'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-16 pb-20">
      <p
        className="text-xs font-medium text-accent uppercase tracking-widest mb-14"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        Projects
      </p>

      <div className="grid md:grid-cols-2 gap-5">
        {allProjects.map((project) => (
          <div
            key={project._meta.path}
            className="group border border-border rounded-xl overflow-hidden hover:border-accent/40 transition-colors flex flex-col"
          >
            <div className="p-5 flex flex-col flex-1">
              <h3
                className="text-lg font-semibold text-foreground mb-2"
                style={{ fontFamily: 'var(--font-sans)' }}
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
              <div className="flex flex-wrap gap-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
                    <Github size={13} /> GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-accent hover:opacity-80 transition-opacity">
                    <ExternalLink size={13} /> Live Demo
                  </a>
                )}
                {project.videoUrl && (
                  <a href={project.videoUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-accent hover:opacity-80 transition-opacity">
                    <Video size={13} /> Final Video
                  </a>
                )}
                {project.reportUrl && (
                  <a href={project.reportUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-accent hover:opacity-80 transition-opacity">
                    <FileText size={13} /> Project Report
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
