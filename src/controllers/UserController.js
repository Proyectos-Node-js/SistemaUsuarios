const models                    = require ('../models/models')
const {registerValidationUser}  = require('../Validations/User')
const {loginValidationUser}     = require('../validations/VerifyToken')
const bcryptjs                  = require('bcryptjs');
const jwt                       = require('jsonwebtoken');
require('dotenv/config');

let register = async (req,res,next)=>{
    const {error} = registerValidationUser(req.body);
    if (error) {
        // Validation 1 to check user input
        res.send({message: error['details'][0]['message']});
        //res.send(error['details']); 
    }else{
        try {
            //validate if user existe
            const userExist = await models.User.findOne({email: req.body.email});
            if (userExist) {
                return res.status(400).send({message:'Ya existe usuario'});
            }else{
                const {username,email,password} = req.body;
                //Encriptar contraseña
                let hashPassword = await bcryptjs.hash(password,5);
                const user = new models.User(
                    {
                        username,
                        email,
                        password:hashPassword
                    });

                await user.save();
                res.status(200).json({message:'Usuario registrado',user});
            }
        } catch (error) {
            res.status(404).send({message:'Error al registrar usuario'})
        }
    }
}

//LOGIN
let auth = async (req,res,next)=>{
    const {error} = loginValidationUser(req.body);
    if (error) {
        res.send({message: error['details'][0]['message']});
    }   
     //validate if user existe
    const user = await models.User.findOne({email: req.body.email});

    if (!user) {
        return res.status(400).send({message:'No existe usuario'});
    }

    const passwordValidation =  await bcryptjs.compare(req.body.password, user.password)

    if (!passwordValidation) {
        return res.status(400).send({message:'Contraseña incorrecta'});
    }
    //Si el usuario y la contraseña existen, generamos un token de autenticación
    const token = jwt.sign({_id:user._id}, process.env.TOKEN_SECRET);
    //console.log("PORT",process.env.TOKEN_SECRET);
    res.header('auth-token',token).send({'auth-token':token});
}
module.exports = {register, auth};