# Critérios de aceite (MVP)

## Home (/)
- [x] Exibe: Move&Live + slogan “Levando vida até você”
- [x] CTA “Começar agora” leva para `/exercicios`
- [x] Contém exatamente o texto do objetivo (ver `.github/copilot-instructions.md`)
- [x] Contém exatamente o texto “Como funciona...”
- [x] Contém benefícios em cards (autonomia, segurança, resultados, etc.)
- [x] Inclui frase de impacto corporativa (texto exato)
- [x] Footer com: nome, slogan, texto institucional, botões (Instagram/WhatsApp/Contato) e copyright

## Biblioteca (/exercicios)
- [x] Título “Escolha o grupo muscular”
- [x] Subtítulo presente
- [x] 8 cards clicáveis com ícone, nome e descrição
- [x] Layout responsivo (2 colunas mobile, 4 desktop)

## Grupamento (/exercicios/[grupo])
- [x] Título do grupamento + subtítulo
- [x] Botão voltar
- [x] Cards de exercícios com nome, descrição, equipamento, nível, botão “Assistir vídeo”
- [x] Aviso de segurança em cada exercício (texto exato)
- [x] Busca + filtros funcionando no cliente
- [x] Treino sugerido do dia (4–6 exercícios)

## Favoritos (/favoritos)
- [x] Usuário consegue favoritar e desfavoritar exercícios
- [x] Favoritos persistem em localStorage
- [x] Página lista favoritos com link para o grupamento/exercício

## Treinos Prontos (/treinos-prontos e /treinos-prontos/[nivel])
- [x] 3 categorias (iniciante/intermediário/avançado)
- [x] Página de cada treino com checklist, séries, reps e descanso
- [x] Botão “Baixar PDF” funciona (gera PDF simples)

## Orientações (/orientacoes)
- [x] Contém tópicos educativos obrigatórios
- [x] Inclui aviso obrigatório (texto exato)

## Qualidade
- [ ] Lighthouse Mobile sem erros críticos de acessibilidade
- [ ] `npm run build -w @movelive/web` passa
