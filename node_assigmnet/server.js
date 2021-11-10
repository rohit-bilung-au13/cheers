const express = require('express')
const payloadCheck = require('payload-validator')
const app = express()
const PORT = 1000
var user={
    "name":"",
    "age":0
}
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("hello")
})

app.post('/',(req,res)=>{
    var name = req.body.name
    var age = req.body.age
    if(name && age){
        var result = payloadCheck.validator(req.body, user, ["name","age"], false);
        if(result.success){
            res.json({"message":"its valid"})
        }else{
            res.json({"message": result.response.errorMessage})
        }
    }else{
        res.json({"message":"payload not correct"})
    }
})

app.listen(PORT,()=>{
    console.log("server started "+PORT)
})