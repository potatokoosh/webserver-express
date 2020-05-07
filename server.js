const express = require('express');
const app = express();
const hbs = require('hbs');
//helpers
require('./hbs/helpers')//por hbs no hay necesidad asignar una variable a este require

//Variable para HEROKU
// Las dos rayas || significa uno o lo otro,, entonces si no encuentra el porcess.env.PORT que busca en heroku el puerto sino lo encuentra que lo ubique en el puerto 3000
const port = process.env.PORT || 3000;
 
//el __dirname hace que busque sin importar las cuantas carpetas hayan en la carpeta public, se busquen los recursos dentro de esta carpeta,, por eso en about solo se especifico la ruta de la foto desde la carpeta assets.
app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
  //res.send('Hola Mundo');
  res.render('home',{
    nombre: 'Jose'//aqui introducimos la variable nombre en el home
  })
});

app.get('/about', (req, res) => {
  res.render('about',{
  })
});
 
app.listen(port, ()=>{
  console.log(`Escuchando peticiones en el puerto ${port}`);
});