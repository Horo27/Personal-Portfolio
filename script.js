const navbar = document.querySelector('.navbar')
const button = document.querySelector('.nav-button')

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        //button.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
        //button.classList.remove('scrolled');
        hoverLogic();
    }
})
const hoverLogic = () => {
    navbar.addEventListener("mouseover", () => {
        navbar.classList.add('scrolled');
    })
    navbar.addEventListener("mouseout" , () => {
        if(window.scrollY < 50) 
            navbar.classList.remove('scrolled');
    })
}
const bgContainer1 = document.querySelector('.bg-container-1');
/**/
window.addEventListener('scroll', () => {
    // Calculate scroll percentage
    const scrollTop = window.scrollY;
    const clientHeight = window.innerHeight
    if(scrollTop<=clientHeight){//we havent scrolled completly
        const scrollPercent =  scrollTop / clientHeight;
        
        xA =45 - scrollPercent * 45; 
        xD =50 + 50 * scrollPercent;
        yE =60 + 40 * scrollPercent;
        xE =60 - 60 * scrollPercent;

        xE= Math.min(100,xE);
        yE= Math.min(100,yE);
        xA= Math.max(0,xA);
        xD= Math.min(100,xD);
    
        bgContainer1.style.clipPath = `polygon(${xA}% 0%, 100% 0%, 100% 100%, ${xD}% 100%, ${xE}% ${yE}%)`;
    }
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach( sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop-250;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if(top >= offset && top <offset+height){
            navLinks.forEach( link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(id)) {
                    link.classList.add('active');
                }
            })
        }
    })
}

function toggleMenu() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show'); /* Toggle the "show" class to display the menu */
}



        