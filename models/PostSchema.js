const Joi = require('joi');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        userId: {type: String, required: true},
        text: { type: String, required: true},
        likes: {type: Number, default: 0},
        dislikes: {type: Number, default: 0},
        
    }
)

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
const SignUp = mongoose.model('SignUp', signUpSchema);
const User = mongoose.model('User', userSchema);


function validationOfUser(User){
    const schema = Joi.object({
        userId: Joi.string().min(2).max(500).required(),
        text: Joi.string().required(),
        likes: Joi.number(),
        dislikes: Joi.number(),
        
    })
        return schema.validate(User);        
}
function validationOfSignUp(signUp){
    const schema = Joi.object({
        userId: Joi.string().required(),
        password: Joi.string().required(),
    })
        return schema.validate(signUp);        
}
function validationOfSignIn(signIn){
    const schema = Joi.object({
        userId: Joi.string().required(),
        password: Joi.string().required(),
    })
        return schema.validate(signIn);        
}

exports.validateUser = validationOfUser;
exports.validateSignUp = validationOfSignUp;
exports.validateSignIn = validationOfSignIn;
exports.SignIn = SignIn;
exports.SignUp = SignUp;
exports.User = User;
