const router = require('express').Router();
const { Cat, User } = require('../../db/models');
const verifyAccessToken = require('../../middleware/verifyAccessToken');

router.post('/users/addCat', async (req, res) => {
    const { userId, catId } = req.body;
  
    try {
      const user = await User.findById(userId);
      const cat = await Cat.findById(catId);
  
      if (user.sausage < cat.price) {
        return res.status(400).json({ message: 'Not enough sausages' });
      }
  
      user.cats.push(cat);
      user.sausage -= cat.price;
  
      await user.save();
  
      res.json({ message: 'success', user });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  });
  
  module.exports = router