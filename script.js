const sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav header a");
const menuIcon = document.querySelector(".fa-bars");
const menuList = document.querySelector(".menu-list");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("fa-x");
    menuList.classList.toggle("showMenu");
})

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector('nav header a[href*=' + id + ']').classList.add("active");
            })
        }
    });

    /* remove menu list */
    menuIcon.classList.remove("fa-x");
    menuList.classList.remove("showMenu");
};

/* scroll reveal */
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content h1, h1', { origin: 'top' });
ScrollReveal().reveal('.homeImage, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content p, h2, .aboutImage', { origin: 'left' });
ScrollReveal().reveal('.about-content, p', { origin: 'right' });

/* typed js */
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Photo Editor'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});