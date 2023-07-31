const mongoose = require('mongoose');
mongoose.set('strictQuery', true)

mongoose.connect('process.env.DB');
      

const db = mongoose.connection

db.on('error', console.error.bind(console, 'error connecting to database'));

db.once('open', ()=>{
    console.log("successfully connected to database : mongoDB");
});

module.exports = mongoose;





