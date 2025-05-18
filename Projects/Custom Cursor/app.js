const main = document.querySelector("#main")
const cursor = document.querySelector("#cursor")
const image = document.querySelector(".image")

main.addEventListener("mousemove", (e) => {
    gsap.to(cursor,{
        x: e.x,
        y: e.y,
        duration: 1,
        ease: "power3.out"
    })
})

image.addEventListener("mouseenter", () => {
    cursor.innerHTML = "GSAP"
    gsap.to(cursor,{
        scale: 3,
        backgroundColor:" #ffffff8a",
    })
})

image.addEventListener("mouseleave", () => {
    cursor.innerHTML = ""
    gsap.to(cursor,{
        scale: 1,
        backgroundColor:" #fff",
    })
})