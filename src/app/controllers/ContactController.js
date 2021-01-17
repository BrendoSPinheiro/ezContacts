const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  index(request, response) {
    response.json({ ok: true });
  }

  show() {

  }

  store() {

  }

  update() {

  }

  delete() {

  }
}

module.exports = new ContactController();
