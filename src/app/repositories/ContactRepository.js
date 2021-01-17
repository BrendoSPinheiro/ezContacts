const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Brendo Souza',
    email: 'brendo@mail.com',
    phone: '71999999999',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Maisa Greice',
    email: 'maisa@mail.com',
    phone: '71999999999',
    category_id: v4(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactRepository();
