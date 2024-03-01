const jwt = require('jsonwebtoken')

module.exports = function(req, res, next){
    if(req.method === "OPTIONS"){
        next()
    }
    try{
        const token = req.headers.authorization.split(' ')[1]
        if(!token){
            return res.status(401).json({message: 'Not authorized'})
        }
        req.user_info = jwt.verify(token, process.env.JWT_SECRET_KEY)
        next();

    } catch(e){
        res.status(401).json({message: 'Not authorized'})
    }
}