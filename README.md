<img src="./boolean-logo.png" width="20px">

# express-blog-routing

## 🇬🇧 English Version

### Overview

Express exercise focused on structuring routing logic by creating a dedicated router for blog posts and implementing all CRUD routes following REST conventions.

### Assignment Summary

The assignment required to:

- Create a routing file `routers/posts.js` dedicated to the **post** entity.
- Implement all CRUD routes (Index, Show, Create, Update, Delete), each returning a simple text response describing the server action. Examples:
  - `GET /posts` → “List of posts”
  - `GET /posts/:id` → “Details of post :id”
  - `POST /posts` → “Creation of a new post”
  - `PUT /posts/:id` → “Update of post :id”
  - `DELETE /posts/:id` → “Deletion of post :id”
- Register the router in `app.js` using the prefix `posts/`.

---

## 🇮🇹 Versione Italiana

### Panoramica

Esercizio Express dedicato alla strutturazione delle rotte tramite un router separato per l’entità post, implementando tutte le operazioni CRUD secondo le convenzioni REST.

### Riassunto della Consegna

La consegna richiedeva di:

- Creare un file `routers/posts.js` che gestisca le rotte relative ai **post**.
- Implementare tutte le rotte CRUD (Index, Show, Create, Update, Delete), restituendo come risposta una semplice stringa che confermi l’operazione del server. Esempi:
  - `GET /posts` → “Lista dei post”
  - `GET /posts/:id` → “Dettagli del post :id”
  - `POST /posts` → “Creazione di un nuovo post”
  - `PUT /posts/:id` → “Modifica del post :id”
  - `DELETE /posts/:id` → “Cancellazione del post :id”
- Registrare il router dentro `app.js` con il prefisso `posts/`.
