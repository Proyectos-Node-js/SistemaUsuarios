const joi = require('joi');

const registerValidationUser = (data) => {
    const schemaValidationUser = joi.object({
        username: joi.string().required().min(3).max(256),
        email   : joi.string().required().min(3).max(256).email(),
        password: joi.string().required().min(6).max(1024)
    })
    return schemaValidationUser.validate(data);
}

module.exports.registerValidationUser = registerValidationUser;