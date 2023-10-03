const express = require("express")
// const refMysql = require("mysql2")
// const bodyParser = require("body-parser")

const app = express()
const port = 6060
app.listen(port,()=>{
    console.log("Server is running on port 1234")
})

app.get('/myData',async(req,res)=>{
    res.send(`Hi people ! What's up ?`)
})

app.get('/myData/:num1/:num2',async(req,res)=>{
    let number1 = parseInt(req.params.num1)
    let number2 = parseInt(req.params.num2)
    let sum = req.params.num1 + req.params.num2
    res.send(`My name is ${sum}`)
})

