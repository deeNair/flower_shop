const mongoose= require('mongoose');

const flowerSchema= new mongoose.Schema({
    name:{type:String,required:true},
    color:{type:String,required:true},
    readyToBloom:{type:Boolean}
});

//connect Flower with flowerschema to create mongoose model
const Flower = mongoose.model('Flower',flowerSchema);

module.exports = Flower;