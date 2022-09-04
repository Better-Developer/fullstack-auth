const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please provide an Email address'],
        unique: [true, 'Email exists']
    },

    password: {
        type: String,
        rewuired: [true, 'Please provide a password']
    }
})

module.exports = module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);







