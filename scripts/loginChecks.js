// Global Variables
var usernameBool = 0;
var passwordBool = 0;

function usernameCheck(){
    var filled = document.getElementById("username").value.length;
    if(filled){
        usernameBool = 1;
    }
    else{
        usernameBool = 0;
    }
}

function passwordCheck(){
    var filled = document.getElementById("password").value.length;
    if(filled){
        passwordBool = 1;
    }
    else{
        passwordBool = 0;
    }
}

function formCheck(){
    if(usernameBool == 0 || passwordBool == 0){
        // document.getElementById("submit").value =    fusernameBool  + " " + lusernameBool  + " " + amBool  + " " + emailBool  + " " + userusernameBool  + " " + newnewPasswordBool  + " " + confirmBool; // For testing purposes
        document.getElementById("submit").disabled = true;
        document.getElementById("submit").classList.remove("form-button");
        document.getElementById("submit").classList.add("form-button-disabled");
    }
    else{
        document.getElementById("submit").disabled = false;
        document.getElementById("submit").classList.remove("form-button-disabled");
        document.getElementById("submit").classList.add("form-button");
    }
}