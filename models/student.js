const mongoose = require('mongoose')
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dept: {
        type: String,
        required: true

    },
    college: {
        type: String,
        required: true
    },
    year :{
        type: String,
        required: true
    }
})
module.exports=mongoose.model('pooja',studentSchema)