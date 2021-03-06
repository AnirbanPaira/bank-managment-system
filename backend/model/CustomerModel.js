const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    currentBalance:{
        type:Number
    }

},{timestamps:true})

module.exports =mongoose.model("Customer",customerSchema)