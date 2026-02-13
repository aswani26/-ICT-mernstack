//import
const express=require("express")
require("./connectin")
//initialize
const app = express()
app.use(express.json())
var stumodel=require("./model/student")
const { deleteModel } = require("mongoose")
//api creation
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/sample', (req, res) => {
  res.send('hello ')
})

//add
app. post('/add',(req,res)=>{
    stumodel(req.body).save()
    res.send("data added")
})
//view
app. get
('/view',async(req,res)=>{
   var data= await stumodel.find()
    res.send(data)
})
//delte 
app.delete('/delete/:id',async(req,res)=>{
    await stumodel. findByIdAndDelete(req.params.id)
    res.send("data delete")
    

})
app.put('/update/:id',async(req,res)=>{
    await stumodel. findByIdAndUpdate(req.params.id,req.body)
    res.send("data update")
    
})
    


//port setting
app.listen(3004, () => {
  console.log('Server is running on http://localhost:3004')
})