// gsap.from("#box1", {
//     x: 1200,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     borderRadius: "50%",
//     repeat: -1,
//     yoyo: true,
// })

// gsap.to("#box2", {
//     x: 1200,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     borderRadius: "50%",
//     repeat: -1,
//     yoyo: true,
// })

// gsap.from("h1",{
//     opacity:0,
//     y:30,
//     delay:1,
//     duration:1,
//     stagger:0.5,
// })

const tl = gsap.timeline()

tl.from("#nav h2", {
    duration: 1,
    y: 20,
    opacity: 0,
})

tl.from(".navlinks h4", {
    duration: 1,
    y: 20,
    opacity: 0,
    stagger: 0.3,
})