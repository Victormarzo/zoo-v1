# Zoo Management System (Monorepo)

Este repositório contém o sistema completo de gerenciamento de zoológico, consolidando o Backend (API) e o Frontend (UI) em uma única estrutura de Monorepo.

## Estrutura do Projeto

O projeto é dividido em dois sub-diretórios principais:

- backend/: Contém a API REST.

    - Tecnologia: Node.js (Express).

    - Banco de Dados: PostgreSQL (configurado via Docker).

    - Validação: Joi.

- frontend/: Contém a Aplicação Web.

    - Tecnologia: React (Hooks e componentes funcionais).

    - Estilização: Styled Components.

## Como Iniciar (Início Unificado)

A execução de todos os serviços (DB, API e UI) é feita com um único comando na raiz do repositório.

1. Pré-requisitos

Certifique-se de ter instalado:

- Node.js e npm

- Docker e Docker Compose

2. Configuração Inicial

Variáveis de Ambiente: Crie o arquivo .env dentro da pasta backend/ com as credenciais do PostgreSQL.

Instalação de Dependências: Instale as dependências para todos os projetos (raiz, backend e frontend):
```bash
npm install
```

3. Início e Acesso

Use o script dev na raiz para iniciar a stack inteira:
```bash
npm run dev
```
|Serviço|URL de Acesso
|----|----|
|Frontend UI|http://localhost:5173 (Navegador)
|API Backend|http://localhost:3000/api/
|Teste de Conexão DB|http://localhost:3000/db-test