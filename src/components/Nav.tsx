import { Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { to: '/' as const, label: 'Home' },
  { to: '/about' as const, label: 'About' },
  { to: '/projects' as const, label: 'Projects' },
  { to: '/resume' as const, label: 'Resume' },
  { to: '/contact' as const, label: 'Contact' },
]

export function Nav() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const isDark =
      localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    setTheme(isDark ? 'dark' : 'light')
  }, [])

  function toggleTheme() {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    localStorage.setItem('theme', next)
    document.documentElement.classList.toggle('dark', next === 'dark')
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="text-base font-semibold tracking-tight text-foreground hover:text-accent transition-colors"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Alex Chen
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors [&.active]:text-foreground [&.active]:font-medium"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-1">
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-md hover:bg-secondary transition-colors text-muted-foreground"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1.5 rounded-md hover:bg-secondary transition-colors text-muted-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
