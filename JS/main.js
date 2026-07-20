const open  = document.querySelector(".open")
const input = document.querySelector("input")
const close = document.querySelector(".close")

open.addEventListener ("click", () => {open.classList.toggle("orange")})
input.addEventListener("input", () => {console.log(input.value)})
close.addEventListener("click", () => {console.log("Я на пляже")})
