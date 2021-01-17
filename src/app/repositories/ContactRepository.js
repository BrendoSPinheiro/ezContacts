const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Brendo Souza',
    email: 'brendo@mail.com',
    phone: '71999999999',
    category_id: uuid(),
  },
  {
    id: uuid(),
    name: 'Maisa Greice',
    email: 'maisa@mail.com',
    phone: '71999999999',
    category_id: uuid(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactRepository();
