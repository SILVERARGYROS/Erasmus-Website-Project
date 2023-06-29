// Global variables
var deadlineBool = 0;
var percentageBool = 0;
var averageBool = 0;
var english_levelBool = 0;
var extra_languagesBool = 0;
var uni1Bool = 0;
var grade_fileBool = 0;
var english_fileBool = 0;
var checkboxBool = 0;


window.onload = function() {deadline()};

function lockForm(){
    document.getElementById("percentage").disabled = true;
    document.getElementById("percentage").classList.remove('input');
    document.getElementById("percentage").classList.add('disabled-input');

    document.getElementById("average").disabled = true;
    document.getElementById("average").classList.remove('input');
    document.getElementById("average").classList.add('disabled-input');

    document.getElementById("english_level1").disabled = true;
    document.getElementById("english_level1").classList.remove('radio-button');
    document.getElementById("english_level1").classList.add('disabled-radio-button');

    document.getElementById("english_level2").disabled = true;
    document.getElementById("english_level2").classList.remove('radio-button');
    document.getElementById("english_level2").classList.add('disabled-radio-button');

    document.getElementById("english_level3").disabled = true;
    document.getElementById("english_level3").classList.remove('radio-button');
    document.getElementById("english_level3").classList.add('disabled-radio-button');

    document.getElementById("english_level4").disabled = true;
    document.getElementById("english_level4").classList.remove('radio-button');
    document.getElementById("english_level4").classList.add('disabled-radio-button');

    document.getElementById("english_level5").disabled = true;
    document.getElementById("english_level5").classList.remove('radio-button');
    document.getElementById("english_level5").classList.add('disabled-radio-button');

    document.getElementById("english_level6").disabled = true;
    document.getElementById("english_level6").classList.remove('radio-button');
    document.getElementById("english_level6").classList.add('disabled-radio-button');

    document.getElementById("extra_languages1").disabled = true;
    document.getElementById("extra_languages1").classList.remove('radio-button');
    document.getElementById("extra_languages1").classList.add('disabled-radio-button');

    document.getElementById("extra_languages2").disabled = true;
    document.getElementById("extra_languages2").classList.remove('radio-button');
    document.getElementById("extra_languages2").classList.add('disabled-radio-button');

    document.getElementById("uni1").disabled = true;
    document.getElementById("uni1").classList.remove('input');
    document.getElementById("uni1").classList.add('disabled-input');

    document.getElementById("uni2").disabled = true;
    document.getElementById("uni2").classList.remove('input');
    document.getElementById("uni2").classList.add('disabled-input');

    document.getElementById("uni3").disabled = true;
    document.getElementById("uni3").classList.remove('input');
    document.getElementById("uni3").classList.add('disabled-input');
    
    document.getElementById("grade_file").disabled = true;
    document.getElementById("grade_file").classList.remove('input');
    document.getElementById("grade_file").classList.add('disabled-input');

    document.getElementById("english_file").disabled = true;
    document.getElementById("english_file").classList.remove('input');
    document.getElementById("english_file").classList.add('disabled-input');

    document.getElementById("extra_language_files[]").disabled = true;
    document.getElementById("extra_language_files[]").classList.remove('input');
    document.getElementById("extra_language_files[]").classList.add('disabled-input');

    document.getElementById('checkbox').disabled = true;
    document.getElementById('checkmark').classList.remove('checkmark');
    document.getElementById('checkmark').classList.add('disabled-checkmark');
}

function deadline(){
    if(window.XMLHttpRequest){      // for "normal" browsers...
        xmlhttp = new XMLHttpRequest();
    } 
    else{                           // for IE6, IE5
        xmlhttp = new ActiveXObject ("Microsoft.XMLHTTP"); 
    }

    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let query = xmlhttp.responseText;

            const dates = JSON.parse(query);
            
            document.getElementById("deadlineStartInfo").innerHTML = "Έναρξη Περιόδου Υποβολής: " +  dates.deadline_start;
            document.getElementById("deadlineEndInfo").innerHTML = "Λήξη Περιόδου Υποβολής: " +  dates.deadline_end;
            
            
            // Checking if deadline has already passed 
            const currentDate = new Date();     // yyyy-mm-ddThh:mm:ss.mmmZ
            const deadlineEnd = new Date(dates.deadline_end);
            const deadlineStart = new Date(dates.deadline_start);


            // Checking if deadline has already passed first
            if(new Date(currentDate) < new Date(deadlineStart)){
                document.getElementById("timeRemaining").innerHTML = "Application period has not started yet!";
                deadlineBool = 0;
            }
            else if(new Date(currentDate) > new Date(deadlineEnd)){
                document.getElementById("timeRemaining").innerHTML = "Deadline expired!";
                deadlineBool = 0;
            }
            else{
                document.getElementById("timeRemaining").innerHTML = "There is still time left.";
                deadlineBool = 1;
            }



            if(deadlineBool == 0){
                lockForm();
            }
        }
    }
    xmlhttp.open("GET","./scripts/applicationChecks.php", true);
    xmlhttp.send();
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

function english_levelCheck(){
    var filled = document.querySelector('input[name="english_level"]:checked');
    if(filled){
       english_levelBool = 1;
    }
    else{
       english_levelBool = 0;
    }
}

function extra_languagesCheck(){
    var filled = document.querySelector('input[name="extra_languages"]:checked');
    if(filled){
       extra_languagesBool = 1;
    }
    else{
       extra_languagesBool = 0;
    }
}

function uni1Check(){
    var ddl = document.getElementById("uni1");
    var selectedValue = ddl.options[ddl.selectedIndex].value;
    if (selectedValue != "no selection")
    {
       uni1Bool = 1;
    }
    else{
        uni1Bool = 0;
    }
}

function grade_fileCheck(){
    var filled = document.getElementById("grade_file").files.length == 0;
    if(filled){
        grade_fileBool = 1;
    }
    else{
       grade_fileBool = 0;
    }
}

function english_fileCheck(){
    var filled = document.getElementById("english_file").files.length == 0;
    if(filled){
        english_fileBool = 1;
    }
    else{
       english_fileBool = 0;
    }
}

function checkboxCheck(){
    var filled = document.getElementById('checkbox').checked;
    if(filled){
        checkboxBool = 1;
    }
    else{
       checkboxBool = 0;
    }
}

function formCheck(applied){
    if(applied == true){
        lockForm();
        document.getElementById("appliedStatus").innerHTML = "You have already submitted."
        return;
    }
    else{
        document.getElementById("appliedStatus").innerHTML = "wtf";
    }

    if(deadlineBool == 0 || percentageBool == 0 || averageBool == 0 || english_levelBool == 0 || extra_languagesBool == 0 || uni1Bool == 0 || grade_fileBool == 0 || english_fileBool == 0 || checkboxBool == 0){
        document.getElementById("submit").value = deadlineBool + " " + percentageBool + " " + averageBool + " " + english_levelBool + " " + extra_languagesBool + " " + uni1Bool + " " + grade_fileBool + " " + english_fileBool + " " + checkboxBool
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