//Require express and bodyParser to can use in this context
const express = require("express");
const bodyParser = require("body-parser");

//Declare the default port
const PORT = 3000;

//To get an instance of ExpressJS
const app = express();

//To use bodyparser with ExpressJS
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app
  .get("/tarea", (req, res) => {
    res.send({ content: "Soy steven" });
  })
  .get("/facebook", (req, res) => {
    res.redirect(301, "https://www.facebook.com");
  });

//To run in the port 3000
app.listen(PORT, (req, res) => {
  //Success console message
  console.log("Running NodeJS server");
});
