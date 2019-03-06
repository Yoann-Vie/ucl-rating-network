const verifyJWTToken = require('../libs/auth').verifyToken;
const User = require('../models/user')

const verifyToken = (req, res, next) => {
    if(req.path === "/login_check"){
        next();
    }
    else{
        const auth = req.get('Authorization')
        if(!auth || !auth.startsWith('Bearer')){
            res.sendStatus(401);
        }
        else{
            verifyJWTToken(auth.replace('Bearer ', ''))
                .then(userData => {
                    User.findOne({ username: userData.username }).then((user) => {
                        req.user = user;
                        next();
                    })
                })
                .catch(error => res.status(400).send({
                    error: "JWT TOKEN invalid",
                    details: error
                }))
        }
    }
}

module.exports = verifyToken;