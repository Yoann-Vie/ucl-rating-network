const express = require('express');
const createToken = require('../libs/auth').createToken;

const router = express.Router();

router.post('/login_check', (req, res) => {

    if(req.body.username === 'user' && req.body.password === "pass"){
        const token = createToken({
            fisrtName: "user",
            lastName: "user"
        });

        res.send({token});
    }
    else{
        res.status(400).send({
            error: "Invalid username / passwd "
        })
    }
})

module.exports = router;