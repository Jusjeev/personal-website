import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, MapPin, GraduationCap } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: About,
})

function About() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <section className="pt-16 pb-14 md:pt-20">
        <div className="grid md:grid-cols-[auto_1fr] gap-12 items-start">
          {/* Headshot */}
          <div>
            <div className="w-56 h-80 rounded-xl overflow-hidden border border-border shadow-sm">
              <img
                src="/headshot.jpeg"
                alt="Jusjeev Singh"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <p
              className="text-xs font-medium text-accent uppercase tracking-widest mb-4"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              About
            </p>
            <h1
              className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-[1.1]"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Hi! I'm Jusjeev Singh.
            </h1>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed max-w-xl">
              <p>
                I completed my B.S. in Computer Science at the University of Illinois Urbana-Champaign and I'm currently working as a Forward Deployed Engineer at ChangeEngine, a startup in San Francisco, CA.
              </p>
              <p>
                Outside of work and study, I enjoy reading books and playing both tennis and soccer.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="text-accent" />
                San Francisco, CA
              </span>
              {/* <span className="flex items-center gap-1.5">
                <GraduationCap size={13} className="text-accent" />
                Pacific State University, B.S. CS '23
              </span> */}
            </div>
            <div className="flex gap-3 mt-6">
              <Link
                to="/experiences"
                className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background text-sm font-medium rounded-md hover:opacity-90 transition-opacity"
              >
                View Experience <ArrowRight size={13} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 border border-border text-foreground text-sm font-medium rounded-md hover:bg-secondary transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
