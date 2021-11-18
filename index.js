const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/errorHandler');
const app = express();
const port = process.env.PORT || 3005;

app.use(express.json());
const whiteList = ['http://127.0.0.1:5500', 'http://localhost:5000'];
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('No permitido'));
    }
  },
};
app.use(cors(options));

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
