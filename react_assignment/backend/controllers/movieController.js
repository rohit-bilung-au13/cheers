const movies = require('../movies.js')

const movieList = (req,res)=>{
    res.send(movies)
    console.log(movies)
}

module.exports = movieList;