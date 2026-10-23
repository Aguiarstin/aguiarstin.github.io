import { Seta } from './Icones.jsx'
import Logo, { Simbolo } from './Logo.jsx'
import { empresa } from '../data/empresa.js'

function Sobre() {
  return (
    <section aria-labelledby="sobre-titulo" id="sobre" className="overflow-hidden border-t border-line">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
        <div data-reveal className="relative">
          <div aria-hidden="true" className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gold/10 blur-3xl" />
          <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-3xl border border-line-strong bg-gradient-to-b from-navy to-bg-2">
            <div className="grid-bg absolute inset-0 opacity-50" aria-hidden="true" />
            <Simbolo className="relative w-3/5 drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)]" />
            <p className="absolute bottom-6 left-0 right-0 text-center text-xl md:text-2xl">
              <Logo />
            </p>
          </div>
        </div>

        <div>
          <p data-reveal className="tag">&lt;/A empresa/&gt;</p>
          <h2 id="sobre-titulo" data-reveal className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Dois sobrenomes, uma empresa.
          </h2>
          <p data-reveal style={{ '--delay': '80ms' }} className="mt-6 text-lg leading-relaxed text-muted">
            A AguiarStin nasceu da parceria entre Igor de Aguiar e Gabriel Dagostin Viana, dois desenvolvedores full stack de Içara, SC. O nome junta os dois: Aguiar, de um, e Stin, de Dagostin, do outro.
          </p>
          <p data-reveal style={{ '--delay': '140ms' }} className="mt-6 text-lg leading-relaxed text-muted">
            Antes da AguiarStin, a dupla já trabalhava junta: a loja online de uma agropecuária da região, um sistema de inventário por RFID, o cardápio digital de uma hamburgueria. Projeto a projeto, a parceria foi ficando séria, até virar empresa, com nome e logo próprios.
          </p>
          <p data-reveal style={{ '--delay': '200ms' }} className="mt-6 text-lg leading-relaxed text-muted">
            Hoje os dois tocam a AguiarStin lado a lado, do primeiro contato com o cliente até a entrega.
          </p>
          <p data-reveal className="mt-10 text-xl font-medium text-fg">
            <span className="text-gold">— </span>Igor de Aguiar &amp; Gabriel Dagostin Viana
            <span className="mt-1 block font-mono text-xs font-normal uppercase tracking-wider text-muted">fundadores</span>
          </p>
          <div data-reveal className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm uppercase tracking-wider">
            <a href={empresa.instagram} data-evento="contato_rede" data-rede="instagram" data-local="sobre" target="_blank" rel="noreferrer" className="alvo-toque inline-flex items-center gap-2 text-fg hover:text-gold">
              @aguiarstin <Seta />
            </a>
            <a href={empresa.linkedin} data-evento="contato_rede" data-rede="linkedin" data-local="sobre" target="_blank" rel="noreferrer" className="alvo-toque inline-flex items-center gap-2 text-fg hover:text-gold">
              LinkedIn <Seta />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sobre
