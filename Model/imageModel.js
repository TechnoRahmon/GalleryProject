const mongoose = require('mongoose')

const { Schema } = mongoose;

const imageSchema = new Schema({
        title:{type: String , required: true },
        caption:{type: String , required: true },
        created : {type:Date , default:Date.now }
})


module.exports = mongoose.model('Images' , imageSchema )

