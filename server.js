const express = require("express");

// Instanciando o express na constante app
const app = express();

// Habilitando a engine do Express para renderizar HTMl utilizando EJS
app.set("view engine", "ejs");

// Criando as rotas
app.get("/", (req, res) => {
  //Criando um acróstico em inglês da palavra "Engenharia"
  // Array de objetos que serão renderizados no documento HTML da página index.ejs
  const items = [
    {
      title: "E",
      message: "ncouraging the human mind",
    },
    {
      title: "N",
      message: "ow take your ideas to a greather height",
    },
    {
      title: "G",
      message: "reat ideas",
    },
    {
      title: "I",
      message: "nnovative ideas are in the line",
    },
    {
      title: "N",
      message: "ot an easy job",
    },
    {
      title: "E",
      message: "ngineers are important",
    },
    {
      title: "E",
      message: "very day a new Einstein rises",
    },
    {
      title: "R",
      message: "oaring innovative ideas up high in the sky",
    },
    {
      title: "I",
      message: "ndependent work",
    },
    {
      title: "N",
      message: "ever give up",
    },
    {
      title: "G",
      message: "ifted engineers with creative ideas",
    },
  ];

  const subtitle =
    "EJS - Uma linguagem de modelagem para criação de páginas HTML utilizando JavaScript";

  //Rota da página index.ejs
  //Objeto que irá passar as constantes items e subtitle como resposta para serem renderizados no arquivo index.ejs
  res.render("pages/index", {
    qualitys: items,
    subtitle: subtitle,
  });
});

// Rota da página about.ejs
app.get("/sobre", (req, res) => {
  res.render("pages/about");
});

// Habilitando a porta no servidor express
app.listen(8080);
console.log("\nServer connected...\n");
