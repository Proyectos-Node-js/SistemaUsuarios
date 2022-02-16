const routerx = require('express-promise-router');
const {VerifyToken} = require('../Validations/VerifyToken');
const FilmController = require('../controllers/FilmsController')
const app  = routerx();


app.get('/list',VerifyToken ,FilmController.list);
app.post('/add', FilmController.add);
//Actualizr con el parametro id 
app.put('/updateparam/:_id', FilmController.updateparam);
//Actualizr sin el parametro id 
app.put('/update', FilmController.update);

//Eliminar sin el parametro id 
app.delete('/remove', FilmController.remove);
//Eliminar sin el parametro id 
app.delete('/removeparam/:_id', FilmController.removeparam);


module.exports = app;