const burger = document.querySelector(".hamburger");
const navVert = document.querySelector(".nav_vert");
const vertList = document.querySelectorAll(".vert_list")


// FLIP DOWN VERTICAL NAV WHEN BURGER IS CLICKED

function flipBurger() {
    // alert("f")
   navVert.classList.toggle("displayVert");
}

burger.addEventListener("click", flipBurger);


// CLOSE VERTICAL NAV IF REGULAR NAV IS SHOWING 

function closeVert(){
    if (window.innerWidth > 738){
        navVert.classList.remove("displayVert");
    }
};

window.onresize = closeVert;

// Set Nav Solid Grey at Top of Scroll

document.addEventListener("scroll", function () {
  const navbar = document.querySelector(".nav");
  const navbarHeight = 1;

  const distanceFromTop = Math.abs(
    document.body.getBoundingClientRect().top
  );

  if (distanceFromTop >= navbarHeight) {
    navbar.classList.add("opaque");
    vertList[0].classList.add("opaque");     
    vertList[1].classList.add("opaque");     
    vertList[2].classList.add("opaque");     
    vertList[3].classList.add("opaque");     
  } else {
    navbar.classList.remove("opaque");
    vertList[0].classList.remove("opaque");     
    vertList[1].classList.remove("opaque");     
    vertList[2].classList.remove("opaque");     
    vertList[3].classList.remove("opaque"); 
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