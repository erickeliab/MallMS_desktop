const express = require('express');
const router = express.Router();
const model = require('../models/index');


router.get('/', (req,res) => {
    model.Product.findAll()
    .then(data => res.send(data))
    .catch(err => console.log(err));
})

router.post('/', (req,res) => {
    var newObject = req.body;

    //inserting to the db
    model.Product.create(newObject)
    .then(newObject => res.send(newObject))
    .catch(err => res.send(err))
})


//find one 
router.get('/:id', (req,res) => {
    model.Product.findByPk(req.params.id)
    .then(found => res.send(found))
    .catch(err => res.send(err))
    
})



//delete
router.delete('/:id', (req,res) => {
    model.Product.destroy({
        where: {
            id : req.params.id
        }
    }).then(found => res.send({}))
    .catch(err => res.send(err))
})



//update
router.put('/:id', (req,res) => {
    model.Product.findByPk(req.params.id)
    .then((item) => {
      // Check if record exists in db
      if (item) {
        item.update({
            Name: req.body.Name ? req.body.Name : item.Name,
            Description: req.body.Description ? req.body.Description : item.Description,
            
        })
        .then(() => res.send(item))
      }
    })
})
module.exports = router;