const cors = require('cors')
const express = require("express")
const { MongoClient, ServerApiVersion } = require('mongodb');
const { restart } = require('nodemon');
const { reset } = require('nodemon/lib/utils');
const app = express()
app.use(cors())
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