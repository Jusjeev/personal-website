import { createFileRoute } from '@tanstack/react-router'
import { marked } from 'marked'
import { allJobs, allEducations } from 'content-collections'
import { MapPin, Calendar, Download } from 'lucide-react'

export const Route = createFileRoute('/experiences')({
  component: Experiences,
})

function Experiences() {
  const jobs = [...allJobs].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
  )

  return (
    <div className="max-w-3xl mx-auto px-6 pt-16 pb-20">
      <div className="flex items-start justify-between gap-4 mb-14">
        <p
          className="text-xs font-medium text-accent uppercase tracking-widest"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Experience
        </p>
        <a
          href="/resume.pdf"
          download
          className="hidden sm:inline-flex shrink-0 items-center gap-2 px-4 py-2 border border-border text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition-colors"
        >
          <Download size={13} /> Download Resume
        </a>
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
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {job.jobTitle}
                  </h3>
                  <p className="text-base text-muted-foreground mt-0.5 flex items-center gap-3">
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
              {job.content && (
                <div
                  className="text-base text-muted-foreground leading-relaxed [&_ul]:list-disc [&_ul]:pl-4 [&_ul]:space-y-1 [&_li]:text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: marked(job.content) as string }}
                />
              )}
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
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {edu.school}
                  </h3>
                  <p className="text-base text-muted-foreground mt-0.5">{edu.summary}</p>
                </div>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground" style={{ fontFamily: 'var(--font-mono)' }}>
                  <Calendar size={11} />
                  {new Date(edu.startDate).getFullYear()}
                  {' — '}
                  {edu.endDate ? new Date(edu.endDate).getFullYear() : 'Present'}
                </span>
              </div>
              {edu.content && (
                <p className="text-base text-muted-foreground leading-relaxed mt-2">
                  {edu.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skills */}
      <section className="mb-14">
        <h2
          className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-8 pb-3 border-b border-border"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Technical Skills
        </h2>
        <div className="space-y-5">
          {[
            {
              category: 'Languages',
              skills: ['Python', 'C++', 'C', 'Java', 'JavaScript', 'TypeScript', 'OCaml', 'Verilog', 'MIPS Assembly'],
            },
            {
              category: 'Frameworks & Libraries',
              skills: ['FastAPI', 'React.js', 'REST APIs', 'SQLAlchemy', 'Pydantic', 'TanStack Query', 'Scikit-learn', 'Pandas'],
            },
            {
              category: 'Machine Learning / AI',
              skills: ['PyTorch', 'Hugging Face Transformers', 'LoRA/QLoRA', 'YOLO', 'OpenCV', 'MediaPipe'],
            },
            {
              category: 'Tools & Platforms',
              skills: ['Git', 'GitHub', 'Linux', 'Jupyter', 'Google Earth Engine', 'ROS', 'VS Code', 'Claude Code'],
            },
            {
              category: 'CS Concepts',
              skills: ['Object-oriented programming', 'Functional programming', 'Dynamic programming', 'TCP/UDP networking', 'Supervised learning', 'Deep learning', 'Databases'],
            },
          ].map(({ category, skills }) => (
            <div key={category}>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2" style={{ fontFamily: 'var(--font-mono)' }}>
                {category}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 bg-secondary text-secondary-foreground rounded-md"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
