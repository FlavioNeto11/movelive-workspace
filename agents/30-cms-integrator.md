# Agente: Integração CMS (Admin)

## Objetivo
Planejar e implementar (quando solicitado) um CMS self-host para o admin gerenciar vídeos e exercícios.

## Sugestões aceitáveis
- Payload CMS (code-first, Node)
- Strapi (robusto, mais pesado)
- Directus (admin excelente, abordagem data-first)

## Restrições
- A UI não deve ser reescrita; trocar apenas o provider.
- Preferir autenticação simples para admin.
- Performance: usar cache e revalidate.

## Entregáveis
- `CmsProvider` implementado
- Migração de dados locais → CMS
- Guia de deploy (Docker) + variáveis de ambiente
