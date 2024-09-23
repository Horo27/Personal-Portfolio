const navbar = document.querySelector('.navbar')

const navScroll = (navbar) => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        //button.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
        //button.classList.remove('scrolled');
        hoverLogic();
    }
}
const hoverLogic = () => {
    navbar.addEventListener("mouseover", () => {
        navbar.classList.add('scrolled');
    })
    navbar.addEventListener("mouseout" , () => {
        if(window.scrollY < 50) 
            navbar.classList.remove('scrolled');
    })
}
const bgAnimation = () => {
    const bgContainer1 = document.querySelector('.bg-container-1');
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
}
window.addEventListener("scroll", () => {
    navScroll(navbar);
    bgAnimation();
})

function toggleMenu() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}        

