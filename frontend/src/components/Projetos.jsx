/* =====================================================================
   Projetos.jsx - Filtro + mosaico do portfolio
   ---------------------------------------------------------------------
   Antes: grade de 3 colunas com 11 cards identicos (~650px cada). E o
   padrao que todo template gerado repete, por isso a "cara de IA".

   Agora (desktop, grade de 12 colunas), no espirito da grade do Cafe To
   Go, que alterna blocos largos e estreitos:
   - destaques (clientes reais) andam em pares 7+5, depois 5+7;
   - os demais em trios de 4+4+4, com card mais baixo;
   - quem sobrar sozinho na linha vira card horizontal de largura total,
     e dupla que sobra divide 6+6.
   O mosaico e recalculado a cada filtro, entao nenhuma combinacao deixa
   buraco na grade.

   Tablet: 2 colunas. Celular: carrossel deslizavel (ver abaixo).
   ===================================================================== */

import { useEffect, useMemo, useRef, useState } from 'react'
import Titulo from './Titulo.jsx'
import CardProjeto, { CardFerramenta } from './CardProjeto.jsx'
import { categorias, projetos } from '../data/projetos.js'

// Classes completas (e nao montadas com template string) porque o
// Tailwind so gera a classe que encontra escrita no codigo.
const colunas = {
  5: 'lg:col-span-5',
  6: 'lg:col-span-6',
  7: 'lg:col-span-7',
  4: 'lg:col-span-4',
  inteira: 'md:col-span-2 lg:col-span-12',
}

function montarMosaico(lista) {
  const destaques = lista.filter((p) => p.destaque)
  const demais = lista.filter((p) => !p.destaque)
  const blocos = []

  for (let i = 0; i < destaques.length; i += 2) {
    const par = destaques.slice(i, i + 2)
    if (par.length === 1) {
      blocos.push({ projeto: par[0], formato: 'horizontal', coluna: colunas.inteira })
      continue
    }
    // Alterna o lado largo a cada par: 7+5, 5+7...
    const [a, b] = (i / 2) % 2 === 0 ? [7, 5] : [5, 7]
    blocos.push({ projeto: par[0], formato: 'destaque', coluna: colunas[a] })
    blocos.push({ projeto: par[1], formato: 'destaque', coluna: colunas[b] })
  }

  for (let i = 0; i < demais.length; i += 3) {
    const trio = demais.slice(i, i + 3)
    if (trio.length === 1) {
      blocos.push({ projeto: trio[0], formato: 'horizontal', coluna: colunas.inteira })
      continue
    }
    const largura = trio.length === 3 ? 4 : 6
    trio.forEach((projeto) => blocos.push({ projeto, formato: 'padrao', coluna: colunas[largura] }))
  }

  return blocos
}

/* Celular (< md): o mosaico vira uma faixa que desliza com o dedo, um
   card por vez, com o proximo aparecendo pela metade pra mostrar que tem
   mais. Em lista vertical o catalogo ocupava ~7.500px, quase metade da
   pagina. E CSS puro (scroll-snap), sem biblioteca de carrossel: o dedo
   rola nativo e o navegador cuida da inercia. Os pontos so acompanham a
   posicao e servem de atalho. */
function useCarrossel(quantidade, filtro) {
  const trilho = useRef(null)
  const [atual, setAtual] = useState(0)

  // Card largo de um passo: largura do primeiro card + o gap da faixa.
  const passo = () => {
    const el = trilho.current
    const card = el?.firstElementChild
    if (!card) return 1
    return card.offsetWidth + parseFloat(getComputedStyle(el).columnGap || 0)
  }

  useEffect(() => {
    const el = trilho.current
    if (!el) return
    const aoRolar = () => {
      // O ultimo card nunca encosta no comeco da faixa (nao tem nada
      // depois dele), entao "chegou ao fim" conta como o ultimo.
      const noFim = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2
      setAtual(noFim ? quantidade - 1 : Math.min(quantidade - 1, Math.round(el.scrollLeft / passo())))
    }
    el.addEventListener('scroll', aoRolar, { passive: true })
    return () => el.removeEventListener('scroll', aoRolar)
  }, [quantidade])

  // Trocou o filtro: volta pro primeiro card.
  useEffect(() => {
    trilho.current?.scrollTo({ left: 0 })
    setAtual(0)
  }, [filtro])

  const irPara = (i) => trilho.current?.scrollTo({ left: i * passo(), behavior: 'smooth' })

  return { trilho, atual, irPara }
}

function Projetos() {
  const [filtro, setFiltro] = useState('todos')

  const contagem = useMemo(() => {
    const c = { todos: projetos.length }
    for (const p of projetos) c[p.categoria] = (c[p.categoria] || 0) + 1
    return c
  }, [])

  const filtrados = filtro === 'todos' ? projetos : projetos.filter((p) => p.categoria === filtro)
  const comPrint = filtrados.filter((p) => p.imagem)
  const ferramentas = filtrados.filter((p) => !p.imagem)
  const mosaico = montarMosaico(comPrint)
  const { trilho, atual, irPara } = useCarrossel(mosaico.length, filtro)

  return (
    <section aria-labelledby="projetos-titulo" id="projetos" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <Titulo
        tag="Projetos"
        id="projetos-titulo"
        apoio="Sites, sistemas e produtos feitos pela AguiarStin: de loja de bairro e agropecuária a SaaS e plataforma nacional."
      >
        O que a gente já colocou no ar.
      </Titulo>

      <div className="mt-12">
        {/* No celular os filtros rolam na horizontal em vez de quebrar em
            3 linhas de botao; o -mx/px deixa a rolagem ir ate a borda. */}
        <div
          role="group"
          aria-label="Filtrar projetos"
          className="sem-barra -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
        >
          {categorias.map((cat) => {
            const ativo = filtro === cat.id
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFiltro(cat.id)}
                aria-pressed={ativo}
                className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm transition-colors ${
                  ativo ? 'border-gold bg-gold text-gold-ink' : 'border-line-strong text-muted hover:text-fg'
                }`}
              >
                {cat.texto} <span className="font-mono text-xs opacity-70">{contagem[cat.id] || 0}</span>
              </button>
            )
          })}
        </div>

        {mosaico.length > 0 && (
          <>
            {/* Celular: faixa com scroll-snap (-mx/px pra deslizar ate a
                borda da tela). md+: volta a ser a grade do mosaico. */}
            <div
              ref={trilho}
              role="region"
              aria-roledescription="carrossel"
              aria-label="Projetos"
              className="sem-barra -mx-5 mt-8 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 md:mx-0 md:grid md:snap-none md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 lg:grid-cols-12"
            >
              {mosaico.map(({ projeto, formato, coluna }) => (
                <CardProjeto
                  key={projeto.slug}
                  projeto={projeto}
                  formato={formato}
                  className={`w-[85%] shrink-0 snap-start md:w-auto ${coluna}`}
                />
              ))}
            </div>

            {mosaico.length > 1 && (
              <div className="mt-4 flex items-center justify-center gap-1 md:hidden">
                {mosaico.map(({ projeto }, i) => (
                  <button
                    key={projeto.slug}
                    type="button"
                    onClick={() => irPara(i)}
                    aria-label={`Ver ${projeto.titulo}`}
                    aria-current={i === atual}
                    className="grid h-11 w-6 place-items-center"
                  >
                    <span
                      className={`block h-1.5 rounded-full transition-all duration-300 ${
                        i === atual ? 'w-4 bg-gold' : 'w-1.5 bg-line-strong'
                      }`}
                    />
                  </button>
                ))}
                <span className="ml-2 font-mono text-xs text-muted">
                  {atual + 1}/{mosaico.length}
                </span>
              </div>
            )}
          </>
        )}

        {ferramentas.length > 0 && (
          <div className={mosaico.length > 0 ? 'mt-16' : 'mt-8'}>
            {mosaico.length > 0 && (
              <h3 className="mb-6 flex items-center gap-4 font-mono text-sm text-muted">
                <span className="text-gold">&lt;/</span>
                Produtos e ferramentas
                <span aria-hidden="true" className="h-px flex-1 bg-line" />
              </h3>
            )}
            <div className="grid gap-5 md:grid-cols-2">
              {ferramentas.map((p) => (
                <CardFerramenta key={p.slug} projeto={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projetos
