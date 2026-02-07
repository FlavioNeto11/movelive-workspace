# Instruções do Repositório para o GitHub Copilot (Move&Live)

Você é o Copilot trabalhando neste repositório. **Siga estas regras:**

## 1) Verdades do Produto (não negociar)
- Nome do projeto: **Move&Live**
- Slogan obrigatório: **“Levando vida até você”**
- Público: moradores de condomínios (inclui iniciantes e idosos).
- UX: **muito simples**, botões grandes, pouco texto e objetivo, **mobile-first**.
- Estilo: app premium fitness (Nike Training Club / Smart Fit / Apple Fitness). Minimalista e corporativo.

## 2) Textos obrigatórios (copiar exatamente)
- Objetivo (seção na Home):
  “Levar saúde e qualidade de vida para os moradores no conforto do seu condomínio de forma barata, autônoma e segura.”
- Como funciona (seção na Home):
  “Na próxima página você encontrará ícones com nomes de grupos musculares. Ao clicar, terá acesso a diversos vídeos com exercícios que você pode fazer aqui na sua academia.”
- Frase de impacto (Home):
  “Academias bem mantidas elevam significativamente a qualidade de vida e aumentam a valorização do condomínio.”
- Aviso padrão em cada exercício:
  “Treine com atenção, respeite seus limites e mantenha a postura correta.”
- Aviso na página Orientações:
  “Consulte um profissional de educação física se sentir dores ou desconfortos.”

## 3) Tecnologia alvo (prioridades)
- Frontend: **Next.js (App Router) + TypeScript + Tailwind**
- Acessibilidade: botões grandes, contraste, foco visível, labels, navegação por teclado.
- Performance: LCP bom, evitar libs pesadas, carregar vídeo sob demanda.
- SEO: metadata (title/description), semântica, headings coerentes.

> Importante: o repositório já vem com um MVP funcional em `apps/web`.
> Ao evoluir, **não quebre as rotas existentes**.

## 4) Arquitetura & organização (regras duras)
- Conteúdo deve passar por um **Content Provider** (adapter), para depois trocar de “in-memory” para CMS:
  - `src/lib/content/provider.ts` (interfaces)
  - `src/lib/content/inMemory.ts` (MVP)
  - Futuro: `cms.ts` (Payload/Strapi/Directus)
- Componentes compartilhados em `src/components/`.
- Páginas em `src/app/` (App Router).
- Nunca colocar texto “lorem ipsum” em páginas principais.

## 5) Checklist de pronto (Definition of Done)
- Build passa (`npm run build -w @movelive/web`)
- Lighthouse mobile sem erros críticos
- Layout responsivo em 360px de largura
- Textos obrigatórios presentes e corretos
- Sem regressão de navegação (Home → Exercícios → Grupamento → Vídeo)

## 6) Como trabalhar (modo agente)
- Antes de mudar grandes áreas, leia: `docs/requirements.md` e `docs/acceptance-criteria.md`.
- Faça mudanças pequenas e consistentes (como PRs).
- Se estiver em dúvida, proponha 2 opções e escolha a mais simples.

## 7) Páginas obrigatórias
- `/` Home
- `/exercicios` Biblioteca (8 grupamentos)
- `/exercicios/[grupo]` Lista de exercícios
- `/orientacoes` Conteúdo educativo
- `/treinos-prontos` + `/treinos-prontos/[nivel]`
- `/favoritos`
- `/contato`

## 8) CMS (planejamento)
O MVP usa dados locais. Em etapa futura, implementar CMS (coleções):
- Grupamentos musculares
- Exercícios
- Vídeos
- Orientações
- Treinos Prontos

O código deve facilitar essa troca sem reescrever UI.
