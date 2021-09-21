const express = require("express");

const app = express();

app.use(express.static('public'));

const rotas = require("./routes/rotas");

app.set("view engine", "ejs");
//var methodOverride = require("method-override");
//app.use(methodOverride("_method"));

app.use(express.json());
app.use(express.urlencoded(({extended: false})));

app.use("/", rotas);

app.listen(3333, ()=> console.log("Servidor rodando"));