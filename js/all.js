
// Functions to open/close navigation menu
function openNav(){
    document.getElementById("nav").style.width = "100%";
    disableScrolling();
}

function closeNav(){
    document.getElementById("nav").style.width = "0%";
    enableScrolling();
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