# Move&Live — Workspace de Construção com GitHub Copilot (VS Code)

Este repositório foi organizado para **guiar o GitHub Copilot** (e você) a construir o Move&Live como um produto premium:
uma biblioteca de treinos em vídeo para moradores de condomínio.

## Como usar (rápido)

1. Abra o arquivo **`MoveLive.code-workspace`** no VS Code
2. Instale as extensões recomendadas (Copilot, ESLint, Prettier, Tailwind)
3. No terminal (na raiz), rode:

   ```bash
   npm install
   npm run dev -w @movelive/web
   ```

> Recomendado: Node LTS + npm com suporte a workspaces.

4. (Opcional) Pelo VS Code, use o task **`root: setup`** para instalar dependências.

5. Acesse: http://localhost:3000

## CMS/Admin (Fase B — opcional)

- Admin: http://localhost:3000/admin
- Para usar conteúdo do CMS, defina `MOVELIVE_CONTENT_SOURCE=cms` antes de rodar.
- Os dados ficam em `apps/web/src/content/*.json`.
- Para edição local com Decap, rode: `npx decap-server`.

## Como “mandar” o Copilot construir

- Leia (uma vez) o arquivo:
  - `.github/copilot-instructions.md` ✅ (regras duras e arquitetura)
- Depois siga o **roteiro**:
  - `docs/copilot-runbook.md`

## Estrutura

- `apps/web/` — Frontend (Next.js + Tailwind) com páginas principais e conteúdo exemplo
- `docs/` — Requisitos, UX, modelo de dados, critérios de aceite, backlog
- `agents/` — “papéis” (prompts) para Copilot atuar como arquitetos/PM/QA/DevOps
- `prompts/` — prompts prontos para copiar/colar no Copilot Chat

## Objetivo do produto

“Levar saúde e qualidade de vida para os moradores no conforto do seu condomínio de forma barata, autônoma e segura.”

---

**Slogan obrigatório:** Levando vida até você
