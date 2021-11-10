const express = require('express');
const app = express();
const PORT = 5000;

const movieRoutes = require('./routes/movieRoute')

app.get('/', (req,res)=>{
    res.send("server started")
})

app.use('/api/movies', movieRoutes)

app.listen(PORT,()=>{
    console.log("server listening on port "+ PORT)
});