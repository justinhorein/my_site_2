const burger = document.querySelector(".hamburger");
const navVert = document.querySelector(".nav_vert");
const vertCells = document.querySelectorAll("ul.nav_vert li a")

function flipBurger() {
    // alert("f")
   navVert.classList.toggle("displayVert")
}

burger.addEventListener("click", flipBurger);