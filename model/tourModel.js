const mongoose = require('mongoose');

const tourScheme = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name kirit uka '],
    unique:true,
    trim:true,
    
  },
  duration:{
      type:Number,
      required:[true,"siz duration kiritmadingiz"]
  },
  maxGroupSize:{
      type:Number,
      required:[true,"siz maxGroupSize  kiritmadingiz"]

  },
difficulty:{
    type:String,
    required:[true,"siz diffulclty kiritmadingi"]
},
ratingsAverage:{
type:Number,
default:4.5
}
,
 ratingsQuantity:{
     type:Number,
     default:0
 } ,
 price:{
     type:Number,
     required:[true,"siz price  kiritmadingiz"]
 }
 ,
 summary:{
     type:String,
     trim:true,
     required:[true,"siz summary kiritmadingiz"]
 }
 ,
 description:{
     type:String,
     trim:true,
     required:[true,"si desc kiritmadingiz"]

 }
 ,
 imageCover:{
     type:String,
     required:[true,"siz image kiritmadungiz"]
 }
 ,
 images:[String]
 ,
startDates:[Date]
 ,

createAt:{
    type:Date,
    default:Date.now()
}
 ,
  age: {
    type: Number,
  },
});

const Tour = mongoose.model('user', tourScheme);
module.exports = Tour;
