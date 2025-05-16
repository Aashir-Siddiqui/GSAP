let initialPtah = `M 10 100 Q 500 100 990 100`
let finalPtah = `M 10 100 Q 500 100 990 100`

const getString = document.querySelector(".string")

getString.addEventListener("mousemove", (dets) => {
    initialPtah = `M 10 100 Q ${dets.x} ${dets.y} 990 100`

    gsap.to("svg path", {
        attr: { d: initialPtah },
        duration: 0.3,
        ease: "power4.out",
    })
})

getString.addEventListener("mouseleave", () => {
    gsap.to("svg path", {
        attr: { d: finalPtah },
        duration: 1.5,
        ease: "elastic.out(1,0.1)",
    })
})