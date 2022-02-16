const {Schema, model} = require('mongoose');

const FilmSchema = new Schema({
    film_name   :   {type:String},
    film_type   :   {type:String},
    film_year   :   {type:String},
    film_link   :   {type:String}
})

module.exports = model('films', FilmSchema);