/* =====================================================================
   Contato.jsx - "Abra um chamado"
   ---------------------------------------------------------------------
   Sem backend: o formulario so monta o texto e abre o e-mail do cliente
   (mailto) ja preenchido, como no site original. Nada e enviado pelo
   site, entao nao ha dado pessoal guardado em lugar nenhum.
   ===================================================================== */

import { useState } from 'react'
import { Seta, Email, LogoGmail, LogoInstagram, LogoLinkedin } from './Icones.jsx'
import { empresa } from '../data/empresa.js'
import { necessidades } from '../data/conteudo.js'

function Contato() {
  const [marcadas, setMarcadas] = useState([])
  const [nome, setNome] = useState('')

  const alternar = (item) =>
    setMarcadas((atual) => (atual.includes(item) ? atual.filter((i) => i !== item) : [...atual, item]))

  const mensagem = [
    `Olá! Vim pelo site da ${empresa.nome}.`,
    nome.trim() && `Sou ${nome.trim()}.`,
    marcadas.length
      ? `Preciso de: ${marcadas.map((m) => m[0].toLowerCase() + m.slice(1)).join(', ')}.`
      : 'Quero conversar sobre um projeto.',
  ]
    .filter(Boolean)
    .join(' ')

  const assunto = `Chamado pelo site · ${nome.trim() || 'novo contato'}`
  const linkEmail = `mailto:${empresa.email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(mensagem)}`

  return (
    <section aria-labelledby="contato-titulo" id="contato" className="relative overflow-hidden border-t border-line">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: 'radial-gradient(60% 80% at 50% 100%, var(--glow), transparent 70%)' }}
      />
      <div className="mx-auto max-w-4xl px-5 py-28 text-center md:px-8 md:py-40">
        <p data-reveal className="tag">&lt;/Contato/&gt;</p>
        <h2
          id="contato-titulo"
          data-reveal
          className="mt-6 text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl"
        >
          Sua empresa hoje é{' '}
          <span className="text-muted/60 line-through decoration-gold/70 decoration-[0.08em]">ANTES</span> ou{' '}
          <span className="text-gold">DEPOIS</span>?
        </h2>
        <p data-reveal className="mx-auto mt-6 max-w-xl text-lg text-muted">
          Abra um chamado contando o que trava a sua operação. A gente responde com um diagnóstico e uma proposta clara.
        </p>

        <div data-reveal className="mx-auto mt-12 max-w-2xl text-left">
          <div className="relative rounded-3xl border border-line-strong bg-card/90 p-6 shadow-2xl shadow-black/40 backdrop-blur md:p-8">
            <div className="flex items-center gap-2.5">
              <span className="size-2 animate-pulse rounded-full bg-green" aria-hidden="true" />
              <p className="text-sm text-muted">Orçamento sem compromisso</p>
            </div>
            <h3 className="mt-4 text-2xl font-bold md:text-3xl">Abra um chamado</h3>
            <p className="mt-2 text-muted">Marque o que a sua empresa precisa. A gente responde com um diagnóstico.</p>

            <fieldset className="mt-6">
              <legend className="sr-only">O que a sua empresa precisa</legend>
              <div className="flex flex-wrap gap-2">
                {necessidades.map((item) => {
                  const ativo = marcadas.includes(item)
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => alternar(item)}
                      aria-pressed={ativo}
                      className={`rounded-full border px-3.5 py-2 text-sm transition-colors ${
                        ativo
                          ? 'border-gold bg-gold/15 text-fg'
                          : 'border-line-strong text-muted hover:border-fg/40 hover:text-fg'
                      }`}
                    >
                      {ativo && <span className="mr-1 text-gold">✓</span>}
                      {item}
                    </button>
                  )
                })}
              </div>
            </fieldset>

            <label className="mt-6 block">
              <span className="text-sm text-muted">Seu nome e empresa (opcional)</span>
              <input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Ex.: Ana, Padaria Pão Quente"
                className="mt-2 w-full rounded-xl border border-line-strong bg-bg/60 px-4 py-3 text-fg placeholder:text-muted/60"
              />
            </label>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              {/* Evento de conversao: manda so o que foi marcado. O nome
                  digitado e dado pessoal e nunca vai pro Google. */}
              <a
                href={linkEmail}
                data-evento="enviar_chamado"
                data-necessidades={marcadas.length ? marcadas.join(', ') : 'nenhuma'}
                className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 font-medium text-gold-ink transition-transform hover:-translate-y-0.5"
              >
                <Email /> Enviar por e-mail
                <Seta className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>

        <div data-reveal className="mt-10">
          <p className="font-mono text-xs uppercase tracking-wider text-muted">Meios de contato</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted">
            <a href={`mailto:${empresa.email}`} data-evento="contato_rede" data-rede="email" data-local="contato" className="alvo-toque inline-flex items-center gap-2.5 hover:text-fg">
              <LogoGmail /> {empresa.email}
            </a>
            <a href={empresa.instagram} data-evento="contato_rede" data-rede="instagram" data-local="contato" target="_blank" rel="noreferrer" className="alvo-toque inline-flex items-center gap-2.5 hover:text-fg">
              <LogoInstagram /> @aguiarstin
            </a>
            <a href={empresa.linkedin} data-evento="contato_rede" data-rede="linkedin" data-local="contato" target="_blank" rel="noreferrer" className="alvo-toque inline-flex items-center gap-2.5 hover:text-fg">
              <LogoLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contato
