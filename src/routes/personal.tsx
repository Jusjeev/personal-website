import { createFileRoute } from '@tanstack/react-router'
import { BookOpen, Download } from 'lucide-react'

export const Route = createFileRoute('/personal')({
  component: Personal,
})

const PHOTOS = [
  { file: 'IMG_1950.jpeg' },
  { file: 'IMG_20190704_093721.jpg' },
  { file: 'IMG_1978.jpeg' },
  { file: 'IMG_20190710_160113.jpg' },
  { file: 'IMG_20190705_130929.jpg' },
  { file: 'IMG_1874.jpeg' },
]

function Personal() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-16 pb-20">
      <p
        className="text-xs font-medium text-accent uppercase tracking-widest mb-8"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        Personal
      </p>

      <ul className="space-y-6 max-w-sm mb-16">
        <li>
          <a
            href="https://www.goodreads.com/user/show/195711192-jusjeev"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 p-3 -mx-3 rounded-lg hover:bg-secondary transition-colors"
          >
            <span className="shrink-0 w-11 h-11 rounded-lg border border-border flex items-center justify-center text-muted-foreground group-hover:text-accent group-hover:border-accent/40 transition-colors">
              <BookOpen size={20} />
            </span>
            <div>
              <p className="text-base font-medium text-foreground">Goodreads</p>
              <p className="text-sm text-muted-foreground">@jusjeev</p>
              <p className="text-xs text-muted-foreground/70 mt-1">See what I am reading</p>
            </div>
          </a>
        </li>
      </ul>

      {/* Photo gallery */}
      <p
        className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-6"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        Photos
      </p>
      <div className="columns-2 gap-3">
        {PHOTOS.map(({ file }) => {
          const src = `/.netlify/images?url=${encodeURIComponent(`/gallery/${file}`)}&q=90`
          return (
            <div key={file} className="relative group mb-3 break-inside-avoid rounded-xl overflow-hidden border border-border">
              <img
                src={src}
                alt=""
                className="w-full h-auto block"
                loading="lazy"
              />
              <a
                href={`/gallery/${file}`}
                download={file}
                className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-lg bg-background/80 backdrop-blur-sm border border-border text-foreground hover:text-accent"
                title="Download original"
              >
                <Download size={14} />
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}
