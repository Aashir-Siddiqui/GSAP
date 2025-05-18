document.addEventListener("DOMContentLoaded", () => {
    const navIcon = document.querySelector(".nav i");
    const closeIcon = document.querySelector(".full i");

    var tl = gsap.timeline({ paused: true });

    tl.to(".full", {
        right: 0,
        duration: 0.4,
    })
        .from(".full h4", {
            x: 150,
            duration: 0.5,
            opacity: 0,
            stagger: 0.2,
        }, "-=0.3")
        .from(".full i", {
            opacity: 0,
            duration: 0.3,
        }, "-=0.4")

    navIcon.addEventListener("click", () => {
        tl.play();
    });

    closeIcon.addEventListener("click", () => {
        tl.reverse();
    });
});