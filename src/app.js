const express = require('express');
const path = require('path');

const app = express();
const PORT = 3030;


app.use(express.static('public')) // para traer los elementos estaticos de la carpeta public

/*Rutas*/
app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','home.html'))) // ruta que da al home
app.get('/principal',(req,res) => res.sendFile(path.join(__dirname,'partials','header.html'))) 
app.get('/postres',(req,res) => res.sendFile(path.join(__dirname,'partials','footer.html'))) 

app.listen(PORT, () => console.log(`Server running in http://localhost:${PORT}`));