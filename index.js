const express = require('express')
const app = express()
const port = 3000
//import User from './models/user';
const models = require( './models/index');

//const users = models.User.findAll();

models.User.findAll()
      .then( userResponse => {
          console.log(userResponse);
          
        //res.status( 200 ).json( userResponse )
      })
      .catch( error => {
        //res.status( 400 ).send( error )
        console.log(error);
        
      })




app.get('/',  ( req, res, next ) => {
        models.User.findAll()
          .then( userResponse => {
            res.status( 200 ).json( userResponse )
          })
          .catch( error => {
            res.status( 400 ).send( error )
          })
      } )

//console.log(users);


app.listen(port, () => console.log(`Backend running on  http://localhost:${port}`))