# Projeto ERRO 404

## Estrutura
- `apps/frontend`: Aplicação web (React + Vite)
- `apps/backend`: API RESTful (NestJS)
- `database/`: Esquemas e scripts SQL
- `docs/`: Documentação técnica

## Como rodar

### Backend
cd apps/backend
npm install
npm run start:dev

### Frontend
cd apps/frontend
npm install
npm run dev

## Stack
PostgreSQL (Heroku)
NestJS + TypeORM
React + Vite + TypeScript

##  Padrão de Commits — Conventional Commits
Utilizamos o padrão Conventional Commits para manter o histórico organizado, facilitar automações e dar clareza ao que está sendo feito no projeto

### Estrutura do commit
<tipo>: descrição curta e objetiva

### SIGNIFICADOS:

- **feat**: quando adiciona uma nova funcionalidade
- **fix**: quando corrige um bug ou erro no sistema
- **refactor**: quando melhora o código sem alterar o comportamento
- **chore**: para tarefas que não afetam o código da aplicação

### EXEMPLOS:
feat: adicionar componente de mapa interativo
fix: corrigir validação de dados recicláveis
chore: configurar .gitignore
refactor: reorganizar serviços do módulo de coleta

(mensagens do commit sempre no infinitivo)

