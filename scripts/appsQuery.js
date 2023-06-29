// Global Variables
var percentage = "";
var uni = "";
var sort = false;

window.onload = queryFunction();

function queryFunction(){
    if(document.getElementById("percentageFilter").value.length < 1){
        percentage = "";
    }
    else{
        percentage = document.getElementById("percentageFilter").value;
    }

    if(document.getElementById("uniFilter").value.length < 1){
        uni = "";
    }
    else{
        uni = document.getElementById("uniFilter").value;
    }

    if(window.XMLHttpRequest){      // for "normal" browsers...
        xmlhttp = new XMLHttpRequest();
    } 
    else{                           // for IE6, IE5
        xmlhttp = new ActiveXObject ("Microsoft.XMLHTTP"); 
    }
        
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var query = xmlhttp.responseText;

            const apps = JSON.parse(query);
            
            let marked = false;
            let checked = false;
            let htmlElements = '<th colspan="9">ΑΙΤΗΣΕΙΣ</th>';
            for(const app of apps){
                marked = !marked;
                checked = app.status == approved;

                htmlElements += `<tr class="${marked ? 'unmarked' : 'marked'}"><td><img src="${app.pfp}"></td><td>${app.fname}</td><td>${app.lname}</td><td>${app.am}</td><td>${app.email}</td><td>${app.percentage}</td><td>${app.average}</td><td>${app.english_level}</td><td class="td-checkbox"><label class="check-container"><input name="checkbox" id="checkbox" type="checkbox" class="" value="" required onclick="checkboxCheck()"><span name="checkmark" id="checkmark" class="checkmark" ${checked ? 'checked' : 'unchecked'}"></span></label></td></tr>`;
            }
            document.getElementById("table").innerHTML = htmlElements;
        }
    }
    
    xmlhttp.open("GET","./scripts/appsQuery.php?percentage=" + percentage + "&uni=" + uni + "&sort=" + sort, true);
    xmlhttp.send();
}

function toggleSort(){
    sort = !sort;
    queryFunction();
}