// models;
const Edge = require('../models/Edge');

module.exports = {
  async store (req, res) {
    const { type } = req.body;

    if(!type) {
      res.status(422).json({ message: 'O tipo da borda é obrigatório!' });
      return;
    }

    const [ newEdge, created ] = await Edge.findOrCreate({ where: { type: type }});

    if(!created) {
      return res.status(422).json({ message: 'Este borda já está cadastrada!' });
    }
    return res.status(200).json(newEdge);
  },

  async index (req, res) {
    const allEdges = await Edge.findAll({
      attributes: ['type', 'id'],
    });

    if(allEdges.length === 0) {
      return res.status(200).json({ message: 'Você ainda não possui nenhuma borda de pizza!' });
    }

    return res.status(200).json(allEdges);
  },

  async update (req, res) {
    const { type } = req.body;
    const { id } = req.params;

    if(!type) {
      res.status(422).json({ message: 'O tipo da borda é obrigatório!' });
      return;
    }

    //check if edge flavor already exists
    const alreadyExists = await Edge.findOne({ where: { type }});

    if (alreadyExists && String(id) !== String(alreadyExists.id)) {
      res.status(422).json({ message: 'Esta borda já está cadastrada!'});
      return;
    }

    await Edge.update({ type }, {
      where: {
        id: id,
      },
    });

    return res.status(200).json({ id: id, type: type });
  },
};