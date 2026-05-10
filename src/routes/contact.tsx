import { createFileRoute } from '@tanstack/react-router'
import { Github, Linkedin, Mail } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    handle: '@jusjeev',
    href: 'https://github.com/Jusjeev',
    icon: Github,
    // description: 'See my open-source work',
  },
  {
    label: 'LinkedIn',
    handle: 'Jusjeev Singh',
    href: 'https://www.linkedin.com/in/jusjeev/',
    icon: Linkedin,
    // description: 'Professional network',
  },
  {
    label: 'Email',
    handle: 'singhjusjeev@gmail.com',
    href: 'mailto:singhjusjeev@gmail.com',
    icon: Mail,
    // description: 'Preferred for serious inquiries',
  },
]

function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-16 pb-20">
      <p
        className="text-xs font-medium text-accent uppercase tracking-widest mb-4"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        Contact
      </p>
      <p className="text-base text-muted-foreground mb-10 max-w-lg">
        Thank you for visiting my website and feel free to reach out if you would like to connect.
      </p>
      <ul className="space-y-6 max-w-sm">
        {SOCIAL_LINKS.map(({ label, handle, href, icon: Icon }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="group flex items-center gap-5 p-3 -mx-3 rounded-lg hover:bg-secondary transition-colors"
            >
              <span className="shrink-0 w-11 h-11 rounded-lg border border-border flex items-center justify-center text-muted-foreground group-hover:text-accent group-hover:border-accent/40 transition-colors">
                <Icon size={20} />
              </span>
              <div>
                <p className="text-base font-medium text-foreground">{label}</p>
                <p className="text-sm text-muted-foreground">{handle}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
