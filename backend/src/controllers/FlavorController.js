// models
const Flavor = require('../models/Flavor');

module.exports = {
  async store(req, res) {
    const { name } = req.body;

    if (!name) {
      res.status(422).json({ message: 'O sabor da pizza é obrigatório!' });
      return;
    }

    const [ newFlavor, created ] = await Flavor.findOrCreate({ where: { name: name }});

    // checking if flavor already exists
    if (!created) {
      return res.status(422).json({ message: 'Este sabor já foi cadastrado!' });
    }

    return res.status(200).json(newFlavor);
  },

  async index (req, res) {
    const allFlavors = await Flavor.findAll({
      attributes: ['name', 'id'],
    });

    if(allFlavors.length === 0) {
      return res.status(200).json({ message: 'Você ainda não possui nenhum sabor de pizza!' });
    }

    return res.status(200).json({ flavors: allFlavors });
  }
};