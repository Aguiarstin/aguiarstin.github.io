/* =====================================================================
   conteudo.js - Textos fixos das secoes (servicos, antes x depois,
   stack, opcoes do chamado). Mesmo texto do site em Next.js.
   ===================================================================== */

export const vantagens = [
  { titulo: 'Do tamanho da sua empresa.', texto: 'Proposta clara, sem letra miúda e sem pagar por recurso que você não vai usar.' },
  { titulo: 'Direto com quem desenvolve.', texto: 'Sem atendente no meio e sem telefone sem fio.' },
  { titulo: 'Você acompanha tudo.', texto: 'Entregas por etapas: você vê o projeto andando e aprova antes de seguir.' },
  { titulo: 'A gente não some depois.', texto: 'Publicamos, treinamos sua equipe e seguimos dando suporte.' },
]

// `icone` aponta pro SVG original em Servicos.jsx.
export const servicos = [
  { icone: 'globo', titulo: 'Sites', texto: 'Site institucional, landing page e loja virtual. Rápidos, fáceis de achar no Google e prontos pro celular.' },
  { icone: 'nuvem', titulo: 'Sistemas SaaS', texto: 'Produtos na nuvem com login, planos e painel, do MVP até a escala.' },
  { icone: 'chave', titulo: 'Sistemas sob medida', texto: 'Gestão, agendamento, estoque, CRM: o sistema que a sua operação pede, não o contrário.' },
  { icone: 'tomada', titulo: 'Integrações e automações', texto: 'WhatsApp, pagamentos, ERPs e planilhas conversando entre si, sem copia e cola.' },
]

export const antesDepois = [
  { antes: 'Cliente liga perguntando se a empresa existe mesmo', depois: 'Site profissional que passa confiança antes do primeiro contato' },
  { antes: 'Venda indo pro concorrente que aparece primeiro no Google', depois: 'Presença digital que coloca você na frente' },
  { antes: 'Atendimento travado no improviso do WhatsApp', depois: 'Processos organizados num sistema feito pra escalar' },
  { antes: 'Pedido anotado em papel e planilha que ninguém atualiza', depois: 'Pedidos, estoque e clientes num painel só, em tempo real' },
]

export const stack = [
  { grupo: 'Front-end', itens: ['HTML e CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Tailwind CSS'] },
  { grupo: 'Back-end', itens: ['Node.js', 'Python', 'FastAPI', 'PHP', 'Laravel', 'Java', 'C#'] },
  { grupo: 'Mobile', itens: ['React Native', 'Flutter'] },
  { grupo: 'Dados', itens: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase', 'Firebase'] },
  { grupo: 'Cloud e DevOps', itens: ['Vercel', 'AWS', 'Docker', 'Git', 'GitHub Actions'] },
  { grupo: 'Integrações', itens: ['WhatsApp API', 'Stripe', 'Mercado Pago', 'IA e LLMs'] },
]

export const necessidades = [
  'Um site para a empresa',
  'Vender pela internet',
  'Organizar pedidos e estoque',
  'Automatizar o WhatsApp',
  'Um sistema sob medida',
  'Ainda não sei, quero conversar',
]
