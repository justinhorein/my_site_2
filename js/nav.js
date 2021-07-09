const burger = document.querySelector(".hamburger");
const navVert = document.querySelector(".nav_vert");
const vertCells = document.querySelectorAll("ul.nav_vert li a")

// FLIP DOWN VERTICAL NAV WHEN BURGER IS CLICKED

function flipBurger() {
    // alert("f")
   navVert.classList.toggle("displayVert");
}

burger.addEventListener("click", flipBurger);


// CLOSE VERTICAL NAV IF REGULAR NAV IS SHOWING 

function closeVert(){
    if (window.innerWidth > 505){
        navVert.classList.remove("displayVert");
    }
};

window.onresize = closeVert;

