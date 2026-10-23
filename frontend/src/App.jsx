import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Servicos from './components/Servicos.jsx'
import AntesDepois from './components/AntesDepois.jsx'
import Projetos from './components/Projetos.jsx'
import Sobre from './components/Sobre.jsx'
import Stack from './components/Stack.jsx'
import Contato from './components/Contato.jsx'
import Footer from './components/Footer.jsx'
import AvisoCookies from './components/AvisoCookies.jsx'
import { useRevelar } from './hooks/useRevelar.js'

// Pagina unica com ancoras (#servicos, #projetos...), igual ao site em
// Next.js. Por isso nao tem react-router: nao ha rota pra trocar.
function App() {
  useRevelar()

  return (
    <>
      <Navbar />
      <main id="topo">
        <Hero />
        <Servicos />
        <AntesDepois />
        <Projetos />
        <Sobre />
        <Stack />
        <Contato />
      </main>
      <Footer />
      <AvisoCookies />
    </>
  )
}

export default App
