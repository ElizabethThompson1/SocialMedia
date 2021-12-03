const Joi = require('joi');
const mongoose = require('mongoose');



const signInSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        max: 200,
      },
      password: {
        type: String,
        required: true,
        min: 5
      },
     },{timestamps: true}
)

const SignIn = mongoose.model('SignIn', signInSchema);


function validationOfSignIn(signIn){
    const schema = Joi.object({
        userId: Joi.string().required(),
        password: Joi.string().required(),
    })
        return schema.validate(signIn);        
}


exports.validateSignIn = validationOfSignIn;
exports.SignIn = SignIn;
