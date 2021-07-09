const burger = document.querySelector(".hamburger");
const ul = document.querySelector("ul");

function flipBurger() {
    // alert("f")
    ul.classList.toggle("display")
}

burger.addEventListener("click", flipBurger);