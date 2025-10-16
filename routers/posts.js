//questo file conterrà le rotte necessarie per l'entità post

const express = require("express");
const router = express.Router();

//rotte per le operazioni CRUD (Index, Show, Create, Update e Delete):
// • INDEX (nome rotta) -> GET (metodo) /posts (endpoint)
router.get("/", (req, res) => {
  res.send("Lista dei post");
});

// • SHOW   -> GET /posts/:id
router.get("/:id", (req, res) => {
  res.send("Dettaglio del post" + req.params.id);
});

// • STORE  -> POST /posts
router.post("/", (req, res) => {
  res.send("Creazione nuovo post");
});

// • UPDATE -> PUT /posts/:id
router.put("/:id", (req, res) => {
  res.send("Modifica integrale del post" + req.params.id);
});

// • MODIFY -> PATCH /posts/:id
router.patch("/:id", (req, res) => {
  res.send("Modifica parziale del post" + req.params.id);
});

// • DESTROY-> DELETE /posts/:id
router.delete("/:id", (req, res) => {
  res.send("Cancellazione del post" + req.params.id);
});
