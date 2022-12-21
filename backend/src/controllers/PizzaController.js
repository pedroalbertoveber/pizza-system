//models
const Pizza = require('../models/Pizza');
const Order = require('../models/Order');
const Status = require('../models/Status');

module.exports = {
  async store(req, res) {
    const {
      dough_id,
      edge_id,
      flavors,
    } = req.body;

    // validations

    if (!dough_id) {
      res.status(422).json({ message: 'O tipo da massa é obrigatório!' });
      return;
    }

    if (!edge_id) {
      res.status(422).json({ message: 'O tipo da borda é obrigatório!' });
      return;
    }

    if(!flavors) {
      res.status(422).json({ message: 'Você precisa selecionar ao menos um sabor!' });
      return;
    }

    if (flavors.length > 3) {
      res.status(422).json({ message: `Selecione até 3 sabores! Selecionado: ${flavors.length} sabores`})
    }

    const newPizza = await Pizza.create({
      dough_id,
      edge_id,
    });

    flavors.forEach(flavor => {
      newPizza.addFlavor(flavor);
    });

    const initialStatus = await Status.findOne({
      where: {
        type: 'Em produção',
      },
    });

    await Order.create({ pizza_id: newPizza.id, status_id: initialStatus.id });

    return res.status(200).json(newPizza);
  },

  async index(req, res) {
    const allPizzas = await Pizza.findAll({
      include: [
        { 
          association: 'doughes',
          attributes: ['type', 'id'],
        },
        { 
          association: 'edges',
          attributes: ['type', 'id'], 
        },
        {
          association: 'flavors',
          attributes: [ 'id', 'name' ],
          through: { attributes: []},
        },
      ],
      attributes: ['id'],
    });

    if(allPizzas.length === 0) {
      res.status(200).json({ message: 'Você não possui nenhuma pizza em sistema!' });
      return;
    }

    return res.status(200).json(allPizzas);
  },
};