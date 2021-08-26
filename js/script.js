function openDLP() {
    window.open("https://github.com/justinhorein/Python_Django_Live_Project", "_blank");
}

function openCSLP() {
    window.open("https://github.com/justinhorein/C_Sharp_Live_Project/blob/master/C%23%20LP%20Summary.pdf", "_blank");
}

function openCSBJ() {
    window.open("https://github.com/justinhorein/C_Sharp_Black_Jack", "_blank");
}

function openReactTTT() {
    window.open("https://github.com/justinhorein/React-Tic-Tac-Toe", "_blank");
}

function openRP() {
    window.open("https://github.com/justinhorein/permutations", "_blank");
}

function openRGB() {
    window.open("https://github.com/justinhorein/RGB-Color-Picker", "_blank");
}

function openTTT() {
    window.open("https://github.com/justinhorein/Tic-Tac-Toe", "_blank");
}

function openHM() {
    window.open("https://github.com/justinhorein/hangman", "_blank");
}

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

// Form Validation

// $('.ui.form')
//   .form({
//     fields: {
//       email  : {
//         identifier: 'email',
//         rules: [{
//           type: 'regExp',
//           value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//           prompt: 'Please enter a valid email'
//             }]
//         },
//       message: {
//         identifier: 'message',
//         rules: [{
//           type: 'empty',
//           prompt: "Please write a message"
//         }]
        
//       }
//     }
// });
