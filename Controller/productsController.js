const express = require('express');
const router = express.Router();
const model = require('../models/index');
const Supplier = require('../models/supplier');
const Category = require('../models/category');


router.get('/', (req,res) => {
    model.Product.findAll()
    .then(data => res.send(data))
    .catch(err => console.log(err));
})

router.post('/', (req,res) => {


    var newObject = req.body;
    console.log(newObject);

     //inserting to the db
     model.Category.create(newObject)
     .then(newcategory => 
        {
            model.Supplier.create(newObject)
            .then(newsupplier => 
               {
                   newObject.CategoryID = newcategory.id;
                   newObject.SupplierID = newsupplier.id;
                   //inserting to the db
                   console.log(newObject);
                   
                   model.Product.create(newObject)
                   .then(prod => {
                            newObject.ProductId = prod.id;
                            newObject.TotalPrice = newObject.price * newObject.quantity;
                            model.Inventory.create(newObject)
                            
                            .then(newObject => res.send(newObject))
                            .catch(err => res.send(err))
                   })
                   .then(newObject => res.send(newObject))
                   .catch(err => res.send(err))
               })
            .catch(err => res.send(err))
        })
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
            name: req.body.name ? req.body.name : item.name,
            price: req.body.price ? req.body.price : item.price,
            Description: req.body.Description ? req.body.Description : item.Description,
            
        })
        .then((pr) => {
            model.Inventory.findOne({ where : {'ProductId' : req.params.id }})
                            
            .then(inv => {
                if (inv) {
                    inv.update({
                        quantity : req.body.quantity ? Number(inv.quantity) + Number(req.body.quantity) : inv.quantity,
                        TotalPrice : Number(req.body.price) * (Number(inv.quantity) + Number(req.body.quantity)),
                    })
                }
            })
            .catch(err => res.send(err))
        })
        .then(() => res.send(item))
      }
    })
})
module.exports = router;