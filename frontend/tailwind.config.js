/* Paleta copiada do site em Next.js (o :root do CSS publicado), pra
   a reconstrucao em Vite ficar identica no visual. Cores em hex porque o
   Tailwind 3 aplica o modificador de opacidade (bg-gold/10) direto nelas. */

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a1729',
        'bg-2': '#0d1d33',
        navy: '#10233b',
        card: '#112640',
        line: '#f5f1e814',
        'line-strong': '#f5f1e82e',
        fg: '#f5f1e8',
        muted: '#a4abb6',
        gold: '#c79a56',
        'gold-ink': '#10233b',
        red: '#e59a8c',
        green: '#b9d3a4',
      },
      fontFamily: {
        sans: ['Ubuntu', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
