const express = require('express');
const app = express();
const path = require('path');
const PORT = 3030;


app.use(express.static('public'))

/*Rutas*/
app.get('/', (req, res) => { res.sendFile(path.join(__dirname, "src", 'views', 'home.html')) });
app.get('/register', (req, res) => { res.sendFile(path.join(__dirname, "src", "views", "register.html")) });
app.get('/header', (req, res) => { res.sendFile(path.join(__dirname, 'src/partials', 'header.html')) });
app.get('/main', (req, res) => { res.sendFile(path.join(__dirname, 'src/partials', 'main.html')) });
app.get('/footer', (req, res) => { res.sendFile(path.join(__dirname, 'src/partials', 'footer.html')) });
app.get('/carrito', (req, res) => { res.sendFile(path.join(__dirname, "src","views","carrito.html")) });

app.listen(PORT, () => console.log(`Server running in http://localhost:${PORT}`));