const router = require('express').Router();
const { Cat } = require('../../db/models');
const verifyAccessToken = require('../../middleware/verifyAccessToken');

router.get('/user/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const cats = await Cat.findAll({ where: { userId: id } });
        res.status(200).json({ message: 'success', cats });
    } catch ({ message }) {
        res.status(500).json({ error: message })
    }
});


router.get('/', async (req, res) => {
    try {
        const cats = await Cat.findAll({where: {userId:1}});
        res.status(200).json({ message: 'success', cats });
    } catch ({ message }) {
        res.status(500).json({ error: message })
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const cat = await Cat.findOne({ where: { id: id } });
        res.status(200).json({ message: 'success', cat });
    } catch ({ message }) {
        res.status(500).json({ error: message })
    }
});

router.post('/', verifyAccessToken, async (req, res) => {
    try {
        const { name, catClass, img, place, price } = req.body;
        const cat = await Cat.create({ name, catClass, img, place, price });
        if (cat) {
            res.status(200).json({ message: 'success', cat });
            return;
        }
        res.status(400).json({ message: 'Something went wrong' });
    } catch ({ message }) {
        res.status(500).json({ error: message })
    }
});

router.put('/:id', verifyAccessToken, async (req, res) => {
    try {
        const { id } = req.params;
        const {user} = res.locals
        console.log(user);
        const { name, catClass, img, place, price  } = req.body;
        const result = await Cat.update({name, catClass, img, place, price, userId: user.id }, { where: { id: id}});
        console.log(5555555555,{name, catClass, img, place, price, userId: user.id });
        if (result[0] > 0) {
            const cat = await Cat.findOne({ where: { id: id } });
            console.log(99999999, cat);
            res.status(200).json({ message: 'success', cat });
            return;
        }
        res.status(400).json({ message: 'Something went wrong' });
    } catch ({ message }) {
        res.status(500).json({ error: message });
    }
});

router.delete('/:id', verifyAccessToken, async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Cat.destroy({ where: { id: id } });
        if (result > 0) {
            res.status(200).json({ message: 'success' });
            return;
        }
        res.status(400).json({ message: 'Something went wrong' });
    } catch ({ message }) {
        res.status(500).json({ error: message });
    }
});


module.exports = router;