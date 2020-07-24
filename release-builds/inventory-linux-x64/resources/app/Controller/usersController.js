const express = require('express');
const router = express.Router();
const model = require('../models/index');


router.get('/', (req,res) => {
    model.User.findAll()
    .then(data => res.send(data))
    .catch(err => console.log(err));
})

router.post('/', (req,res) => {
    var newObject = req.body;

    //inserting to the db
    model.User.create(newObject)
    .then(newObject => res.send(newObject))
    .catch(err => res.send(err))
})


//find one 
router.get('/:id', (req,res) => {
    model.User.findByPk(req.params.id)
    .then(found => res.send(found))
    .catch(err => res.send(err))
    
})


//delete
router.delete('/:id', (req,res) => {


    model.User.destroy({
        where: {
            id : req.params.id
        }
    }).then(found => res.send({}))
    .catch(err => res.send(err))
})

//update
router.put('/:id', (req,res) => {
    model.User.findByPk(req.params.id)
    .then((item) => {
      // Check if record exists in db
      if (item) {
        item.update({
            firstName: req.body.firstName ? req.body.firstName : item.firstName,
            lastName: req.body.lastName ? req.body.lastName : item.lastName,
            email: req.body.email ? req.body.email : item.email,
            password: req.body.password ? req.body.password : item.password,
            phone: req.body.phone ? req.body.phone : item.phone,
            RoleID: req.body.RoleID ? req.body.RoleID : item.RoleID,
        })
        .then(() => res.send(item))
      }
    })
})
module.exports = router;