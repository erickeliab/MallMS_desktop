//const bcrypt = require('bcrypt');
const { ipcRenderer } = require('electron');



const submitRegistration = (e) => {
   
    
//getting data from the form 
    var firstName = document.forms["register"]["firstName"].value;
    var lastName = document.forms["register"]["lastName"].value;
    var email = document.forms["register"]["email"].value;
    var phone = document.forms["register"]["phone"].value;
    var password = document.forms["register"]["password"].value;
    var password2 = document.forms["register"]["password2"].value;
    
    var role;
    getCheckedRadio();
//getting data from radio buttons
    function getCheckedRadio() {
              var radioButtons = document.getElementsByName("role");
              for (var x = 0; x < radioButtons.length; x ++) {
                if (radioButtons[x].checked) {
                  role = radioButtons[x].id;
                }
              }
              return false;
            }


//validating the form
    if ( firstName == "" || lastName == "" || email == "" ||  phone == "" || password == "" || password2 == ""){
        alert("You must fill all fields in this form");
        return false;
      }
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (! email.match(mailformat)){
          alert("You must provide a valid mail  i.e test@example.etc");
          return false;
      }
    if (password2 != password) {
        alert("Passwords didnot match");
      return false;
    }
//hashind password
// let hashedPassword = bcrypt.v4(password);

//registering and authenticating the user
const newUser = {
    firstName,
    lastName,
    email,
    password,
    phone,
    type : role
    
}
//redirecting the user

//console.log(ipcRenderer.sendSync('register:user', newUser));

// window.location.replace("http://");
var taken = false;
fetch('http://localhost:3000/api/users')
  .then(response => response.json())
  .then(data => {
    data.forEach(user => {
      if (user.email == email){
        console.log('Email is already taken'); 
        
        taken = true;
        alert("Email is already taken");
        return false;
      }
    });

    if(taken == false){
      postData('http://localhost:3000/api/register', newUser)
      .then(data => {
        alert(`Welcome ${data.firstName}, registration successfull. Press OK to proceed to go to Login`);
        ipcRenderer.sendSync('register:user', newUser);
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