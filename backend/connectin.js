const mongoose=require ('mongoose')

mongoose.connect('mongodb+srv://aswani:aswani@cluster0.ibbkikq.mongodb.net/kmct?appName=Cluster0')
  .then(() =>{


  console.log('Connected!')})

  .catch((err)=>{
    console.log(err)

  })