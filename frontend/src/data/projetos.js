/* =====================================================================
   projetos.js - Portfolio da AguiarStin
   ---------------------------------------------------------------------
   Os 11 projetos vieram do bundle do site em Next.js, com o mesmo texto.
   Mudancas desta versao:
   - Cafe To Go entrou como 12o projeto (categoria Sites).
   - Feiticeiros & Maldicoes ficou sem o link de codigo (pedido do Gabriel).
   - `destaque` marca os clientes reais: eles ganham card largo no
     mosaico. Antes todo card tinha o mesmo tamanho, e a grade uniforme
     era o que dava a cara de "gerado por IA".

   Projeto sem `imagem` vai para "Produtos e ferramentas" (card so texto).
   ===================================================================== */

export const categorias = [
  { id: 'todos', texto: 'Todos' },
  { id: 'site', texto: 'Sites' },
  { id: 'saas', texto: 'SaaS' },
  { id: 'sistema', texto: 'Sistemas' },
  { id: 'automacao', texto: 'Automação e IA' },
]

export const projetos = [
  {
    slug: 'agrolino',
    titulo: 'Agrolino',
    tipo: 'E-commerce · cliente real',
    categoria: 'site',
    problema: 'Uma agropecuária de Balneário Rincão/SC que só vendia no balcão e no boca a boca.',
    solucao: 'Loja online com vitrine por categoria, busca, área do cliente e painel admin. O carrinho monta o pedido pronto no WhatsApp.',
    tags: ['Next.js', 'TypeScript', 'FastAPI', 'PostgreSQL'],
    imagem: '/projects/agrolino.jpg',
    online: 'https://agrolino.vercel.app',
    codigo: 'https://github.com/IG1816/agrolino',
    destaque: true,
  },
  {
    slug: 'cafe-to-go',
    titulo: 'Café To Go',
    tipo: 'Cafeteria · cliente real',
    categoria: 'site',
    // REVISAR: problema escrito a partir do que o site entrega; confirmar
    // com o cliente se e assim que ele descreve a dor.
    problema: 'Uma cafeteria de Içara/SC sem cardápio online: o cliente perguntava no WhatsApp o que tinha e quanto custava.',
    solucao: 'Site com cardápio por categoria, carrinho, promoções e horário de funcionamento. O pedido sai pronto no WhatsApp.',
    tags: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
    imagem: '/projects/cafe-to-go.jpg',
    online: 'https://cafe-to-go.vercel.app',
    destaque: true,
  },
  {
    slug: 'beholder',
    titulo: 'Beholder Studios',
    tipo: 'Galeria de arte · freelance',
    categoria: 'site',
    problema: 'Um ateliê de esculturas pintadas à mão que queria mostrar as peças sem cara de loja.',
    solucao: 'Site-galeria com clima de museu, em três idiomas, preço pela cotação do dia e painel para o artista publicar peças pelo celular.',
    tags: ['JavaScript', 'Supabase', 'i18n', 'Vercel'],
    imagem: '/projects/beholder.jpg',
    online: 'https://studio-beholder.vercel.app',
    destaque: true,
  },
  {
    slug: 'burguerhouse',
    titulo: 'BurguerHouse',
    tipo: 'Cardápio online · delivery',
    categoria: 'sistema',
    problema: 'Hamburgueria que recebia pedido solto no WhatsApp, sem controle de estoque nem de cardápio.',
    solucao: 'Cardápio com carrinho, login de cliente, painel admin de produtos e estoque, e pedido enviado pronto pelo WhatsApp. API própria em FastAPI.',
    tags: ['Next.js', 'TypeScript', 'FastAPI', 'Docker'],
    imagem: '/projects/burguerhouse.jpg',
    destaque: true,
  },
  {
    slug: 'feiticeiros',
    titulo: 'Feiticeiros & Maldições',
    tipo: 'Web app · tempo real',
    categoria: 'sistema',
    problema: 'Um grupo de RPG de mesa jogando com ficha em papel e regras espalhadas em PDF.',
    solucao: 'Mesa online com criador de fichas, compêndio, combate tático em grid e multiplayer por WebSocket com rolagens compartilhadas.',
    tags: ['JavaScript', 'Node.js', 'WebSocket', 'three.js'],
    imagem: '/projects/feiticeiros.jpg',
    online: 'https://feiticeiros-e-maldicoes.vercel.app',
  },
  {
    slug: 'bfd',
    titulo: 'Plataforma de Projetos BFD',
    tipo: 'Plataforma · squad',
    categoria: 'sistema',
    problema: 'Um programa nacional que precisava ligar empresas com desafios a talentos em TIC.',
    solucao: 'Plataforma com painel do programa e status dos projetos, com liderança técnica da squad de frontend, backend e DevOps.',
    tags: ['FastAPI', 'Next.js', 'Supabase', 'Liderança técnica'],
    imagem: '/projects/bfd.jpg',
    online: 'https://teste-plataforma.vercel.app/',
  },
  {
    slug: 'landing-varejo',
    titulo: 'Página de Vendas · Varejo',
    tipo: 'Landing page · modelo',
    categoria: 'site',
    problema: 'Loja de bairro sem presença online, dependendo só de quem passa na frente.',
    solucao: 'Landing page premium com bento de categorias, carrossel de produtos, depoimentos e botão de WhatsApp. Trocar o cliente é editar um arquivo.',
    tags: ['React', 'Vite', 'TypeScript', 'Tailwind'],
    imagem: '/projects/landing-varejo.jpg',
  },
  {
    slug: 'landing-agro',
    titulo: 'Página de Vendas · Agropecuária',
    tipo: 'Landing page · com login',
    categoria: 'site',
    problema: 'Agropecuária que queria vender pela internet sem montar uma loja completa.',
    solucao: 'Página de vendas com login de clientes, favoritos, histórico de pedidos e painel da loja para atualizar o status de cada pedido.',
    tags: ['React', 'Vite', 'Supabase', 'Tailwind'],
    imagem: '/projects/landing-agro.jpg',
    codigo: 'https://github.com/IG1816/landing-agropecuaria',
  },
  {
    slug: 'fornoslot',
    titulo: 'FornoSlot',
    tipo: 'SaaS · padarias',
    categoria: 'saas',
    problema: 'Padarias perdendo encomenda por falta de controle de horário de retirada.',
    solucao: 'Agendamento de retirada com reserva por RPC no Postgres: dois clientes nunca pegam o último horário.',
    tags: ['Next.js', 'Supabase', 'RLS', 'Zod'],
    imagem: '/projects/fornoslot.jpg',
    codigo: 'https://github.com/IG1816/fornoslot',
  },
  {
    slug: 'inventag',
    titulo: 'InvenTag',
    tipo: 'SaaS · inventário RFID',
    categoria: 'saas',
    problema: 'Inventário de ativos feito na mão, com divergência descoberta só no fim do mês.',
    solucao: 'Leituras RFID, divergências entre esperado e lido, manutenção e relatórios, com tema de alto contraste para o chão de fábrica.',
    tags: ['React', 'Vite', 'Supabase', 'RLS'],
    imagem: '/projects/inventag.jpg',
    codigo: 'https://github.com/IG1816/inventag',
  },
  {
    slug: 'leadfinder',
    titulo: 'LeadFinder',
    tipo: 'Automação · prospecção',
    categoria: 'automacao',
    problema: 'Achar negócios locais sem site exigia horas de busca manual no mapa.',
    solucao: 'CLI que busca no OpenStreetMap e no Google Places, remove duplicados e entrega uma planilha de prospecção pronta.',
    tags: ['Python', 'Overpass API', 'openpyxl'],
    codigo: 'https://github.com/IG1816/leadfinder',
  },
  {
    slug: 'codice',
    titulo: 'Códice Amaldiçoado',
    tipo: 'IA · assistente especializado',
    categoria: 'automacao',
    problema: 'Regras de um RPG espalhadas em centenas de páginas, difíceis de consultar na hora do jogo.',
    solucao: 'Skill de IA para o Claude com referências por assunto, mestragem de combate e simulação de duelos em Python (20 mil lutas por cenário).',
    tags: ['Python', 'LLM', 'Claude'],
    codigo: 'https://github.com/IG1816/codice-amaldicoado',
  },
]
