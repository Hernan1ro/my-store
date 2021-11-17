const express = require('express');
const routerApi = require('./routes');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');
const app = express();
const port = 3005;

app.use(express.json());

// Crear un servidor
app.get('/', (request, response) => {
  response.send('Hola mi server en express');
});

routerApi(app);

//Midlewares
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

// Mostrar en consola el puerto donde nos encontramos
app.listen(port, () => {
  console.log('Mi port' + port);
});
