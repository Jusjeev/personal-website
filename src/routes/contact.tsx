import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Send, Github, Linkedin, Mail, Twitter, CheckCircle } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    handle: '@alexchen-dev',
    href: 'https://github.com/alexchen-dev',
    icon: Github,
    description: 'See my open-source work',
  },
  {
    label: 'LinkedIn',
    handle: 'Alex Chen',
    href: 'https://linkedin.com/in/alexchen-dev',
    icon: Linkedin,
    description: 'Professional network',
  },
  {
    label: 'Email',
    handle: 'alex@alexchen.dev',
    href: 'mailto:alex@alexchen.dev',
    icon: Mail,
    description: 'Preferred for serious inquiries',
  },
  {
    label: 'Twitter / X',
    handle: '@alexchen_dev',
    href: 'https://x.com/alexchen_dev',
    icon: Twitter,
    description: 'Occasional tech thoughts',
  },
]

function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const formData = new FormData(form)
    fetch('/contact.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(
        formData as unknown as Record<string, string>,
      ).toString(),
    })
      .then(() => setSubmitted(true))
      .finally(() => setLoading(false))
  }

  return (
    <div className="max-w-5xl mx-auto px-6 pt-16 pb-20">
      <p
        className="text-xs font-medium text-accent uppercase tracking-widest mb-4"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        Let's talk
      </p>
      <h1
        className="text-4xl md:text-5xl font-bold text-foreground mb-3 leading-tight"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        Get in Touch
      </h1>
      <p className="text-base text-muted-foreground mb-14 max-w-lg">
        Whether it's a job opportunity, a project idea, or just a hello — I read every
        message and reply within a day or two.
      </p>

      <div className="grid md:grid-cols-[1fr_1.4fr] gap-12">
        {/* Social links */}
        <div>
          <h2
            className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-6"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Find me on
          </h2>
          <ul className="space-y-5">
            {SOCIAL_LINKS.map(({ label, handle, href, icon: Icon, description }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-3 -mx-3 rounded-lg hover:bg-secondary transition-colors"
                >
                  <span className="flex-shrink-0 w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground group-hover:text-accent group-hover:border-accent/40 transition-colors">
                    <Icon size={16} />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">{label}</p>
                    <p className="text-xs text-muted-foreground">{handle}</p>
                    <p className="text-xs text-muted-foreground/70 mt-0.5">{description}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact form */}
        <div>
          <h2
            className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-6"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Send a message
          </h2>

          {submitted ? (
            <div className="flex flex-col items-start gap-4 py-8">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <CheckCircle size={20} className="text-accent" />
              </div>
              <div>
                <p
                  className="text-lg font-semibold text-foreground mb-1"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Message sent!
                </p>
                <p className="text-sm text-muted-foreground">
                  Thanks for reaching out. I'll get back to you within 1–2 days.
                </p>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="text-sm text-accent hover:opacity-80 transition-opacity"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-foreground mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full px-3 py-2 text-sm bg-background border border-border rounded-md placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-shadow"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-foreground mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full px-3 py-2 text-sm bg-background border border-border rounded-md placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-shadow"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-foreground mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  className="w-full px-3 py-2 text-sm bg-background border border-border rounded-md placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-shadow"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-foreground mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me what's on your mind..."
                  className="w-full px-3 py-2 text-sm bg-background border border-border rounded-md placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-shadow resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-sm font-medium rounded-md hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {loading ? 'Sending…' : (
                  <>
                    Send Message <Send size={13} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
