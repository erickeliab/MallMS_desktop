//const bcrypt = require('bcrypt');
const { ipcRenderer } = require('electron');

const submitRegistration = (e) => {
   
    
//getting data from the form 
    var firstname = document.forms["register"]["firstname"].value;
    var lastname = document.forms["register"]["lastname"].value;
    var email = document.forms["register"]["email"].value;
    var password = document.forms["register"]["password"].value;
    var password2 = document.forms["register"]["password2"].value;
    getCheckedRadio();
    var role;
   
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
    if ( firstname == "" || lastname == "" || email == "", password == "", password2 == ""){
        alert("You must fill all fields in this form");
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
    firstname,
    lastname,
    email,
    password,
    role
}

//redirecting the user

console.log(ipcRenderer.sendSync('register:user', newUser));

// window.location.replace("http://");

return (false);
}