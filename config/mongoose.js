const mongoose = require('mongoose');
mongoose.set('strictQuery', true)

mongoose.connect('mongodb://127.0.0.1:27017/employeereviewsystem')
      

const db = mongoose.connection

db.on('error', console.error.bind(console, 'error connecting to database'));

db.once('open', ()=>{
    console.log("successfully connected to database : mongoDB");
});

module.exports = mongoose;





