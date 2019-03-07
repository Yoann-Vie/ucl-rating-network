const express = require('express');
const createToken = require('../libs/auth').createToken;
const User = require('../models/user');
const bcrypt = require('bcryptjs');

const router = express.Router();

router.post('/login_check', (req, res) => {

    if(req.body.username && req.body.password){
        const token = createToken({
            username: req.body.username
        });

        User.find({username: req.body.username})
        .then((user) => {
            if(!user.length){
                bcrypt.genSalt(10, function(err, salt) {
                    bcrypt.hash("B4c0/\/", salt, function(err, hash) {
                        var user = User({
                            username: req.body.username,
                            hash: hash,
                            image: 'https://static.productionready.io/images/smiley-cyrus.jpg'
                        });
    
                        user.save(function(err) {     
                            if (err) throw err ;
                            res.send({token});
                        });  
                    });
                });    

            }
            else if(user.length){
                res.send({token});         
            }
        })
        .catch((error) => console.log('Error while retrieving user : ' + error))

    }
    else{
        res.status(400).send({
            error: "Invalid username / password "
        })
    }
})

module.exports = router;