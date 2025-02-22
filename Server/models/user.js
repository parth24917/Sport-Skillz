const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const joi = require('joi')
const passwordComplexity = require('joi-password-complexity')
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: true
    }


})
UserSchema.methods.generateAuthToken = function() {
const token = jwt.sign(
    { _id: this._id },
    process.env.KEY,
    { expiresIn: '1d' }
    
)
return token;
}

const User = mongoose.model("user",UserSchema);
const validate = (data) => {
const schema = joi.object({
    name: joi.string().required().label("Name"),
    email: joi.string().email().required().label("Email"),
    password: passwordComplexity().required().label("Password"),
    gender: joi.string().valid('male', 'female').required().label("Gender")
})
return schema.validate(data);
}
const validateLogin = (data) => {
    const schema = joi.object({
        email: joi.string().email().required().label("Email"),
        password: joi.string().required().label("Password")
    });
    return schema.validate(data);
}
module.exports = {User,validate,validateLogin};