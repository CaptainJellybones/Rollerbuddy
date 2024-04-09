/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("buddySidenav").style.width = "250px";
  }
  
/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("buddySidenav").style.width = "0";
}

function getNetPower() {
  netpower = $("#iFrame").contents().find(".currency-info-power").innerText;
  netpowerJS = iframe.contentWindow.document;
}