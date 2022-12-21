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

    const [ newDough, created ] = await Dough.findOrCreate({ where: { type: type }});

    if(!created) {
      return res.status(422).json({ message: 'Esta massa já está cadastrada!' });
    }

    return res.status(200).json(newDough);
  },

  async index (req, res) {
    const allDoughes = await Dough.findAll({
      attributes: ['type', 'id'],
    });

    if(allDoughes.length === 0) {
      return res.status(200).json({ message: 'Você ainda não possui nenhuma massa de pizza!' });
    }

    return res.status(200).json(allDoughes);
  },

  async update (req, res) {
    const { type } = req.body;
    const { id } = req.params;

    if(!type) {
      res.status(422).json({ message: 'O tipo da massa é obrigatório!' });
      return;
    }

    const alreadyExists = await Dough.findOne({ where: { type }});

    if (alreadyExists && String(id) !== String(alreadyExists.id)) {
      res.status(422).json({ message: 'Esta massa já está cadastrada!'});
      return;
    }

    await Dough.update({ type }, {
      where: {
        id: id,
      },
    });

    return res.status(200).json({ id: id, type: type });
  },
}