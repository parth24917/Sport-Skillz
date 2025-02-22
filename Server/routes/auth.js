const router = require('express').Router();
const {User,validateLogin} = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.post('/',async(req,res) => {
  try{
    const {error} = validateLogin(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    const user = await User.findOne({email:req.body.email});
   
    if(!user) {
      console.log('User not found')
      return res.status(400).send('Invalid email or password')
    }
    console.log('User found:',user);
    const validpassword = await bcrypt.compare(
    req.body.password,user.password
    );
    if(!validpassword)
        return res.status(401).send({ message:"Invalid Email or Password"});
    const token = user.generateAuthToken();
    res.status(200).send({data:token,message:"Logged in succesfully"}); 
  }
  catch(error)
  {
    console.error(error);
    res.status(500).send({message:"Internal server error"})
  }
})
module.exports = router;