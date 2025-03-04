const router = require('express').Router();
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { User,validate } = require('../models/user');
 router.post('/',async(req,res)=>{
try{
    const{error} = validate(req.body);
    if(error)
        return res.status(400).send({message:error.details[0].message});
    const user = await User.findOne({email: req.body.email});
    if(user)
        return res.status(400).send({message:'Email already exists'});
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashpassword = await bcrypt.hash(req.body.password, salt);
    await new User({ ...req.body,password:hashpassword}).save();
    res.status(201).send({message: "User Created Succesfully"})
}
catch(error){
    res.status(500).send({message:error.message})
}
 })
 module.exports = router;