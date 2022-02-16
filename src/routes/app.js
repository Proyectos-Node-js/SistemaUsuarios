const Films = require('./films');
const Users = require('./user');
const routerx = require('express-promise-router');
const router = routerx();

router.use('/films', Films);
router.use('/users', Users)

module.exports = router;