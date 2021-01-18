const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(request, response) {
    const contacts = await ContactRepository.findAll();

    response.json(contacts);
  }

  async show(request, response) {
    const { id } = request.params;

    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'Contact not found' });
    }

    response.json(contact);
  }

  store() {

  }

  update() {

  }

  async delete(request, response) {
    const { id } = request.params;

    const contactExists = await ContactRepository.findById(id);

    if (!contactExists) {
      return response.status(404).json({ error: 'Contact not found' });
    }

    await ContactRepository.delete(id);

    response.sendStatus(204);
  }
}

// Singleton - Diz que nós só podemos ter apenas 1 única instância de uma classe
module.exports = new ContactController();
