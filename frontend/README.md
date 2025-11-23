# Zoo API Frontend (Aplicação Web)

Interface de usuário (UI) do sistema de gerenciamento de zoológico. desenvolvida em React (utilizando Hooks e componentes funcionais) com estilização através de Styled Components, o que permite uma abordagem modular e componentizada para o CSS.

O frontend se comunica com a API REST em Node.js/Express rodando na porta 5000.

## Como Iniciar

1. Pré-requisitos

Certifique-se de que a API de Backend (zoo-api) está totalmente operacional antes de iniciar o frontend.

Backend Rodando: O servidor Node.js/Express e o container PostgreSQL (Docker) devem estar ativos em http://localhost:5000.

Comando recomendado na pasta do backend: npm run db:up e npm start

2. Instalação

 Instale as dependências principais (react, lucide-react, etc.)
```bash
npm install
```
3. Iniciar a Aplicação Web

Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

 A aplicação estará disponível em http://localhost:5173 (ou porta similar)


## Funcionalidades Implementadas

O frontend é dividido em duas abas (Componentes de Página) para gerenciar o estado da aplicação:

| Aba | Funcionalidades|
| -------- | ----- |
|Animais|Completo: Cadastro (POST), Visualização (GET).|
|Cuidados|Completo: Cadastro (POST), Visualização (GET)|

O gerenciamento de estado é feito através de State Lifting no componente App, que centraliza os dados, e a navegação é controlada por estado (activeTab) em vez de um roteador.

