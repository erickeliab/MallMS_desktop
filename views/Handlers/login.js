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




//redirecting the user


ipcRenderer.sendSync('user:login', newUser);



return (false);
}
