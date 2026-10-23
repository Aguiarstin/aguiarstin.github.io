/* =====================================================================
   analytics.js - Google Analytics 4 com consentimento (LGPD)
   ---------------------------------------------------------------------
   - O ID vem de VITE_GA_ID (.env / variaveis da Vercel). Sem ID, nada
     carrega e o aviso de cookies nem aparece: rodar local nao suja as
     metricas.
   - O script do Google so e baixado DEPOIS do "Aceitar". Quem recusa nao
     recebe cookie nenhum (por isso nao uso o Consent Mode, que carrega o
     gtag antes da escolha).
   - Eventos: um unico listener de clique le os atributos data-evento /
     data-* dos links. Assim os componentes so ganham atributos, sem
     import nem logica de analytics espalhada pelo codigo.
   ===================================================================== */

const ID = import.meta.env.VITE_GA_ID
const CHAVE = 'aguiarstin:cookies'

let carregado = false

export const analyticsAtivo = Boolean(ID)

// localStorage pode lancar erro (aba anonima, cookies bloqueados): ai a
// escolha so vale pra visita atual.
export function lerConsentimento() {
  try {
    return localStorage.getItem(CHAVE)
  } catch {
    return null
  }
}

export function salvarConsentimento(valor) {
  try {
    localStorage.setItem(CHAVE, valor)
  } catch {
    // sem persistencia; segue so nesta visita
  }
}

export function iniciarAnalytics() {
  if (!ID || carregado) return
  carregado = true

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  // gtag precisa empurrar o objeto `arguments`, nao um array: e assim
  // que o script do Google reconhece os comandos.
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', ID)

  document.addEventListener('click', aoClicar, { capture: true })
}

// Le <a data-evento="pedir_orcamento" data-local="hero"> e manda
// { local: 'hero' } como parametros do evento.
function aoClicar(e) {
  const alvo = e.target.closest('[data-evento]')
  if (!alvo || !window.gtag) return
  const { evento, ...parametros } = alvo.dataset
  window.gtag('event', evento, parametros)
}
