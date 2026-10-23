import Titulo from './Titulo.jsx'
import { stack } from '../data/conteudo.js'

function Stack() {
  return (
    <section aria-labelledby="stack-titulo" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-28">
        <Titulo tag="Stack" id="stack-titulo">
          A ferramenta certa pra cada projeto.
        </Titulo>

        <dl className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((g, i) => (
            <div key={g.grupo} data-reveal style={{ '--delay': `${i * 60}ms` }} className="border-t border-line pt-5">
              <dt className="font-mono text-xs uppercase tracking-wider text-muted">{g.grupo}</dt>
              <dd className="mt-3 flex flex-wrap gap-2">
                {g.itens.map((item) => (
                  <span key={item} className="rounded-full border border-line-strong px-3 py-1 text-sm">
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default Stack
