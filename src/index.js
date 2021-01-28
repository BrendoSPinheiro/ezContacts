const express = require('express');
const swaggerUi = require('swagger-ui-express');
require('express-async-errors');

const routes = require('./routes');
const swaggerFile = require('../swagger_output.json');

const app = express();
app.use(express.json());
app.use(routes);
app.use((error, request, response, next) => {
  console.log(error);
  response.sendStatus(500);
});
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(3001, () => {
  console.log('🔥 server started at http://localhost:3001');
});
