import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, MapPin, GraduationCap } from 'lucide-react'

export const Route = createFileRoute('/about')({
  component: About,
})

const GALLERY_ITEMS = [
  {
    seed: 'workspace73',
    caption: 'Home setup',
    w: 600, h: 400,
  },
  {
    seed: 'hackathon21',
    caption: 'Hackathon 2023',
    w: 600, h: 400,
  },
  {
    seed: 'conference55',
    caption: 'PyCon 2023',
    w: 600, h: 400,
  },
  {
    seed: 'team88',
    caption: 'Team offsite',
    w: 600, h: 400,
  },
  {
    seed: 'demo34',
    caption: 'Project demo day',
    w: 600, h: 400,
  },
  {
    seed: 'open67',
    caption: 'Open source sprint',
    w: 600, h: 400,
  },
]

const SKILLS_BY_CATEGORY = [
  {
    label: 'Languages',
    items: ['TypeScript', 'Python', 'Go', 'SQL', 'Bash'],
  },
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'TanStack Router', 'Tailwind CSS', 'Radix UI'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'FastAPI', 'Express', 'PostgreSQL', 'Redis'],
  },
  {
    label: 'Infrastructure',
    items: ['Docker', 'AWS (EC2/S3/RDS)', 'Netlify', 'GitHub Actions', 'Nginx'],
  },
]

function About() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      {/* Hero section */}
      <section className="pt-16 pb-14 md:pt-20">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-start">
          <div>
            <p
              className="text-xs font-medium text-accent uppercase tracking-widest mb-4"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              About
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-[1.1]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Hey, I'm Alex.
            </h1>
            <div className="space-y-4 text-base text-muted-foreground leading-relaxed max-w-xl">
              <p>
                I'm a full-stack developer based in San Francisco. I graduated from Pacific
                State University with a B.S. in Computer Science in 2023, and I've been
                building things for the web ever since.
              </p>
              <p>
                My sweet spot is the intersection of clean engineering and good design — I
                care as much about the developer experience of a codebase as I do about
                the user experience of an interface.
              </p>
              <p>
                Outside of work I contribute to open-source projects, write occasionally
                on this blog, and have a mild obsession with mechanical keyboards.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="text-accent" />
                San Francisco, CA
              </span>
              <span className="flex items-center gap-1.5">
                <GraduationCap size={13} className="text-accent" />
                Pacific State University, B.S. CS '23
              </span>
            </div>
            <div className="flex gap-3 mt-6">
              <Link
                to="/resume"
                className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background text-sm font-medium rounded-md hover:opacity-90 transition-opacity"
              >
                View Resume <ArrowRight size={13} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 border border-border text-foreground text-sm font-medium rounded-md hover:bg-secondary transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* Headshot */}
          <div className="hidden md:block">
            <div className="w-52 h-60 rounded-xl overflow-hidden border border-border shadow-sm">
              <img
                src="/.netlify/images?url=/headshot-on-white.jpg&w=416&h=480&fit=cover&q=90"
                alt="Alex Chen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Skills */}
      <section className="py-14">
        <h2
          className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-8"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Skills & Tools
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {SKILLS_BY_CATEGORY.map((cat) => (
            <div key={cat.label}>
              <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-3">
                {cat.label}
              </p>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Photo Gallery */}
      <section className="py-14">
        <h2
          className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-8"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.seed}
              className="group relative aspect-[3/2] overflow-hidden rounded-lg bg-secondary border border-border"
            >
              <img
                src={`/.netlify/images?url=${encodeURIComponent(`https://picsum.photos/seed/${item.seed}/${item.w}/${item.h}`)}&w=600&h=400&fit=cover&q=80`}
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-end">
                <span className="text-xs font-medium text-background translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 p-3">
                  {item.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
