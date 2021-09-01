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
    if (window.innerWidth > 720){
        navVert.classList.remove("displayVert");
    }
};

window.onresize = closeVert;

// Set Nav Solid Black at Top of Scroll

document.addEventListener("scroll", function () {
  const navbar = document.querySelector(".nav");
  const navbarHeight = 1;

  const distanceFromTop = Math.abs(
    document.body.getBoundingClientRect().top
  );

  if (distanceFromTop >= navbarHeight) {
    navbar.classList.add("opaque"); 
  } else {
    navbar.classList.remove("opaque");
  } 
});

// Nav Disapears while Scrolling Down

// const nav = document.querySelector(".nav");

// window.onscroll = function(e) {

//     // scroll down
//   if ((this.oldScroll >= this.scrollY) == false){
//       nav.classList.remove("displaying");
//       nav.classList.add("not-displaying");
//       setTimeout(function(){ nav.style.transform = "translateY(-100%)"; }, 800);
//   } 
//   // scroll up
//   else {
//       nav.classList.remove("not-displaying");
//       nav.classList.add("displaying");
//       setTimeout(function(){ nav.style.transform = "translateY(-0%)"; }, 800);
//   }

//   this.oldScroll = this.scrollY;
// }