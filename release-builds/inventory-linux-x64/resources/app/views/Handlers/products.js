//const bcrypt = require('bcrypt');
const { ipcRenderer, nativeImage } = require('electron');



const submitProduct = (e) => {
   
    
//getting data from the form 
    var name = document.forms["addproduct"]["name"].value;
    var quantity = document.forms["addproduct"]["quantity"].value;
    var supplier = document.forms["addproduct"]["supplier"].value;
    var price = document.forms["addproduct"]["price"].value;
    var category = document.forms["addproduct"]["category"].value;
    var Description = document.forms["addproduct"]["description"].value;
   
   



//validating the form
    if ( name == "" || quantity == "" || supplier == "" ||  price == "" || category == "" || Description == ""){
        alert("You must fill all fields in this form");
        return false;
      }
     
      var numbers = /^[+]?[0-9]+$/;
      if (! price.match(numbers)){
          alert("You must provide a valid Price in numbers");
          return false;
      }

      if (! quantity.match(numbers)){
          alert("You must provide a Quantity in numbers");
          return false;
      }
//registering and authenticating the user


const newProduct =  {
    name,
    price,
    Description,
    Name : supplier,
    Type : category,
    quantity,
  }


var taken = false;
var temp = "";
fetch('http://localhost:3000/api/products')
  .then(response => response.json())
  .then(data => {
    data.forEach(product => {
      if (product.name == name){
        
        
        taken = true;
        temp = product.id;
       
        return true;
      }
    });

    if(taken == false){
      
      console.log("not present")
      postData('http://localhost:3000/api/products',newProduct)
      .then(data => {
        ipcRenderer.send('product:created', newProduct);
        alert(`Product Created`);
      })
      .catch(err => {
        alert(`Product Created`);
      })

    }

    if(taken == true){
      console.log("present")
      putData(`http://localhost:3000/api/products/${temp}`,newProduct)
      .then(data => {
        alert(`Product Updated`);
      });

    }
   
    return false;
  }
  );

//  Check if email is already in the database


async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}


async function putData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}



return (false);
}

