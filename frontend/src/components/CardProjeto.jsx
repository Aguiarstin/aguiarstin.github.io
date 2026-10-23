/* =====================================================================
   CardProjeto.jsx - Card do portfolio
   ---------------------------------------------------------------------
   Tres formatos, escolhidos pelo mosaico em Projetos.jsx:
   - 'destaque'   cliente real, card largo, print alto
   - 'padrao'     card compacto (print 16:9, menos respiro)
   - 'horizontal' card sozinho na linha: print de um lado, texto do
                  outro, pra nao virar uma faixa esticada e vazia

   O conteudo (problema / solucao / stack / links) e o mesmo do site
   original; o que muda e o tamanho e a proporcao de cada card.
   ===================================================================== */

import { ArrowUpRight, GithubLogo } from '@phosphor-icons/react'

function Links({ projeto }) {
  if (!projeto.online && !projeto.codigo) return null

  return (
    <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-5 text-sm">
      {projeto.online && (
        <a
          href={projeto.online}
          data-evento="abrir_projeto"
          data-projeto={projeto.titulo}
          data-destino="online"
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-[2.75rem] items-center gap-1.5 font-medium text-gold hover:underline sm:min-h-0"
        >
          Ver online <ArrowUpRight size={16} />
        </a>
      )}
      {projeto.codigo && (
        <a
          href={projeto.codigo}
          data-evento="abrir_projeto"
          data-projeto={projeto.titulo}
          data-destino="codigo"
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-[2.75rem] items-center gap-1.5 text-muted hover:text-fg sm:min-h-0"
        >
          <GithubLogo size={16} weight="fill" /> Código
        </a>
      )}
    </div>
  )
}

function Tags({ tags }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tecnologias">
      {tags.map((t) => (
        <li key={t} className="rounded-md bg-navy/60 px-2 py-1 font-mono text-[11px] text-muted">
          {t}
        </li>
      ))}
    </ul>
  )
}

function ProblemaSolucao({ projeto }) {
  return (
    <dl className="mt-3 space-y-3 text-sm leading-relaxed">
      <div>
        <dt className="font-mono text-xs text-muted/70">− problema</dt>
        <dd className="mt-1 text-muted">{projeto.problema}</dd>
      </div>
      <div>
        <dt className="font-mono text-xs text-gold">+ solução</dt>
        <dd className="mt-1 text-fg/90">{projeto.solucao}</dd>
      </div>
    </dl>
  )
}

const estiloImagem = {
  // No desktop o print do destaque cresce pra ocupar a altura da linha
  // (flex-1): os dois cards lado a lado terminam alinhados mesmo com
  // larguras e textos diferentes.
  destaque: 'aspect-[16/10] lg:aspect-auto lg:min-h-[15rem] lg:flex-1',
  // Altura fixa no desktop: em dupla (6+6) o card e mais largo, e com
  // proporcao fixa o print crescia junto e o card passava de 630px.
  padrao: 'aspect-[16/9] lg:aspect-auto lg:h-48',
  horizontal: 'aspect-[16/10] md:aspect-auto md:min-h-[17rem] md:w-1/2 md:shrink-0',
}

function CardProjeto({ projeto, formato = 'padrao', className = '' }) {
  const horizontal = formato === 'horizontal'
  const destaque = formato === 'destaque'

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-2xl border bg-card transition-colors ${
        destaque ? 'border-line-strong hover:border-gold/50' : 'border-line hover:border-line-strong'
      } ${horizontal ? 'md:flex-row' : ''} ${className}`}
    >
      <div
        className={`relative overflow-hidden border-line ${
          horizontal ? 'border-b md:border-b-0 md:border-r' : 'border-b'
        } ${estiloImagem[formato]}`}
      >
        <img
          src={projeto.imagem}
          alt={`Tela do projeto ${projeto.titulo}`}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 size-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>

      {/* Destaque: no desktop quem estica e o print, o texto fica do
          tamanho dele. Padrao: o texto estica, pra "Ver online" de cards
          vizinhos ficar na mesma altura. */}
      <div
        className={`flex flex-1 flex-col ${destaque ? 'p-5 sm:p-6 lg:flex-none' : 'p-5'} ${
          horizontal ? 'md:justify-center md:p-8' : ''
        }`}
      >
        <p className="tag">{projeto.tipo}</p>
        <h3 className={`mt-2 font-bold ${destaque || horizontal ? 'text-2xl' : 'text-xl'}`}>{projeto.titulo}</h3>
        <ProblemaSolucao projeto={projeto} />
        <Tags tags={projeto.tags} />
        <Links projeto={projeto} />
      </div>
    </article>
  )
}

// Card so texto: projetos sem print (CLI, skill de IA).
export function CardFerramenta({ projeto }) {
  return (
    <article className="flex flex-col rounded-2xl border border-line bg-card/60 p-6 transition-colors hover:border-line-strong">
      <p className="tag">{projeto.tipo}</p>
      <h3 className="mt-3 text-2xl font-bold">{projeto.titulo}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{projeto.problema}</p>
      <p className="mt-2 text-sm leading-relaxed text-fg/90">{projeto.solucao}</p>
      <Tags tags={projeto.tags} />
      <Links projeto={projeto} />
    </article>
  )
}

export default CardProjeto
