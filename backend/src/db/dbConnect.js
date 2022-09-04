const mongoose = require('mongoose');
require('dotenv').config()

                 console.log(process.env.DB_URL);

const dbConnect = () => {
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connection sucessfully...'))
    .catch(error => console.log(`unable to connect with database. Error => ${error}`))
} 

module.exports = dbConnect;