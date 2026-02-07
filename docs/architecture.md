# Arquitetura (MVP → Evolução)

## MVP (agora)
- Next.js App Router
- Dados locais (in-memory) em `src/lib/content/inMemory.ts`
- UI consome apenas `ContentProvider` (interface)
- Favoritos: localStorage (sem login)

## Evolução 1 — CMS
Objetivo: permitir admin adicionar/editar exercícios, vídeos e orientações.

Recomendação de arquitetura:
- `ContentProvider` + `CmsProvider`
- UI não muda; apenas troca a implementação do provider
- Cache no servidor (revalidate) para performance

## Evolução 2 — Contas de usuário
- Login opcional (para sincronizar favoritos e checklist)
- Preferir auth simples + DB (Postgres) se necessário

## Evolução 3 — Analytics e A/B
- Medir cliques em grupamentos e exercícios
- Identificar exercícios mais acessados
