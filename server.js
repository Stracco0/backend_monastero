const cors = require('cors')
app.use(cors())
app.get('/products/:id', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
  })
  
  app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
  })
const express = require("express")
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
async function Collegamento(){
    const MymongoClient=new MongoClient("mongodb+srv://admin:PjxuwGMAlkPGzAJX@servermongodbprovamonas.xqbrdmt.mongodb.net/ProvaMonasteroStella?retryWrites=true&w=majority")
    const data = await MymongoClient.db().collection("Eventi").find().toArray()
    app.get("/",(re,res)=>{
        return res.json("Backend")
    })
    app.get("/Ottieni_data",(req,res,next)=>{
        return res.json(data)
    })
    app.listen(8081,()=>{
        console.log("listening")
    })
}
Collegamento()