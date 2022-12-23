//models
const Order = require('../models/Order');
const Status = require('../models/Status');

module.exports = {
  async index (req, res) {
    const allOrders = await Order.findAll({
      include: [
        { 
          association: 'status',
          attributes: ['id', 'type'],
        },
        { 
          association: 'pizza', 
          attributes: ['id'],
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
          ]
        },
      ],
      attributes: ['id', 'createdAt'],
    });

    return res.status(200).json(allOrders);
  },

  async changePizzaStatus(req, res) {
    const { id } = req.params;
    const { status_id } = req.body;

    if(!status_id) {
      res.status(422).json({ message: 'É necessário informar um status para a pizza!' });
      return;
    }

    await Order.update({ status_id, }, {
      where: { id: id },
    });

    return res.status(200).json({ message: 'Pedido atualizado com sucesso!' });
  },
}