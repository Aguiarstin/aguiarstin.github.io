/* =====================================================================
   Navbar.jsx - Cabecalho fixo + menu lateral (so no celular)
   ---------------------------------------------------------------------
   Desktop (md+): links no topo, igual ao site em Next.js.

   Celular: drawer lateral no mesmo modelo da Agrolino:
   - entra pela direita com mola (Framer Motion);
   - o CONTEUDO da pagina fica desfocado atras (vidro fosco), o menu nao;
   - itens entram em cascata;
   - cabecalho e rodape do drawer fixos, miolo com scroll proprio, pra
     nada ficar fora de alcance em celular baixo (iPhone SE).

   Diferenca da Agrolino: aqui NAO tem "Entrar" nem painel admin. O site
   da AguiarStin e institucional, nao tem login. O rodape do drawer leva
   o "Pedir orcamento" e os contatos no lugar.
   ===================================================================== */

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  ArrowRight,
  EnvelopeSimple,
  InstagramLogo,
  LinkedinLogo,
} from '@phosphor-icons/react'

import Logo from './Logo.jsx'
import { Menu } from './Icones.jsx'
import { empresa, itensMenu } from '../data/empresa.js'

function Navbar() {
  const [rolou, setRolou] = useState(false)
  const [menuAberto, setMenuAberto] = useState(false)

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 12)
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  // Trava o scroll da pagina com o menu aberto e fecha no Esc.
  useEffect(() => {
    if (!menuAberto) return
    document.body.style.overflow = 'hidden'
    const aoTeclar = (e) => e.key === 'Escape' && setMenuAberto(false)
    window.addEventListener('keydown', aoTeclar)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', aoTeclar)
    }
  }, [menuAberto])

  // Se girar o celular / abrir a janela ate o desktop com o menu aberto,
  // o drawer some (md:hidden) mas o scroll continuaria travado.
  useEffect(() => {
    const midia = window.matchMedia('(min-width: 768px)')
    const aoMudar = (e) => e.matches && setMenuAberto(false)
    midia.addEventListener('change', aoMudar)
    return () => midia.removeEventListener('change', aoMudar)
  }, [])

  const fecharMenu = () => setMenuAberto(false)

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
          rolou ? 'border-line bg-bg/80 backdrop-blur-xl' : 'border-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[4.5rem] md:px-8">
          <a href="#topo" className="alvo-toque text-lg md:text-xl" aria-label="AguiarStin, voltar ao topo">
            <Logo />
          </a>

          {/* ---- MENU DESKTOP ---- */}
          <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
            {itensMenu.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-fg"
              >
                {item.texto}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contato"
              data-evento="pedir_orcamento"
              data-local="topo"
              className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-gold-ink transition-transform hover:-translate-y-0.5 sm:inline-flex"
            >
              Pedir orçamento
            </a>
            <button
              type="button"
              onClick={() => setMenuAberto(true)}
              className="inline-flex size-10 items-center justify-center rounded-full border border-line-strong md:hidden"
              aria-expanded={menuAberto}
              aria-controls="menu-mobile"
              aria-label="Abrir menu"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {/* ================= DRAWER (celular) ================= */}
      <AnimatePresence>
        {menuAberto && (
          <>
            <motion.div
              key="fundo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={fecharMenu}
              className="fixed inset-0 z-[60] bg-bg/50 backdrop-blur-md md:hidden"
              aria-hidden="true"
            />

            <motion.aside
              key="painel"
              id="menu-mobile"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 30 }}
              className="fixed inset-y-0 right-0 z-[70] flex w-[min(84vw,340px)] flex-col border-l border-line-strong bg-bg-2/95 shadow-2xl shadow-black/50 backdrop-blur-2xl md:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
            >
              {/* Cabecalho fixo */}
              <div className="flex shrink-0 items-center justify-between border-b border-line px-5 py-4">
                <a href="#topo" onClick={fecharMenu} className="text-lg">
                  <Logo />
                </a>
                <button
                  type="button"
                  onClick={fecharMenu}
                  className="grid size-10 place-items-center rounded-full border border-line-strong transition-colors hover:bg-fg/5"
                  aria-label="Fechar menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Miolo com scroll interno */}
              <nav aria-label="Menu" className="flex-1 overflow-y-auto overscroll-contain px-5 pt-3">
                <ul className="flex flex-col">
                  {itensMenu.map((item, i) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.06 * i + 0.08, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="border-b border-line"
                    >
                      <a
                        href={item.href}
                        onClick={fecharMenu}
                        className="flex items-baseline gap-4 py-4 text-xl font-bold transition-colors hover:text-gold"
                      >
                        {/* Numeracao em mono: o mesmo sotaque de codigo
                            das tags </Secao/> do resto do site. */}
                        <span className="font-mono text-xs font-normal text-gold">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        {item.texto}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Rodape fixo: CTA + contatos sempre visiveis. */}
              <div className="shrink-0 border-t border-line bg-bg/60 px-5 pt-4 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
                <a
                  href="#contato"
                  data-evento="pedir_orcamento"
                  data-local="menu_celular"
                  onClick={fecharMenu}
                  className="flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3.5 font-medium text-gold-ink"
                >
                  Pedir orçamento <ArrowRight size={16} />
                </a>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <a
                    href={`mailto:${empresa.email}`}
                    data-evento="contato_rede"
                    data-rede="email"
                    data-local="menu_celular"
                    className="grid size-11 place-items-center rounded-full border border-line-strong text-muted transition-colors hover:text-fg"
                    aria-label="Enviar e-mail"
                  >
                    <EnvelopeSimple size={18} />
                  </a>
                  <a
                    href={empresa.instagram}
                    data-evento="contato_rede"
                    data-rede="instagram"
                    data-local="menu_celular"
                    target="_blank"
                    rel="noreferrer"
                    className="grid size-11 place-items-center rounded-full border border-line-strong text-muted transition-colors hover:text-fg"
                    aria-label="Instagram da AguiarStin"
                  >
                    <InstagramLogo size={18} />
                  </a>
                  <a
                    href={empresa.linkedin}
                    data-evento="contato_rede"
                    data-rede="linkedin"
                    data-local="menu_celular"
                    target="_blank"
                    rel="noreferrer"
                    className="grid size-11 place-items-center rounded-full border border-line-strong text-muted transition-colors hover:text-fg"
                    aria-label="LinkedIn da AguiarStin"
                  >
                    <LinkedinLogo size={18} />
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
