// models;
const Dough = require('../models/Dough');

module.exports = {
  async store(req, res) {
    const { type } = req.body;

    // validations
    if(!type) {
      res.status(422).json({ message: 'O tipo da massa é obrigatório!' });
      return;
    }

    const newDough = await Dough.create({ type });
    return res.status(200).json(newDough);
  },
}