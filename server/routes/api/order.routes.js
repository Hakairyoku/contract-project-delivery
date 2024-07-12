const router = require('express').Router();
const { Order } = require('../../db/models');
const verifyAccessToken = require('../../middleware/verifyAccessToken');

router.post('/', verifyAccessToken, async (req, res) => {
  try {
      const { userId, catId } = req.body;
      const order = await Order.create({ userId, catId });
      if (order) {
          res.status(200).json({ message: 'success', order });
          return;
      }
      res.status(400).json({ message: 'Something went wrong' });
  } catch ({ message }) {
      res.status(500).json({ error: message })
  }
});
  
  module.exports = router