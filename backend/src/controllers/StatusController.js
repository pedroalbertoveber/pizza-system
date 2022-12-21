//models
const Status = require('../models/Status');

module.exports = {
  async store(req, res) {
    const { type } = req.body;

    if (!type) {
      res.status(422).json({ message: 'O tipo de status é obrigatório!' });
      return;
    }

    const [ newStatus, created ] = await Status.findOrCreate({
      where: { type: type },
    });

    if (!created) {
      res.status(422).json({ message: 'Este status já está cadastrado!' });
      return;
    }

    return res.status(200).json(newStatus);
  },

  async index (req, res) {
    const allStatus = await Status.findAll({
      attributes: ['id', 'type'],
    });

    if(allStatus.length === 0) {
      res.status(200).json({ message: 'Você não possui nenhum status cadastrado!' });
      return;
    }
    
    return res.status(200).json(allStatus);
  }
}