/* =====================================================================
   AvisoCookies.jsx - Consentimento do Google Analytics (LGPD)
   ---------------------------------------------------------------------
   Card no canto inferior direito (no celular, largura toda embaixo).
   Aparece so se houver VITE_GA_ID e o visitante ainda nao escolheu.
   "Aceitar" liga o GA4 na hora; "Recusar" nao carrega nada. A escolha
   fica salva no navegador e o card nao volta.
   ===================================================================== */

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  analyticsAtivo,
  iniciarAnalytics,
  lerConsentimento,
  salvarConsentimento,
} from '../utils/analytics.js'

function AvisoCookies() {
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    if (!analyticsAtivo) return
    const escolha = lerConsentimento()
    if (escolha === 'aceito') iniciarAnalytics()
    // Atraso curto pra o card nao disputar atencao com o hero no
    // primeiro segundo da visita.
    else if (!escolha) {
      const espera = setTimeout(() => setVisivel(true), 1200)
      return () => clearTimeout(espera)
    }
  }, [])

  const escolher = (valor) => {
    salvarConsentimento(valor)
    if (valor === 'aceito') iniciarAnalytics()
    setVisivel(false)
  }

  return (
    <AnimatePresence>
      {visivel && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          role="dialog"
          aria-live="polite"
          aria-label="Aviso de cookies"
          className="fixed inset-x-4 bottom-4 z-[55] rounded-2xl border border-line-strong bg-card/95 p-5 shadow-2xl shadow-black/50 backdrop-blur-xl sm:inset-x-auto sm:right-6 sm:bottom-6 sm:w-[22rem]"
        >
          <p className="text-sm leading-relaxed text-muted">
            Usamos cookies do <span className="text-fg">Google Analytics</span> para entender as visitas e
            melhorar o site. Nada é usado para anúncios.
          </p>
          <div className="mt-4 flex gap-2">
            <button
              type="button"
              onClick={() => escolher('recusado')}
              className="flex-1 rounded-full border border-line-strong px-4 py-2.5 text-sm text-muted transition-colors hover:border-fg/40 hover:text-fg"
            >
              Recusar
            </button>
            <button
              type="button"
              onClick={() => escolher('aceito')}
              className="flex-1 rounded-full bg-gold px-4 py-2.5 text-sm font-medium text-gold-ink transition-transform hover:-translate-y-0.5"
            >
              Aceitar
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default AvisoCookies
