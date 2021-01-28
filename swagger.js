const swaggerAutogen = require('swagger-autogen')();
const routes = require('./src/routes');

const outputFile = './swagger_output.json';
const entryPoint = ['./src/index.js'];

swaggerAutogen(outputFile, entryPoint, {}).then(() => routes);
