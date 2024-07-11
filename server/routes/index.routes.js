const router = require('express').Router();

const authRoutes = require('./api/auth.routes');
const userRoutes = require('./api/user.routes');
const tokensRoutes = require('./api/tokens.routes')
const catRoutes = require('./api/cat.routes')


router.use('/cats', catRoutes)
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/tokens', tokensRoutes)

module.exports = router;