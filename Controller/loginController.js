const express = require('express');
const router = express.Router();
const model = require('../models/index');




router.post('/', (req,res) => {
    var newObject = req.body;

    model.User.findOne({ where : {'email': newObject.email}})
    .then((found) => {
        res.send(found)
        if (found.password == newObject.password){
            console.log("valid");
            res.send(found)
        }
    } 
    )
    .catch(err => res.send(err));



})



module.exports = router;