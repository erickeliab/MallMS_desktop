const express = require('express');
const router = express.Router();
const model = require('../models/index');
const fs = require('fs');
const path = require('path');




router.post('/', (req,res) => {
    var newObject = req.body;

    if (newObject) {
        model.User.findOne({ where : {'email': newObject.email}})
        .then((found) => {
            res.send(found)
            if (found.password == newObject.password){
                console.log("valid");
                res.end(found)
    
                
            }
            
        } 
        )
        .catch(err => console.log(err));
    
    
    
    }
    
})


router.post('/setsession', (req,res) => {
    var newObject = req.body;

    var writeStream = fs.createWriteStream("session.txt");
    writeStream.write(newObject.email);
    writeStream.end();

    if (newObject) {
    model.User.findOne({ where : {'email': newObject.email}})
    .then((found) => {
      
        res.send(found)
  
    } 
    )
    .catch(err => res.send(err));
    }
})


router.get('/getsession', (req,res) => {
    var newObject = req.body;

    if (newObject) {
    function readData(err, data) {
        if (newObject) {
        //res.send(data);

        model.User.findOne({ where : {'email': data}})
        .then((found) => {

        res.send(found);
        
        
    } 
    )
    .catch(err => res.send(err));
    }
}

fs.readFile('session.txt', 'utf8', readData);
    }
})


module.exports = router;