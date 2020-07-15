//const bcrypt = require('bcrypt');
const { ipcRenderer } = require('electron');
var sel = document.getElementById('productOptions');
var qtsel =  document.getElementById('quantityOptions');
var cat = document.getElementById('cartTable');
var ttl = document.getElementById('total');
// var pressorder = ducument.getElementById('pressOrder');

let catData = [];
let cartTotal = 0;
let totalprice = 0;

window.onload = (e) => {
  //retrieve products from the server
  fetch('http://localhost:3000/api/products')
  .then(response => response.json())
  .then(data => {
    data.forEach(product => {
      
      var opt = document.createElement('option');
      //apend the options
      opt.appendChild( document.createTextNode(` ${product.name}  `));

      // set value property of opt
      opt.value = product.id; 

      // add opt to end of select box (sel)
      sel.appendChild(opt); 
     
    });


    for (let prod = 1; prod <= data.length; prod++) {
      
      
      var opti = document.createElement('option');
      //apend the options
      opti.appendChild( document.createTextNode(prod));

      // set value property of opt
      opti.value = prod; 

      // add opt to end of select box (sel)
      qtsel.appendChild(opti); 
    }

    return false;
  })
  

  console.log("window loads");
    
}
const clearCart = (e) => {
 
  catData.length = 0;
 cat.innerHTML = "";
 ttl.innerHTML = "";
}

const pressOrder = (e) => {
  if(catData.length == 0){
    alert('You dont have any products in Cat');
  }
  if (!catData.length == 0){
    let totalprice = 0;
    catData.forEach(singleitem => {
      let temp = Number(singleitem.data.price) * Number(singleitem.quantity);
      totalprice += temp;
    });
    //press an order here
    let newOrder = {
      Paid : true,
      TotalPrice : totalprice,
      UserID : 1
    }
    
    postData('http://localhost:3000/api/orders',newOrder)
    .then(data => {

    // console.log(catData);
    // console.log(newOrder);
    // console.log(data);

      alert(`Order Created`);
      //inserting the sales
      catData.forEach(catInstance => {

        var newSale = {
          ProductID : catInstance.data.id,
          OrderID : data.id
        }
        
        postData('http://localhost:3000/api/sales',newSale)
        .then(salle => { return true })
      });


      //inventory transactions
      fetch('http://localhost:3000/api/inventories')
      .then(response => response.json())
      .then(inventories => {
        
        inventories.forEach(inventItem => {

          //update if product id is the same
          catData.forEach(catd => {
            

            if (Number(inventItem.ProductId) == Number(catd.data.id)){
              //console.log(inventItem);
              //update the quantities

              var updateInventory = {
                quantity : Number(inventItem.quantity) - Number(catd.quantity)
              }
                console.log(catd.quantity);
                
              putData(`http://localhost:3000/api/inventories/${inventItem.id}`,updateInventory)
              .then(data => {
                return false;
              })
              .catch(err => {
                putData(`http://localhost:3000/api/inventories/${inventItem.id}`,updateInventory)
                .then(data => {
                return false;
              });
              })
            }

          });
          totalprice = 0;
          catData.length = 0;
          clearCart()
        });
      })


      return false;
    })
    .catch(err => {
      alert(`Failed`);
    })
    

  }
  return false;
}

const submitSale = (e) => {
  var product = document.forms["sale"]["product"].value;
  var quantity = document.forms["sale"]["quantity"].value;

    var valid = true;
   //check if the items are available  
   fetch(`http://localhost:3000/api/inventories`)
   .then(response => response.json())
   .then(da => {

      da.forEach(d => {
          if (d.ProductId == product){
            var qty = 0;
            catData.forEach(cd => {

              if (cd.data.id == product){

                  qty += cd.quantity
              }

            });

              if (Number(d.quantity) < (Number(quantity) + Number(qty))){
                  valid = false;
                  alert(`The stock cant afford your request, remained ${d.quantity} items`);
                  return false;
              }

              if (Number(d.quantity) >= Number(quantity)){
               
                
                 //fetch
            fetch(`http://localhost:3000/api/products/${product}`)
            .then(response => response.json())
            .then(data => {
              // console.log({data,quantity});

              
                
                var tr = document.createElement('tr');
                var item = document.createElement('td');
                var price = document.createElement('td');
                var qtt = document.createElement('td');

                
                // set value property of opt
                item.appendChild( document.createTextNode(data.name));
                price.appendChild( document.createTextNode(data.price));
                qtt.appendChild( document.createTextNode(quantity));
                
                tr.appendChild(item);
                tr.appendChild(price);
                tr.appendChild(qtt);

              
                // add opt to end of select box (sel)
                cat.appendChild(tr); 
                catData.push({data,quantity});
              
                if (!catData.length == 0){
                  
                  catData.forEach(singleitem => {
                    let temp = Number(singleitem.data.price) * Number(singleitem.quantity);
                    totalprice += temp;
                  })
                  ttl.innerHTML = "";
                  ttl.append( document.createTextNode(totalprice));

                }
        

      // console.log(catData);
      
  })
                return false;
            }
          }
      });
   })

   if(valid == true){

   
 
  
} 



  
return (false);
}

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