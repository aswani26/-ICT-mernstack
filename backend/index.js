//import
const express=require("express")
require("./connectin")
//initialize
var stumodel=require("./model/student")
var cors=require("cors")

const app = express()
app.use(cors())

app.use(express.json())

//api creation


//add
app.post('/add',async(req,res)=>{
     await stumodel(req.body).save()
    res.send("data added")
})
//vie
app.get('/view',async(req,res)=>{
   var data= await stumodel.find()
    res.send(data)
})
//delte 
app.delete('/delete/:id',async(req,res)=>{
    await stumodel.findByIdAndDelete(req.params.id)
    res.send("data delete")
    

})
app.put('/update/:id',async(req,res)=>{
    await stumodel.findByIdAndUpdate(req.params.id,req.body)
    res.send("data update")
    
})

    


//port setting
app.listen(3004, () => {
  console.log('Server is running on http://localhost:3004')
})