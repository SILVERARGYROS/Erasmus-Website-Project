// Global variables
var newPasswordBool = 0;
var confirmBool = 0;

function fnameCheck(){
    var fname = document.getElementById("fname").value;
    var re = /^[a-zA-Z]+$/;

    if(fname.length < 1){
        document.getElementById("fnameSpan").innerHTML = "&nbsp;";
        fnameBool = 0;
    }
    else if(re.test(fname)){
        document.getElementById("fnameSpan").innerHTML = "&nbsp;";
        fnameBool = 1
    }
    else{
        document.getElementById("fnameSpan").innerHTML = "&nbsp; Please enter a valid first name.";
        fnameBool = 0;
    }
 }

function lnameCheck(){
    var lname = document.getElementById("lname").value;
    var re = /^[a-zA-Z]+$/;

    if(lname ==  ""){
        document.getElementById("lnameSpan").innerHTML = "&nbsp;";
        lnameBool = 0;
    }
    else if(re.test(lname)){
        document.getElementById("lnameSpan").innerHTML = "&nbsp;";
        lnameBool = 1;
    }
    else{
        document.getElementById("lnameSpan").innerHTML = "&nbsp; Please enter a valid last name.";
        lnameBool = 0;
    }
}

function amCheck(){
    var am = document.getElementById("am").value;
    var re = /^(2022|2024|2026)([0-9]{9})$/;
    
    if(am ==  ""){
        document.getElementById("amSpan").innerHTML = "&nbsp;";
        amBool = 0;
    }
    else if(re.test(am)){
        document.getElementById("amSpan").innerHTML = "&nbsp;";
        amBool = 1;
    }
    else{
        document.getElementById("amSpan").innerHTML = "&nbsp; Please enter a valid am.";
        amBool = 0;
    }
}

function emailCheck(){
    var email = document.getElementById("email").value;
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email ==  ""){
        document.getElementById("emailSpan").innerHTML = "&nbsp;";
        emailBool = 0;
    }
    else if(re.test(email)){
        document.getElementById("emailSpan").innerHTML = "&nbsp;";
        emailBool = 1;
    }
    else{
        document.getElementById("emailSpan").innerHTML = "&nbsp; Please enter a valid email address.";
        emailBool = 0;
    }
}

function formCheck(){
    if(fnameBool == 0 || lnameBool == 0 || amBool == 0 || emailBool == 0){
        // document.getElementById("submit").value =    fnameBool  + " " + lnameBool  + " " + amBool  + " " + emailBool  + " " + usernameBool  + " " + newPasswordBool  + " " + confirmBool; // For testing purposes
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
