const ApiError = require('../errors/index')

module.exports = function(err, req, res, next){
    console.log("lol 500")
    if( err instanceof ApiError){
        console.log(err.message)
        return res.status(err.status).json(typeof err.message === 'object' ? err.message : {message: err.message})
    }

    return res.status(500).json(err ? {message: err.toString()} : {message: "Unexpected errors"})
}