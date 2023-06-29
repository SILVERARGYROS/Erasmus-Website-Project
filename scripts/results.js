window.onload = queryFunction();

function queryFunction(){
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
            let htmlElements = '<th colspan="4">ΑΠΟΔΕΚΤΕΣ ΑΙΤΗΣΕΙΣ</th>';
            for(const app of apps){
                marked = !marked;
                htmlElements += `<tr class="${marked ? 'unmarked' : 'marked'}"><td>${app.am}</td><td>${app.percentage}</td><td>${app.average}</td><td>${app.english_level}</td></tr>`;
            }
            document.getElementById("table").innerHTML = htmlElements;
        }
    }
    
    xmlhttp.open("GET","./scripts/results.php?", true);
    xmlhttp.send();
}