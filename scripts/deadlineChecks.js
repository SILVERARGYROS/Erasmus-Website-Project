// Global variables
var date_startBool = 0;
var date_endBool = 0;

function date_startCheck(){
    var filled = document.getElementById("date_start").value.length;
    if(filled){
        date_startBool = 1;
    }
    else{
        date_startBool = 0;
    }
}

function date_endCheck(){
    var filled = document.getElementById("date_end").value.length;
    if(filled){
        date_endBool = 1;
    }
    else{
        date_endBool = 0;
    }
}

function formCheck(){
    startDate = document.getElementById("date_start").value;
    endDate = document.getElementById("date_end").value;

    var valid_period = new Date(startDate).getTime() <= new Date(endDate).getTime();
    // document.getElementById("submit").value = valid_period; // For testing purposes

    if(!valid_period){
        document.getElementById("date_endSpan").innerHTML = "&nbsp; Invalid expiration date.";
    }
    else{
        document.getElementById("date_endSpan").innerHTML = "";
    }


    if(date_startBool == 0 || date_endBool == 0 || !valid_period){
        document.getElementById("submit").disabled = true;
        document.getElementById("submit").classList.remove("form-button");
        document.getElementById("submit").classList.add("form-button-disabled");
    }
    else{
        document.getElementById("date_endSpan").innerHTML = "";

        document.getElementById("submit").disabled = false;
        document.getElementById("submit").classList.remove("form-button-disabled");
        document.getElementById("submit").classList.add("form-button");
    }
}