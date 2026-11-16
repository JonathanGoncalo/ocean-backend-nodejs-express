const express = require("express");
const app = express();

app.use(express.json());

app.get("/", function (req, res) {
    res.send("Hello World");
});

app.get("/oi", function (req, res) {
    res.send("Olá, mundo");
});

const lista = ["Mulher Maravilha", "Capitão Marvel", "Homem de Ferro"];

// READ (todos)
app.get("/herois", function (req, res) {
    res.send(lista);
});

// CREATE
app.post("/herois", function (req, res) {
    const item = req.body.nome;

    if (!item) {
        return res.status(400).send("O campo 'nome' é obrigatório");
    }

    lista.push(item);
    res.status(201).send("Item adicionado com sucesso!");
});

// READ (por id)
app.get("/herois/:id", function (req, res) {
    const id = req.params.id - 1;
    const item = lista[id];

    if (!item) {
        return res.status(404).send("Herói não encontrado");
    }

    res.send(item);
});

// UPDATE
app.put("/herois/:id", function (req, res) {
    const id = req.params.id - 1;
    const item = req.body.nome;

    if (!lista[id]) {
        return res.status(404).send("Herói não encontrado");
    }

    if (!item) {
        return res.status(400).send("O campo 'nome' é obrigatório");
    }

    lista[id] = item;
    res.send("Item atualizado com sucesso");
});

// DELETE
app.delete("/herois/:id", function (req, res) {
    const id = req.params.id - 1;

    if (!lista[id]) {
        return res.status(404).send("Herói não encontrado");
    }

    lista.splice(id, 1);
    res.send("Item removido com sucesso");
});

app.listen(3000, function () {
    console.log("Servidor rodando em http://localhost:3000");
});