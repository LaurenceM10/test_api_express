const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/tarea', (req, res)){
  res.send({content: "Soy steven"});
}

app.listen(PORT, (req, res) => {
    console.log("Corriendo el servidor desde el puerto 3000 con ExpressJS");
});
