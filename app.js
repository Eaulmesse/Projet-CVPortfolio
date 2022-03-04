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

const txtAnim = document.getElementById('textJs');

new Typewriter(txtAnim, {})
.typeString('"Bienvenue sur mon CV')
.pauseFor(300)
.typeString('<strong>, Dev Web Junior" </strong>')
.pause(1000)
.start()

const progressBar = document.querySelector('.scrollbar');

let totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', () => {

  let progress = (document.documentElement.scrollTop / totalHeight) *100;
  progressBar.style.height = `${progress}%`;
  progressBar.style.opacity = `${progress}%`;

})

const progressBarClick = document.querySelector('.clickScrollbar');

progressBarClick.addEventListener('click', (e) => {

  let newPageScroll = e.clientY / progressBarClick.offsetHeight * totalHeight;
  window.scrollTo({
    top: newPageScroll,
    behavior: 'smooth'
  })

})

let debounceResize;
window.addEventListener("resize", () => {
  clearTimeout(debounceResize);
  debounceResize = setTimeout(() => {
    totalHeight = document.body.scrollHeight - window.innerHeight;
  }, 250);
});