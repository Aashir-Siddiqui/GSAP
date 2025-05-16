gsap.to(".page2 h1", {
    transform: "translateX(-275%)",
    scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        markers: true,
        strat: "top 0%",
        end: "top -150%",
        scrub: 3,
        pin: true
    }
})