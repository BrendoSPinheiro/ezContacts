const db = require('../../database');

class CategoryRepository {
  async findAll() {
    const rows = await db.query('SELECT * FROM categories ORDER BY name');

    return rows;
  }

  async findById(id) {
    const [row] = await db.query(`
      SELECT * FROM categories WHERE id = $1
    `, [id]);

    return row;
  }

  async create({ name }) {
    const [row] = await db.query(`
      INSERT INTO categories(name)
      VALUES($1)
      RETURNING *
    `, [name]);

    return row;
  }
}

module.exports = new CategoryRepository();
