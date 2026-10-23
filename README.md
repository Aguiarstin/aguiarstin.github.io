<p align="center">
  <img src="https://raw.githubusercontent.com/Aguiarstin/Aguiarstin/main/banner.png" alt="AguiarStin: sites, sistemas SaaS e soluções digitais sob medida" width="100%">
</p>

<h3 align="center">Site institucional da AguiarStin</h3>

<p align="center">
  <a href="https://aguiarstin.github.io"><img src="https://img.shields.io/badge/no_ar-aguiarstin.github.io-0F2340?style=for-the-badge&logo=githubpages&logoColor=F2A93B" alt="Site no ar"></a>
  <a href="https://github.com/Aguiarstin/aguiarstin.github.io/actions/workflows/deploy.yml"><img src="https://img.shields.io/github/actions/workflow/status/Aguiarstin/aguiarstin.github.io/deploy.yml?style=for-the-badge&label=deploy&labelColor=0F2340" alt="Status do deploy"></a>
</p>

<p align="center">
  <b><a href="https://aguiarstin.github.io">aguiarstin.github.io</a></b>
</p>

---

### `</O que tem no site/>`

- **Serviços, Antes x Depois, A empresa, Stack e Contato:** apresentação da AguiarStin e do que a gente faz.
- **Catálogo de projetos:** 12 projetos com filtro por categoria. No computador é um mosaico (clientes reais em destaque, os demais em cards menores); no celular vira um carrossel que desliza com o dedo.
- **Menu lateral no celular:** gaveta que entra pela direita, com o fundo desfocado e o "Pedir orçamento" sempre à mão.
- **Abra um chamado:** o visitante marca o que precisa e o site monta o e-mail pronto. Sem backend: nada é enviado nem guardado pelo site.
- **Google Analytics 4 com aviso de cookies (LGPD):** o script do Google só carrega depois do "Aceitar". Mede cliques em orçamento, envio de chamado, projetos abertos e redes sociais.

### `</Stack/>`

| | |
|---|---|
| **Base** | React 18 + Vite 5 |
| **Estilo** | Tailwind CSS 3 |
| **Animação** | Framer Motion 11 (menu e aviso de cookies) e CSS (revelação no scroll) |
| **Ícones** | `@phosphor-icons/react` e SVGs próprios |
| **Hospedagem** | GitHub Pages, com deploy pelo GitHub Actions |

### `</Estrutura/>`

```
frontend/
├── public/            ícone e prints dos projetos (public/projects)
├── src/
│   ├── components/    uma seção por arquivo (Hero, Servicos, Projetos...)
│   ├── data/          textos e dados: empresa, conteúdo das seções, projetos
│   ├── hooks/         useRevelar (animação de entrada no scroll)
│   └── utils/         analytics (GA4 + consentimento)
└── .env.example       variáveis de ambiente documentadas
```

Trocar um texto, um contato ou um projeto do catálogo é editar um arquivo em `src/data/`. Projeto novo no catálogo: adicionar em `src/data/projetos.js` e o print em `public/projects/`.

### `</Rodar localmente/>`

Precisa de Node.js 18 ou mais novo.

```bash
cd frontend
npm install
npm run dev
```

O site abre em `http://localhost:5173`. Sem `.env`, o Google Analytics fica desligado e o aviso de cookies não aparece, para os testes locais não contarem como visita.

| Comando | O que faz |
|---|---|
| `npm run dev` | servidor de desenvolvimento |
| `npm run build` | gera a versão de produção em `frontend/dist` |
| `npm run preview` | serve o `dist` localmente para conferir o build |

### `</Variáveis de ambiente/>`

| Variável | Para que serve |
|---|---|
| `VITE_GA_ID` | ID de medição do Google Analytics 4 (`G-...`). Vazio = analytics desligado. |

Localmente vai em `frontend/.env` (modelo em `frontend/.env.example`). Na publicação vem das variáveis do repositório: *Settings → Secrets and variables → Actions → Variables*.

### `</Deploy/>`

Todo push na `main` dispara o workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), que instala as dependências, faz o build de `frontend/` e publica no GitHub Pages. Também dá para rodar na mão em *Actions → Publicar no GitHub Pages → Run workflow*.

---

<p align="center">
  Feito por <b>Igor de Aguiar</b> &amp; <b>Gabriel Dagostin Viana</b> · Içara, SC
</p>

<p align="center">
  <a href="https://www.instagram.com/aguiarstin/"><img src="https://img.shields.io/badge/Instagram-@aguiarstin-0F2340?style=for-the-badge&logo=instagram&logoColor=F2A93B" alt="Instagram"></a>
  <a href="https://www.linkedin.com/company/aguiarstin"><img src="https://img.shields.io/badge/LinkedIn-AguiarStin-0F2340?style=for-the-badge&logo=linkedin&logoColor=F2A93B" alt="LinkedIn"></a>
  <a href="mailto:aguiarstin@gmail.com"><img src="https://img.shields.io/badge/E--mail-aguiarstin@gmail.com-0F2340?style=for-the-badge&logo=gmail&logoColor=F2A93B" alt="E-mail"></a>
</p>
