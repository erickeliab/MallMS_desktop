const express = require('express');
const router = express.Router();
const model = require('../models/index');


router.get('/', (req,res) => {
    model.Sales.findAll()
    .then(data => res.send(data))
    .catch(err => console.log(err));
})

router.post('/', (req,res) => {
    var newObject = req.body;

    //inserting to the db
    model.Sales.create(newObject)
    .then(newObject => res.send(newObject))
    .catch(err => res.send(err))
})


//find one 
router.get('/:id', (req,res) => {
    model.Sales.findByPk(req.params.id)
    .then(found => res.send(found))
    .catch(err => res.send(err))
    
})


//delete
router.delete('/:id', (req,res) => {


    model.Sales.destroy({
        where: {
            id : req.params.id
        }
    }).then(found => res.send({}))
    .catch(err => res.send(err))
})

//update
router.put('/:id', (req,res) => {
    model.Sales.findByPk(req.params.id)
    .then((item) => {
      // Check if record exists in db
      if (item) {
        item.update({
            CreatedDate: req.body.CreatedDate ? req.body.CreatedDate : item.CreatedDate,
            OrderID: req.body.OrderID ? req.body.OrderID : item.OrderID,
            ProductID: req.body.ProductID ? req.body.ProductID : item.ProductID,
        })
        .then(() => res.send(item))
      }
    })
})
module.exports = router;