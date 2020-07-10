const express = require('express');
const router = express.Router();
const model = require('../models/index');


router.get('/', (req,res) => {
    model.Supplier.findAll()
    .then(data => res.send(data))
    .catch(err => console.log(err));
})

router.post('/', (req,res) => {
    var newObject = req.body;

    //inserting to the db
    model.Supplier.create(newObject)
    .then(newObject => res.send(newObject))
    .catch(err => res.send(err))
})


//find one 
router.get('/:id', (req,res) => {
    model.Supplier.findByPk(req.params.id)
    .then(found => res.send(found))
    .catch(err => res.send(err))
    
})


//delete
router.delete('/:id', (req,res) => {


    model.Supplier.destroy({
        where: {
            id : req.params.id
        }
    }).then(found => res.send({}))
    .catch(err => res.send(err))
})

//update
router.put('/:id', (req,res) => {
    model.Supplier.findByPk(req.params.id)
    .then((item) => {
      // Check if record exists in db
      if (item) {
        item.update({
            Name: req.body.Name ? req.body.Name : item.Name,
            Phone: req.body.Phone ? req.body.Phone : item.Phone,
            Adress: req.body.Adress ? req.body.Adress : item.Adress
        })
        .then(() => res.send(item))
      }
    })
})
module.exports = router;