
// Functions to open/close navigation menu
function openNav(){
    document.getElementById("nav").style.width = "100%";
    disableScrolling();
}

function closeNav(){
    document.getElementById("nav").style.width = "0%";
    enableScrolling();
}


// Make navbar stay on top of site
window.onscroll = function(){stickyMenu()};
var header = document.getElementById("section-1");
var sticky = header.offsetTop;

function stickyMenu(){
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
}

// Disable background scrolling when navmenu is open (gimped by scroll-behavior: smooth)
function disableScrolling(){
  var x=window.scrollX;
  var y=window.scrollY;
  window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
  window.onscroll=function(){};
}