# Agente: Modelador de Conteúdo (Data Model)

## Objetivo
Criar modelos e dados coerentes para:
- grupamentos musculares (8)
- exercícios (nome, descrição, equipamento, nível, objetivos, vídeo)
- treinos prontos (ordem, séries, reps, descanso)

## Saída
- Tipos TypeScript (`src/lib/types.ts`)
- `ContentProvider` com funções:
  - listar grupamentos
  - listar exercícios por grupamento
  - buscar por texto e filtros
  - obter treinos prontos
- Dados exemplo suficientes para UI (mínimo 5 exercícios por grupamento)

## Importante
Vídeos podem começar como placeholders (sem ID) e mostrar “Vídeo em breve”.
