const { Client } = require('pg');

const client = new Client({
  //* dados de conexão à base de dados
  host: 'localhost',
  port: 5432,
  //* dados de acesso à base de dados
  user: 'root',
  password: 'root',
  database: 'ezcontacts',
});

client.connect();

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
