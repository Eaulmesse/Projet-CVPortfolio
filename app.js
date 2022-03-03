// JS MODAL
var modalJS = document.getElementById("myModalJS");
var btnJS = document.getElementById("myBtnJS");
var spanJS = document.getElementsByClassName("close")[0];
btnJS.onclick = function() {
  modalJS.style.display = "block";
}

spanJS.onclick = function() {
  modalJS.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalJS) {
    modalJS.style.display = "none";
  }
}
// HTML MODAL
var modalHTML = document.getElementById("myModalHTML");
var btnHTML = document.getElementById("myBtnHTML");
var spanHTML = document.getElementsByClassName("closeHTML")[0];
btnHTML.onclick = function() {
  modalHTML.style.display = "block";
}

spanHTML.onclick = function() {
  modalHTML.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalHTML) {
    modalHTML.style.display = "none";
  }
}
// HTML CSS
var modalCSS = document.getElementById("myModalCSS");
var btnCSS = document.getElementById("myBtnCSS");
var spanCSS = document.getElementsByClassName("closeCSS")[0];
btnCSS.onclick = function() {
  modalCSS.style.display = "block";
}

spanCSS.onclick = function() {
  modalCSS.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalCSS) {
    modalCSS.style.display = "none";
  }
}
// HTML WP
var modalWP = document.getElementById("myModalWP");
var btnWP = document.getElementById("myBtnWP");
var spanWP = document.getElementsByClassName("closeWP")[0];
btnWP.onclick = function() {
  modalWP.style.display = "block";
}

spanWP.onclick = function() {
  modalWP.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalWP) {
    modalWP.style.display = "none";
  }
}
