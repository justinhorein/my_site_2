let menuSection = document.querySelectorAll('.nav-cells li a');
let menuVert = document.querySelectorAll('.nav_vert li a');


// Set Hello Cell as active when the page loads.
if (window.scrollY == 0) {
    menuSection[0].classList.add('active');
    menuVert[0].classList.add('active');
}

// Highlight nav cell on click.
menuSection.forEach(v=> {
    v.onclick = (() => {
        setTimeout(()=> {
            menuSection.forEach(j => j.classList.remove('active'))
            v.classList.add('active')
        }, 300)
    })
});

// Highlight nav_vert cell on click
menuVert.forEach(v=> {
    v.onclick = (() => {
        setTimeout(()=> {
            menuVert.forEach(j => j.classList.remove('active'))
            v.classList.add('active')
        }, 300)
    })
});

// Highlight nav cell when it's section is reached.

window.onscroll = (() => {
    let mainSection = document.querySelectorAll('div.section');

    mainSection.forEach((v,i) => {
        let rect = v.getBoundingClientRect().y
        if (rect < window.innerHeight - 700){
            menuSection.forEach(v => v.classList.remove('active'))
            menuSection[i].classList.add('active')
            menuVert.forEach(v => v.classList.remove('active'))
            menuVert[i].classList.add('active')
        }
    })
});