var mongoose = require('mongoose');

var addtaskschema = new mongoose.Schema({
    task_name:{
        type:String
    },
    user_id:{
        type:String
    }
})

module.exports = mongoose.model('alltask',addtaskschema)