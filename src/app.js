const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const methodOverride = require('method-override');
const session = require('express-session');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const categoriesRouter = require('./routes/categories');
// const brandsRouter = require('./routes/brands');
const cartRouter = require('./routes/cart')

const cookieCheck = require('./middlewares/cookieCheck');
const localsCheck = require('./middlewares/localsCheck');

const app = express();


// view engine setup
app.set('views', [
  path.join(__dirname, 'views'), // Directorio principal de vistas
  path.join(__dirname, 'views', 'categories') // Directorio específico de vistas de categorías
]);
app.set('view engine', 'ejs');

app.use(methodOverride('_method'));
app.use(session({
  secret : "vidaOrganica TheBest",
  resave : true,
  saveUninitialized : true
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'..', 'public')));

app.use(cookieCheck)
app.use(localsCheck)

app.post('/remove', (req, res) => {
  // Asegúrate de que req.body.id sea un número entero
  const id = parseInt(req.body.id, 10); // El segundo argumento (base) es 10 para interpretar el valor como decimal.

  // Ahora 'id' es un número entero que puedes utilizar en tus consultas a la base de datos.
  // Realiza las operaciones necesarias con 'id' en su formato de entero.

  // ...
  
  res.send(`ID recibido: ${id}`);
});
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products',productsRouter)
app.use('/categories',categoriesRouter)
// app.use('/brands', brandsRouter)
app.use('/cart', cartRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
