import Logo from './Logo.jsx'
import { empresa } from '../data/empresa.js'

function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-8 text-sm text-muted md:flex-row md:items-center md:px-8">
        <Logo className="text-base text-fg" />
        <p>{empresa.local}</p>
        <p className="font-mono text-xs">© {empresa.nome}</p>
      </div>
    </footer>
  )
}

export default Footer
