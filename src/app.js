const express = require('express');
const path = require('path');

const app = express();
const PORT = 3030;


app.use(express.static('public'))

/*Rutas*/
app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','home.html'))) 
app.get('/principal',(req,res) => res.sendFile(path.join(__dirname,'partials','header.html'))) 
app.get('/postres',(req,res) => res.sendFile(path.join(__dirname,'partials','footer.html'))) 

app.listen(PORT, () => console.log(`Server running in http://localhost:${PORT}`));