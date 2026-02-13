const mongoose=require ('mongoose')

var schema= mongoose.Schema({
    Name:String,
    Age:Number,
    Department:String,
    Mark:Number
})
 var student1model=mongoose.model("student",schema)
 module.exports=student1model