import { Seta } from './Icones.jsx'
import { empresa } from '../data/empresa.js'
import { vantagens, servicos, stack } from '../data/conteudo.js'
import { projetos } from '../data/projetos.js'

// A faixa correndo usa a stack inteira, achatada numa lista so.
const tecnologias = stack.flatMap((g) => g.itens)

function Hero() {
  return (
    <section aria-labelledby="hero-titulo" className="relative overflow-hidden pt-28 md:pt-36">
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(50% 55% at 85% 20%, var(--glow), transparent 70%), radial-gradient(45% 50% at 0% 0%, rgb(15 35 64 / 0.9), transparent 70%)',
        }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 md:px-8 lg:grid-cols-[1.15fr_1fr] lg:pb-28">
        <div>
          <p data-reveal className="tag">&lt;/AguiarStin/&gt;</p>
          <h1
            id="hero-titulo"
            data-reveal
            style={{ '--delay': '80ms' }}
            className="mt-5 text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Tiramos sua empresa do <span className="text-gold">improviso.</span>
          </h1>
          <p
            data-reveal
            style={{ '--delay': '160ms' }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl"
          >
            {empresa.chamada}
          </p>
          <div data-reveal style={{ '--delay': '240ms' }} className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contato"
              data-evento="pedir_orcamento"
              data-local="hero"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 font-medium text-gold-ink transition-transform hover:-translate-y-0.5"
            >
              Pedir orçamento
              <Seta className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3.5 transition-colors hover:border-fg"
            >
              Ver projetos
            </a>
          </div>
          <dl
            data-reveal
            style={{ '--delay': '320ms' }}
            className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-6"
          >
            <div>
              <dt className="font-mono text-xs text-muted">projetos</dt>
              <dd className="mt-1 text-3xl font-bold">{projetos.length}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs text-muted">serviços</dt>
              <dd className="mt-1 text-3xl font-bold">{servicos.length}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs text-muted">base</dt>
              <dd className="mt-1 text-3xl font-bold">SC</dd>
            </div>
          </dl>
        </div>

        <div data-reveal style={{ '--delay': '200ms' }} className="relative">
          <div aria-hidden="true" className="absolute -inset-6 -z-10 rounded-[2rem] bg-gold/10 blur-3xl" />
          <div className="relative rounded-3xl border border-line-strong bg-card/90 p-6 shadow-2xl shadow-black/40 backdrop-blur md:p-8">
            <p className="tag">&lt;/Por que a AguiarStin/&gt;</p>
            <h2 className="mt-4 text-2xl font-bold leading-snug md:text-3xl">
              Enquanto o improviso segura, o cliente compra do concorrente.
            </h2>
            <ul className="mt-6 space-y-4">
              {vantagens.map((v) => (
                <li key={v.titulo} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-xs text-gold"
                  >
                    ✓
                  </span>
                  <p className="leading-relaxed text-muted">
                    <strong className="font-medium text-fg">{v.titulo}</strong> {v.texto}
                  </p>
                </li>
              ))}
            </ul>
            <a
              href="#contato"
              data-evento="pedir_orcamento"
              data-local="hero_card"
              className="group mt-8 flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 font-medium text-gold-ink transition-transform hover:-translate-y-0.5"
            >
              Quero sair do improviso
              <Seta className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Faixa correndo: a lista vai duplicada e a animacao anda -50%,
          entao o fim encosta no comeco sem salto. */}
      <div className="overflow-hidden border-y border-line bg-bg-2/60 py-4" aria-hidden="true">
        <div className="marquee flex w-max gap-10 pr-10">
          {[...tecnologias, ...tecnologias].map((t, i) => (
            <span key={i} className="flex items-center gap-10 font-mono text-sm text-muted">
              {t}
              <span className="text-gold">/&gt;</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
