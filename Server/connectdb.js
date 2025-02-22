const mongoose = require('mongoose');
const { Schema } = mongoose;

const connect =  async () => { 
    try{
        await mongoose.connect(process.env.DB,)
        console.log("Database Connected")
    }
    catch(err)
    {
        console.log(`Unable to connect to database because of the error ${err}`)
    }
    
}
module.exports = connect;