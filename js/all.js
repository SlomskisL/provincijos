
/* Hamburger Menu Script */
    function toggleMenu(){
        var x = document.getElementById("main-menu");
        if(x.style.display === "block"){
            x.style.display = "none";
        }
        else{
            x.style.display = "block";
        }
    }