const express = require('express');

const server = express();
server.use(express.json());

server.get('/', (request, response) => {
  response.send('SEU CU');
});

server.listen(3001, () => {
  console.log('🔥 server started at http://localhost:3001');
})