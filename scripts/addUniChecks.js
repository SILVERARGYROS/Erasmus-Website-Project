// Global Variables
var nameBool = 0;
var countryBool = 0;

function nameCheck(){
    var filled = document.getElementById("name").value.length;
    if(filled){
        nameBool = 1;
    }
    else{
        nameBool = 0;
    }
}

function countryCheck(){
    var filled = document.getElementById("country").value.length;
    if(filled){
        countryBool = 1;
    }
    else{
        countryBool = 0;
    }
}

function formCheck(){
    if(nameBool == 0 || countryBool == 0){
        // document.getElementById("submit").value =    fnameBool  + " " + lnameBool  + " " + amBool  + " " + emailBool  + " " + usernameBool  + " " + newnewPasswordBool  + " " + confirmBool; // For testing purposes
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