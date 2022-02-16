const routerx = require('express-promise-router');
const UserController = require('../controllers/UserController')

const app = routerx();

app.post('/register', UserController.register)
app.post('/login', UserController.auth)

  module.exports = app;