//const bcrypt = require('bcrypt');
const { ipcRenderer } = require('electron');

const submitLogin = (e) => {
   
    
//getting data from the form 

    var email = document.forms["loginform"]["email"].value;
    var password = document.forms["loginform"]["password"].value;

  
    
    //validating the form
    if ( email == "", password == ""){
        alert("You must fill all fields in this form");
        return false;
    }
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (! email.match(mailformat)){
        alert("You must provide a valid mail  i.e test@example.etc");
        return false;
    }

//hashind password
// let hashedPassword = bcrypt.v4(password);

//registering and authenticating the user
const newUser = {
    email,
    password
}

                  fetch('http://localhost:3000/api/login/getsession')
                  .then(response => response.json())
                  .then(data => {
                        console.log(data);
                        
                    })


var taken = false;
fetch('http://localhost:3000/api/users')
  .then(response => response.json())
  .then(data => {
    data.forEach(user => {
        
      if (user.email == email){
      
        
        taken = true;
        
      }
    });

    if(taken == false){       
        alert("This email is not valid");
        return false; 
      }


    if(taken == true){
      postData('http://localhost:3000/api/login', newUser)
      .then(data => {
            if (data.password !== password){
                alert("Password is incorrect");
                 return false;  
            }

            if (data.password == password){
                alert(`Welcome ${data.firstName}, you are now authenticated. Press OK to proceed`);
                
                
                //setting session
                postData('http://localhost:3000/api/login/setsession', newUser)
                .then(data => {
                  
                  ipcRenderer.sendSync('user:login', newUser);
                  
                });
                return false;  
            }
      });
      
    }
   
    return false;
  }
  );



//redirecting the user





async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
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
