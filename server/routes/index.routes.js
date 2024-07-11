const router = require('express').Router();

const authRoutes = require('./api/auth.routes');
const userRoutes = require('./api/user.routes');
const tokensRoutes = require('./api/tokens.routes')


router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/tokens', tokensRoutes)

module.exports = router;