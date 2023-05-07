/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function responsiveFunction() {
    var x = document.getElementById("header");
    if (x.className === "header") {
      x.className += " responsive";
    } else {
      x.className = "header";
    }
}