# Roteiro de uso do Copilot (passo a passo)

Copie/cole estes comandos no **Copilot Chat** conforme for avançando.

## 0) Aquecimento
**Prompt:**
“Leia `.github/copilot-instructions.md` + `docs/requirements.md` + `docs/acceptance-criteria.md`.
Me devolva um plano em 10 passos, com checkpoints e arquivos que você vai criar/alterar.”

## 1) Revisar UI premium (Home + Navegação)
“Melhore a Home para parecer app premium fitness, mantendo textos obrigatórios.
Ajuste spacing, tipografia, cards e CTA. Não quebre rotas.”

## 2) Biblioteca (grid 8 grupamentos)
“Garanta que `/exercicios` tenha 8 cards exatos com ícones e descrições curtas.
Deixe o grid perfeito no mobile (2 colunas) e no desktop (4 colunas).”

## 3) Grupamento: busca, filtros e sugestão do dia
“Implemente busca e filtros por nível/equipamento/objetivo usando query params.
Adicione ‘Treino sugerido do dia’ com 4–6 exercícios determinísticos por data.”

## 4) Favoritos
“Implemente favoritos com localStorage via hook `useFavorites()`.
Adicione botão de favoritar nos cards e crie `/favoritos`.”

## 5) Treinos Prontos (mini app)
“Crie `/treinos-prontos` e páginas internas por nível.
Cada treino deve ter checklist, séries/reps/descanso e botão de PDF.
PDF simples com título, lista e metadados.”

## 6) Orientações
“Crie página `/orientacoes` com seções: aquecimento, postura, respiração, progressão,
frequência, erros comuns, evitar lesões, organização por nível. Inclua aviso obrigatório.”

## 7) Contato e conversão
“Crie `/contato` com cards e CTAs (WhatsApp/Instagram/email).
Adicione botão flutuante WhatsApp em todas as páginas.”

## 8) Camada de conteúdo (preparar CMS)
“Refatore o acesso a dados para usar `ContentProvider` (adapter).
Hoje usa dados locais; deixe preparado para trocar por CMS.”

## 9) QA
“Adicione checagens: lint, build, e uma checklist de acessibilidade no README.
Corrija warnings e garanta foco/contraste.”

## 10) Roadmap CMS
“Escreva um plano para integrar um CMS self-host (Payload/Strapi/Directus),
com coleções: grupamentos, exercícios, vídeos, orientações, treinos prontos.
Explique prós/contras e escolha a opção mais simples para este projeto.”
