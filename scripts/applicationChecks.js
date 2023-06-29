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
            
            document.getElementById("deadlineInfo").innerHTML = "Προθεσμία Υποβολής: " + dates.deadline_end;
            
            
            // Checking if deadline has already passed 
            const currentDate = new Date();     // yyyy-mm-ddThh:mm:ss.mmmZ
            const deadlineDate = new Date(dates.deadline_end);


            // Checking if deadline has already passed first
            if(new Date(currentDate).getTime() > new Date(deadlineDate).getTime()){
                document.getElementById("timeRemaining").innerHTML = "DeadLine has expired!";
                deadlineBool = 0;
                return;
            }

            // Calculating remaining time
            var timeDiff = (new Date(deadlineDate).getTime() - new Date(currentDate).getTime());
            var years = Math.floor(timeDiff / 31540000000);
            var months = Math.floor(timeDiff / 31540000000 / 2628000000);
            var days = Math.floor(timeDiff / 31540000000 / 2628000000 / 86400000);
            var hours = Math.floor(timeDiff / 31540000000 / 2628000000 / 86400000 / 3600000);
            var minutes = Math.ceil(timeDiff / 31540000000 / 2628000000 / 86400000 / 3600000 / 60000);


            // Generating remaining time strings
            var remYears;
            var remMonths;
            var remDays;
            var remHours;
            var remMinutes;


            if(years == 1){
                remYears = ", 1 χρόνος";
            }
            else if(years > 1){
                remYears = ", " +  years + " χρόνια";
            }
            else{
                remYears = "";
            }

            if(months == 1){
                remMonths = ", 1 μήνας";
            }
            else if(months > 1){
                remMonths = ", " + months + " μήνες";
            }
            else{
                remMonths = "";
            }

            if(days == 1){
                remDays = ", 1 ημέρα";
            }
            else if(days > 1){
                remDays = ", " + days + " ημέρες";
            }
            else{
                remDays = "";
            }

            if(hours == 1){
                remHours = ", 1 ώρα";
            }
            else if(hours > 1){
                remHours = ", " + hours + " ώρες";
            }
            else{
                remHours = "";
            }
            
            if(minutes == 1){
                remMinutes = "1 λεπτό";
            }
            else if(minutes > 1){
                remMinutes = ", " + minutes + " λεπτά";
            }
            else{
                remMinutes = "";
            }

            "year=" + years + "&month=" + months + "&day=" + days + "&hour=" + hours + "&minute=" + minutes;

            // Generating final remaining time string
            var timeString = "(απομένουν: " + remYears + remMonths + remDays + remHours + remMinutes + ")";
            document.getElementById("timeRemaining").innerHTML = timeString;
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
    var filled = document.getElementById("grade_file").files.length;
    if(filled){
        grade_fileBool = 1;
    }
    else{
       grade_fileBool = 0;
    }
}

function english_fileCheck(){
    var filled = document.getElementById("english_file").files.length;
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

function formCheck(){
    percentageCheck();
    averageCheck();
    english_levelCheck();
    extra_languagesCheck();
    uni1Check();
    grade_fileCheck();
    english_fileCheck();
    checkboxCheck();
        
    if(deadlineBool == 0){
        document.getElementById("submit").value = "Deadline has passed."

        document.getElementById("percentage").disabled = true;
        document.getElementById("percentage").classList.remove(input);
        document.getElementById("percentage").classList.add(disabled-input);

        document.getElementById("average").disabled = true;
        document.getElementById("average").classList.remove(input);
        document.getElementById("average").classList.add(disabled-input);

        document.getElementById("english_level").disabled = true;
        document.getElementById("english_level").classList.remove(radio-button);
        document.getElementById("english_level").classList.add(disabled-radio-button);

        document.getElementById("extra_languages").disabled = true;
        document.getElementById("extra_languages").classList.remove(radio-button);
        document.getElementById("extra_languages").classList.add(disabled-radio-button);

        document.getElementById("grade_file").disabled = true;
        document.getElementById("grade_file").classList.remove(input);
        document.getElementById("grade_file").classList.add(disabled-input);

        document.getElementById("english_file").disabled = true;
        document.getElementById("english_file").classList.remove(input);
        document.getElementById("english_file").classList.add(disabled-input);

        document.getElementById('checkbox').disabled = true;
        document.getElementById('checkmark').classList.remove(checkmark);
        document.getElementById('checkmark').classList.add(disabled-checkmark);
        return;
    }
    else{
        document.getElementById("percentage").disabled = true;
        document.getElementById("average").disabled = true;
        document.getElementById("english_level").disabled = true;
        document.getElementById("extra_languages").disabled = true;
        document.getElementById("grade_file").disabled = true;
        document.getElementById("english_file").disabled = true;
        document.getElementById('checkbox').disabled = true;
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