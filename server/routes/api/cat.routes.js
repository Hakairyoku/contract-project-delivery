const router = require('express').Router();
const { Cat } = require('../../db/models');
const verifyAccessToken = require('../../middleware/verifyAccessToken');

router.get('/', async (req, res) => {
    try {
        const cats = await Cat.findAll();
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
        const { user } = res.locals;
        const { name, class, img, place, price } = req.body;
        const cat = await Cat.create({ name, class, img, place, price });
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
        const { name, class, img, place, price } = req.body;
        const result = await Cat.update({ name, class, img, place, price });
        if (result[0] > 0) {
            const cat = await Cat.findOne({ where: { id: id } });
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