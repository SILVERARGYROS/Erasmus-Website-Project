// Global variables
var fnameBool = 0;
var lnameBool = 0;
var amBool = 0;
var emailBool = 0;
var usernameBool = 0;
var passwordBool = 0;
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

function usernameCheck(){
    var username = document.getElementById("username").value;

    if(username == ""){   // If password is not filled in
        document.getElementById("usernameSpan").innerHTML = "&nbsp;";
        usernameBool = 0;
    }
    else if(username.includes(" ")){
        document.getElementById("usernameSpan").innerHTML = "&nbsp; Username must not include spaces.";
        usernameBool = 0;
    }
    else{
        if(window.XMLHttpRequest){      // for "normal" browsers...
            xmlhttp =  new XMLHttpRequest();
        } 
        else{                           // for IE6, IE5
            xmlhttp =  new ActiveXObject ("Microsoft.XMLHTTP"); 
        }
        
        xmlhttp.onreadystatechange = function() {
            if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var availability = xmlhttp.responseText;

                if(availability == "available"){
                    document.getElementById("usernameSpan").innerHTML = "&nbsp;";
                    usernameBool = 1;
                }
                else if(availability == "unavailable"){
                    document.getElementById("usernameSpan").innerHTML = "&nbsp; This username is taken. Please choose another one.";
                    usernameBool = 0;
                }
                else if(availability == "error"){   // Mostly for testing
                    document.getElementById("usernameSpan").innerHTML = "&nbsp; Error";
                    usernameBool = 0;
                }
                else{   // For testing -- This will never be executed during main operation
                    document.getElementById("usernameSpan").innerHTML = "&nbsp;" + availability;
                    usernameBool = 0;
                }
            }
        }
        
        xmlhttp.open("GET","./scripts/usernameAvailability.php?username=" + username, true);
        xmlhttp.send();
    }
}

function passwordCheck(){
    var password = document.getElementById("password").value;
    var re = /^(?=.*[!#$])[a-zA-Z0-9!#$]{5,}$/;
    
    if(password ==  ""){
        document.getElementById("passwordSpan").innerHTML = "&nbsp;";
        passwordBool = 0;
    }
    else if(password.length < 5){
        document.getElementById("passwordSpan").innerHTML = "&nbsp; Password must contain at least 5 characters.";
        passwordBool = 0;
    }
    else if(re.test(password)){
        document.getElementById("passwordSpan").innerHTML = "&nbsp;";
        passwordBool = 1;
    }
    else{
        document.getElementById("passwordSpan").innerHTML = "&nbsp; Please must contain at least 1 special character.";
        passwordBool = 0;
    }

    var confirm = document.getElementById("confirm").value;
    if(confirm ==  ""){
        document.getElementById("confirmSpan").innerHTML = "&nbsp;";
        confirmBool = 0;
    }
    else if(confirm == password){
        document.getElementById("confirmSpan").innerHTML = "&nbsp;";
        confirmBool = 1;
    }
    else{
        document.getElementById("confirmSpan").innerHTML = "&nbsp; Please enter the same password twice.";
        confirmBool = 0;
    }
}

function formCheck(){
    if(fnameBool == 0 || lnameBool == 0 || amBool == 0 || emailBool == 0 || usernameBool == 0 || passwordBool == 0 || confirmBool == 0){
        // document.getElementById("submit").value = fnameBool  + " " + lnameBool  + " " + amBool  + " " + emailBool  + " " + usernameBool  + " " + passwordBool  + " " + confirmBool; // For testing purposes
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
