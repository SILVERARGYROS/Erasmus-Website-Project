// Global Variables
var country = "";
var name = "";
var sort = false;

window.onload = queryFunction();

function queryFunction(){
    if(document.getElementById("nameFilter").value.length < 1){
        name = "";
    }
    else{
        name = document.getElementById("nameFilter").value;
    }

    if(document.getElementById("countryFilter").value.length < 1){
        country = "";
    }
    else{
        country = document.getElementById("countryFilter").value;
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

            const unis = JSON.parse(query);
            
            let marked = false;
            let htmlElements = '<th colspan="3">ΠΑΝΕΠΙΣΤΗΜΙΑ</th>';
            for(const uni of unis){
                marked = !marked;
                htmlElements += `<tr class="${marked ? 'unmarked' : 'marked'}"><td>${uni.name}</td><td>${uni.country}</td><td onclick=""><span class="delete">Διαγραφή</span></td></tr>`;
            }
            document.getElementById("table").innerHTML = htmlElements;
        }
    }
    
    xmlhttp.open("GET","./scripts/unisQuery.php?name=" + name + "&country=" + country + "&sort=" + sort, true);
    xmlhttp.send();
}

function toggleSort(){
    sort = !sort;
    queryFunction();
}