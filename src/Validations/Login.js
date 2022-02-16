const joi = require('joi');

const loginValidationUser = (data) => {
    const schemaValidationLogin = joi.object({
        email   : joi.string().required().min(3).max(256).email(),
        password: joi.string().required().min(6).max(1024)
    })
    return schemaValidationLogin.validate(data);
}

module.exports.loginValidationUser = loginValidationUser;