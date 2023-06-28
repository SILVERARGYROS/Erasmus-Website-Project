var currentPasswordBool = 0;
var newPasswordBool = 0;
var confirmBool = 0;

function currentPasswordCheck(){    
    var currentPassword = document.getElementById("currentPassword").value;
    
    if(currentPassword ==  ""){
        currentPasswordBool = 0;
    }
    else{
        currentPasswordBool = 1;
    }
}



function newPasswordCheck(){
    var newPassword = document.getElementById("newPassword").value;
    var re = /^(?=.*[!#$])[a-zA-Z0-9!#$]{5,}$/;
    
    if(newPassword ==  ""){
        document.getElementById("newPasswordSpan").innerHTML = "&nbsp;";
        newPasswordBool = 0;
    }
    else if(newPassword.length < 5){
        document.getElementById("newPasswordSpan").innerHTML = "&nbsp; New password must contain at least 5 characters.";
        newPasswordBool = 0;
    }
    else if(re.test(newPassword)){
        document.getElementById("newPasswordSpan").innerHTML = "&nbsp;";
        newPasswordBool = 1;
    }
    else{
        document.getElementById("newPasswordSpan").innerHTML = "&nbsp; Password must contain at least 1 special character.";
        newPasswordBool = 0;
    }

    var confirm = document.getElementById("confirm").value;
    if(confirm ==  ""){
        document.getElementById("confirmSpan").innerHTML = "&nbsp;";
        confirmBool = 0;
    }
    else if(confirm == newPassword){
        document.getElementById("confirmSpan").innerHTML = "&nbsp;";
        confirmBool = 1;
    }
    else{
        document.getElementById("confirmSpan").innerHTML = "&nbsp; Please enter the same password twice.";
        confirmBool = 0;
    }
}

function formCheck(){
    if(currentPasswordBool == 0 || newPasswordBool == 0 || confirmBool == 0){
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