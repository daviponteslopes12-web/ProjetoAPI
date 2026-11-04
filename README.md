# ProjetoAPI

API REST em TypeScript para gerenciamento de produtos, clientes e pedidos.

## Sobre o projeto

Este repositório contém uma aplicação backend construída com Express para expor endpoints de cadastro e consulta de entidades comuns em um sistema de e-commerce simples.

## Tecnologias

- TypeScript
- Node.js
- Express
- SQLite
- Zod

## Estrutura do projeto

```bash
.
├── src/
│   ├── app.ts
│   ├── server.ts
│   ├── config/
│   ├── controllers/
│   ├── database/
│   ├── errors/
│   ├── middlewares/
│   ├── models/
│   ├── repositories/
│   ├── routes/
│   ├── schemas/
│   ├── services/
│   └── ...
├── package.json
├── tsconfig.json
├── requests.http
├── .gitignore
└── README.md
```

## Funcionalidades

- Cadastro, listagem, consulta, atualização e remoção de produtos
- Cadastro, listagem, consulta, atualização e remoção de clientes
- Criação de pedidos com itens
- Consulta de pedidos de um cliente
- Validação de entradas com Zod
- Tratamento centralizado de erros

## Requisitos

- Node.js 18+
- npm

## Instalação

```bash
npm install
```

## Executando a aplicação

Em modo desenvolvimento:

```bash
npm run dev
```

Build da aplicação:

```bash
npm run build
```

Executando a versão compilada:

```bash
npm start
```

## Scripts disponíveis

```bash
npm run dev
npm run build
npm run start
npm run db:init
npm run db:seed
```

## Endpoints principais

### Produtos

- `GET /products`
- `GET /products/:id`
- `POST /products`
- `PUT /products/:id`
- `DELETE /products/:id`

### Clientes

- `GET /customers`
- `GET /customers/:id`
- `GET /customers/:id/orders`
- `POST /customers`
- `PUT /customers/:id`
- `DELETE /customers/:id`

### Pedidos

- `GET /orders`
- `GET /orders/:id`
- `POST /orders`

## Testando a API

O repositório inclui o arquivo `requests.http`, que pode ser usado com extensões como REST Client do VS Code para testar os endpoints localmente.

## Observação

A aplicação está configurada para rodar localmente em:

```bash
http://localhost:3000
```

## Licença

Este projeto está sob a licença ISC.
