import { createFileRoute } from '@tanstack/react-router'
import { marked } from 'marked'
import { allJobs, allEducations } from 'content-collections'
import { Badge } from '@/components/ui/badge'
import { MapPin, Calendar, Download } from 'lucide-react'

export const Route = createFileRoute('/resume')({
  component: Resume,
})

function Resume() {
  const jobs = [...allJobs].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
  )

  return (
    <div className="max-w-3xl mx-auto px-6 pt-16 pb-20">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-14">
        <div>
          <p
            className="text-xs font-medium text-accent uppercase tracking-widest mb-4"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Resume
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-foreground mb-2 leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Alex Chen
          </h1>
          <p className="text-base text-muted-foreground">Full-Stack Developer · San Francisco, CA</p>
        </div>
        <a
          href="/headshot-on-white.jpg"
          download
          className="hidden sm:inline-flex shrink-0 items-center gap-2 px-4 py-2 border border-border text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition-colors"
        >
          <Download size={13} /> Download CV
        </a>
      </div>

      {/* Summary */}
      <div className="flex gap-6 items-start mb-14">
        <img
          src="/.netlify/images?url=/headshot-on-white.jpg&w=200&h=240&fit=cover&q=90"
          alt="Alex Chen"
          className="hidden sm:block w-24 h-28 rounded-lg object-cover border border-border flex-shrink-0"
        />
        <div>
          <h2
            className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-3"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Summary
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Full-stack developer with a B.S. in Computer Science and experience across the
            whole product lifecycle — from TypeScript React frontends to Python backend
            services and ML pipelines. I care about writing code that's easy to reason
            about and systems that are reliable.
          </p>
        </div>
      </div>

      {/* Work Experience */}
      <section className="mb-14">
        <h2
          className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-8 pb-3 border-b border-border"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Work Experience
        </h2>
        <div className="space-y-10">
          {jobs.map((job) => (
            <div key={`${job.jobTitle}-${job.company}`}>
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <div>
                  <h3
                    className="text-lg font-semibold text-foreground"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {job.jobTitle}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5 flex items-center gap-3">
                    <span>{job.company}</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={11} />
                      {job.location}
                    </span>
                  </p>
                </div>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground" style={{ fontFamily: 'var(--font-mono)' }}>
                  <Calendar size={11} />
                  {new Date(job.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                  {' — '}
                  {job.endDate
                    ? new Date(job.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
                    : 'Present'}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {job.summary}
              </p>
              {job.content && (
                <div
                  className="text-sm text-muted-foreground leading-relaxed [&_ul]:list-disc [&_ul]:pl-4 [&_ul]:space-y-1 [&_li]:text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: marked(job.content) as string }}
                />
              )}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {job.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="text-xs font-normal"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-14">
        <h2
          className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-8 pb-3 border-b border-border"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Education
        </h2>
        <div className="space-y-8">
          {allEducations.map((edu) => (
            <div key={edu.school}>
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <div>
                  <h3
                    className="text-lg font-semibold text-foreground"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {edu.school}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{edu.summary}</p>
                </div>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground" style={{ fontFamily: 'var(--font-mono)' }}>
                  <Calendar size={11} />
                  {new Date(edu.startDate).getFullYear()}
                  {' — '}
                  {edu.endDate ? new Date(edu.endDate).getFullYear() : 'Present'}
                </span>
              </div>
              {edu.content && (
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  {edu.content}
                </p>
              )}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {edu.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="text-xs font-normal"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
