import { useState } from 'react'
import Titulo from './Titulo.jsx'
import { antesDepois } from '../data/conteudo.js'

// Painel em formato de diff: o botao escolhe qual lado fica aceso e o
// outro aparece riscado. Comeca no "depois", como no site original.
function AntesDepois() {
  const [lado, setLado] = useState('depois')

  const estiloLinha = (ativo, cor) =>
    ativo ? cor : 'text-muted/60 line-through decoration-muted/40'

  return (
    <section aria-labelledby="antes-titulo" className="border-y border-line bg-bg-2/50">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-[1fr_1.3fr] lg:items-center">
        <Titulo
          tag="Antes x Depois"
          id="antes-titulo"
          apoio="Muita empresa boa roda no improviso: papel, planilha e WhatsApp. Até o dia em que cresce e o improviso vira o gargalo."
        >
          Funciona? Funciona. <span className="text-gold">Mas não escala.</span>
        </Titulo>

        <div data-reveal style={{ '--delay': '120ms' }}>
          <div className="overflow-hidden rounded-2xl border border-line bg-card">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-4 py-3 md:px-6">
              <span className="font-mono text-xs text-muted">sua-empresa.diff</span>
              <div role="group" aria-label="Ver antes ou depois" className="flex rounded-full border border-line-strong p-1 font-mono text-xs">
                {['antes', 'depois'].map((op) => (
                  <button
                    key={op}
                    type="button"
                    onClick={() => setLado(op)}
                    aria-pressed={lado === op}
                    className={`alvo-toque rounded-full px-4 py-1.5 transition-colors ${
                      lado === op
                        ? op === 'antes'
                          ? 'bg-red/15 text-red'
                          : 'bg-green/15 text-green'
                        : 'text-muted hover:text-fg'
                    }`}
                  >
                    {op === 'antes' ? '− antes' : '+ depois'}
                  </button>
                ))}
              </div>
            </div>
            <ul className="divide-y divide-line">
              {antesDepois.map((item) => (
                <li key={item.antes} className="grid gap-1 px-4 py-4 font-mono text-sm md:px-6 md:text-[15px]">
                  <p className={`flex gap-3 rounded-md px-2 py-1.5 transition-all duration-300 ${estiloLinha(lado === 'antes', 'bg-red/10 text-red')}`}>
                    <span aria-hidden="true" className="select-none">−</span>
                    <span><span className="sr-only">Antes: </span>{item.antes}</span>
                  </p>
                  <p className={`flex gap-3 rounded-md px-2 py-1.5 transition-all duration-300 ${estiloLinha(lado === 'depois', 'bg-green/10 text-green')}`}>
                    <span aria-hidden="true" className="select-none">+</span>
                    <span><span className="sr-only">Depois: </span>{item.depois}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AntesDepois
