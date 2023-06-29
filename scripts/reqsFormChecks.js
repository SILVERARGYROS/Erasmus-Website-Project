// Global variables
var studyYearBool = 0;
var percentageBool = 0;
var averageBool = 0;
var englishLevelBool = 0;

function studyYearCheck(){
    var filled = document.getElementById("studyYear").value.length;
    if(filled){
        studyYearBool = 1;
    }
    else{
        studyYearBool = 0;
    }
}

function percentageCheck(){
    var filled = document.getElementById("percentage").value.length;
    if(filled){
        percentageBool = 1;
    }
    else{
        percentageBool = 0;
    }
}

function averageCheck(){
    var filled = document.getElementById("average").value.length;
    if(filled){
        averageBool = 1;
    }
    else{
        averageBool = 0;
    }
}
function englishLevelCheck(){
    var filled = document.querySelector('input[name="englishLevel"]:checked');
    if(filled){
       englishLevelBool = 1;
    }
    else{
       englishLevelBool = 0;
    }
}

function formCheck(){
    if(studyYearBool == 0 || percentageBool == 0 || averageBool == 0 || englishLevelBool == 0){
        // document.getElementById("submit").value =    fnameBool  + " " + lnameBool  + " " + amBool  + " " + emailBool  + " " + usernameBool  + " " + passwordBool  + " " + confirmBool; // For testing purposes
        document.getElementById("submit").disabled = true;
        document.getElementById("submit").classList.remove("form-button");
        document.getElementById("submit").classList.add("form-button-disabled");
    }
    else{
        document.getElementById("submit").disabled = false;
        document.getElementById("submit").classList.remove("form-button-disabled");
        document.getElementById("submit").classList.add("form-button");
    }
    document.getElementById("message").innerHTML = "&nbsp;";
}

function reqsCheck(){
    var studyYearValue = document.getElementById("studyYear").value;
    var percentageValue = document.getElementById("percentage").value;
    var averageValue = document.getElementById("average").value;
    var englishLevelValue = document.getElementById("englishLevel").value;
    // var filled = document.querySelector('input[name="englishLevel"]:checked');

    var condition = (studyYearValue >= 2) && (percentageValue >= 70) && (averageValue >= 6.50) && (englishLevelValue >= 4);
    if(condition){
        document.getElementById("message").innerHTML = "&nbsp; High chance of being accepted";
        document.getElementById("message").style.color = "green";
    }
    else{
        document.getElementById("message").innerHTML = "&nbsp; Low chance of being accepted";
        document.getElementById("message").style.color = "red";
    }
}