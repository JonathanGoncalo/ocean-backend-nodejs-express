# Ocean Backend: Node.js e Express

API REST com Node.js e Express com CRUD de heróis (criar, listar, atualizar e remover), desenvolvida na aula **Backend com NodeJs e Express** do [Ocean](https://oceanbrasil.com/), programa de capacitação tecnológica da Samsung.

Os dados ficam em uma lista na memória, então voltam ao estado inicial sempre que o servidor reinicia.

## Tecnologias

- [Node.js](https://nodejs.org/)
- [Express 5](https://expressjs.com/)
- [Nodemon](https://nodemon.io/) (ambiente de desenvolvimento)
- RapidAPI Client (extensão do VS Code) para testar as rotas

## Como rodar

Pré-requisito: Node.js 18 ou superior.

```bash
git clone https://github.com/JonathanGoncalo/ocean-backend-nodejs-express.git
cd ocean-backend-nodejs-express
npm install
npm run dev
```

O servidor sobe em `http://localhost:3000`. Para rodar sem o Nodemon, use `npm start`.

## Rotas

| Método | Rota           | Descrição                  |
| ------ | -------------- | -------------------------- |
| GET    | `/`            | Retorna "Hello World"      |
| GET    | `/oi`          | Retorna "Olá, mundo"       |
| GET    | `/herois`      | Lista todos os heróis      |
| GET    | `/herois/:id`  | Retorna um herói pelo id   |
| POST   | `/herois`      | Adiciona um herói          |
| PUT    | `/herois/:id`  | Atualiza um herói          |
| DELETE | `/herois/:id`  | Remove um herói            |

O `id` começa em 1 e corresponde à posição do herói na lista.

### Exemplos

Adicionar um herói (`POST /herois`):

```json
{
  "nome": "Viúva Negra"
}
```

Atualizar um herói (`PUT /herois/1`):

```json
{
  "nome": "Batgirl"
}
```

### Respostas

- `200` operação realizada com sucesso
- `201` herói criado
- `400` campo `nome` não enviado
- `404` herói não encontrado

## Aprendizados

- Criar rotas de um CRUD com Express
- Receber dados em JSON com `express.json()`
- Usar o Nodemon para reiniciar o servidor automaticamente
- Testar endpoints com o RapidAPI Client

## Autor

**Jonathan Macedo Gonçalo**

- [LinkedIn](https://www.linkedin.com/in/jonathangoncalo)
- [GitHub](https://github.com/JonathanGoncalo)
