const models = require('../models/models')


let add = async (req, res, next) => {
    const {film_name,film_type,film_year,film_link} = req.body;
    try {
        const data = new models.Film({film_name,film_type,film_year,film_link});
        await data.save();
        res.status(200).json({message:'Guardado correctamente', data})
    } catch (error) {
        res.status(404).send({ message: 'Error al guardar' });
        next(error);
    }
}


let list = async (req, res, next) => {
    try {
        const data = await models.Film.find();
        if (data.length === 0) {
            res.status(200).send({ message: 'No existen datos por mostrar' });
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(404).send({ message: 'Error en la consulta' });
        next(error);
    }
}

let update = async (req, res, next) => {
    const id = req.body._id;
    const {film_name,film_type,film_year,film_link} = req.body;
    try {
        const data = await models.Film.findByIdAndUpdate({_id:id},{film_name,film_type,film_year,film_link})
        res.status(200).json({message:'Actualizado correctamente', data})
    } catch (error) {
        res.status(404).send({ message: 'Error al actualizar' });
        next(error);
    }
}
let updateparam = async (req, res, next) => {
    const id = req.params._id;
    const {film_name,film_type,film_year,film_link} = req.body;
    try {
        const data = await models.Film.findByIdAndUpdate({_id:id},{film_name,film_type,film_year,film_link})
        res.status(200).json({message:'Actualizado correctamente', data})
    } catch (error) {
        res.status(404).send({ message: 'Error al actualizar' });
        next(error);
    }
}

let remove = async (req, res, next) => {
    const id = req.body._id;
    try {
        const data = await models.Film.findByIdAndDelete({_id:id})
        res.status(200).json({message:'Eliminado correctamente', data})
    } catch (error) {
        res.status(404).send({ message: 'Error al eliminar' });
        next(error);
    }
}

let removeparam = async (req, res, next) => {
    const id = req.params._id;
    try {
        const data = await models.Film.findByIdAndDelete({_id:id})
        res.status(200).json({message:'Eliminado correctamente'})
    } catch (error) {
        res.status(404).send({ message: 'Error al eliminar' });
        next(error);
    }
}



module.exports = { list, add, update, updateparam, remove, removeparam};