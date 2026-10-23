/* Revelacao no scroll: mesma logica do site em Next.js. Marca com
   .is-visible todo elemento com data-reveal quando ele entra na tela.
   Fica em CSS + IntersectionObserver (e nao em Framer Motion) porque sao
   dezenas de elementos estaticos; o Framer fica so pro que tem estado,
   como o menu lateral. */

import { useEffect } from 'react'

export function useRevelar() {
  useEffect(() => {
    const elementos = document.querySelectorAll('[data-reveal]')

    if (!('IntersectionObserver' in window)) {
      elementos.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('is-visible')
            observador.unobserve(entrada.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0 },
    )

    elementos.forEach((el) => observador.observe(el))
    return () => observador.disconnect()
  }, [])
}
