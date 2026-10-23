import Titulo from './Titulo.jsx'
import { servicos } from '../data/conteudo.js'

// Icones de traco copiados do site em Next.js (SVG proprio, nao Phosphor),
// pra secao ficar identica a versao publicada.
const tracos = {
  globo: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </>
  ),
  nuvem: <path d="M7 18h10a4 4 0 0 0 .6-7.96A6 6 0 0 0 6.1 9.2 4.5 4.5 0 0 0 7 18Z" />,
  chave: (
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L3.6 17.2a1.9 1.9 0 0 0 2.7 2.7l5.7-5.7a4 4 0 0 0 5.2-5.4l-2.6 2.6-2.4-.6-.6-2.4 2.6-2.6Z" />
  ),
  tomada: <path d="M9 7V3M15 7V3M7 7h10v4a5 5 0 0 1-10 0V7ZM12 16v5" />,
}

function Servicos() {
  return (
    <section aria-labelledby="servicos-titulo" id="servicos" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <Titulo
        tag="O que a gente faz"
        id="servicos-titulo"
        apoio="A gente começa pelo problema, não pela tecnologia. Depois escolhe a ferramenta certa pra resolver."
      >
        Do site à operação inteira rodando num sistema.
      </Titulo>

      {/* Celular (< sm): card compacto, com o icone ao lado do titulo em
          vez de em cima. Empilhados em 1 coluna, os 4 cards com icone em
          cima ocupavam quase uma tela cada. Do sm pra cima e o layout
          original da versao publicada. */}
      <div className="mt-14 grid gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
        {servicos.map((s, i) => (
          <article
            key={s.titulo}
            data-reveal
            style={{ '--delay': `${i * 80}ms` }}
            className="group rounded-2xl border border-line bg-card p-5 transition-colors hover:border-gold/50 sm:p-6"
          >
            <div className="flex items-center gap-3 sm:block">
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-navy text-gold transition-transform group-hover:-translate-y-0.5 sm:size-11">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="size-5"
                >
                  {tracos[s.icone]}
                </svg>
              </span>
              <h3 className="text-lg font-bold sm:mt-6 sm:text-xl">{s.titulo}</h3>
            </div>
            {/* sm:text-[1rem] e nao sm:text-base: no Tailwind 3 o text-base
                tambem troca a altura de linha e anulava o leading-relaxed. */}
            <p className="mt-3 text-[15px] leading-relaxed text-muted sm:text-[1rem]">{s.texto}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Servicos
