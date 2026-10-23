/* Logo da AguiarStin: o "A" em quatro faixas (creme e dourado) + nome.
   Mesmo SVG do site em Next.js, sem arquivo de imagem. */

export function Simbolo({ className = 'h-[1.35em] w-auto' }) {
  return (
    <svg viewBox="70 52 320 338" className={className} aria-hidden="true">
      <path d="M230 60 77 382h36.5Z" fill="#f5f1e8" />
      <path d="M230 60 118.5 382H148Z" fill="#c79a56" />
      <path d="M230 60 341.5 382H312Z" fill="#c79a56" />
      <path d="M230 60 383 382h-36.5Z" fill="#f5f1e8" />
    </svg>
  )
}

function Logo({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2.5 font-bold uppercase tracking-tight ${className}`}>
      <Simbolo />
      <span>
        Aguiar<span className="text-gold">Stin</span>
      </span>
    </span>
  )
}

export default Logo
