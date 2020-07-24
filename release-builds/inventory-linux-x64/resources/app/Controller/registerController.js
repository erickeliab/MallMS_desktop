const express = require('express');
const router = express.Router();
const model = require('../models/index');



router.post('/', (req,res) => {
    var newObject = req.body;

    //inserting to the db
    model.User.create(newObject)
    .then(newObject => res.send(newObject))
    .catch(err => res.send(err))
})


module.exports = router;