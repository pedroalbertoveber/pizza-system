// models;
const Edge = require('../models/Edge');

module.exports = {
  async store (req, res) {
    const { type } = req.body;

    if(!type) {
      res.status(422).json({ message: 'O tipo da borda é obrigatório!' });
      return;
    }

    const newEdge = await Edge.create({ type });
    return res.status(200).json(newEdge);
  },
};