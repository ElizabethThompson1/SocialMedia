const Joi = require('joi');
const mongoose = require('mongoose');

const signUpSchema = new mongoose.Schema({
        userId: {
            type: String,
            required: true,
            max: 200,
          },
          password: {
            type: String,
            required: true
        }
          
})

const SignUp = mongoose.model('SignUp', signUpSchema);

function validationOfSignUp(signUp){
    const schema = Joi.object({
        userId: Joi.string().required(),
        password: Joi.string().required(),
    })
        return schema.validate(signUp);        
}



exports.validateSignUp = validationOfSignUp;
exports.SignUp = SignUp;
