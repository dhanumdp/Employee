const mongoose =require('mongoose');
//declaring model for our db

var Employee = mongoose.model('Employee',{
    name:{type: String},
    position:{type: String},
    office:{type: String},
    salary:{type: Number}

});
//exporting the model created
module.exports={ Employee } ;