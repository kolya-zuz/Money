const links = document.querySelectorAll("header ul a");
const circle = document.querySelector(".hover-circle");

links.forEach(link => {
  link.addEventListener("mousemove", e => {
    circle.style.left = e.pageX + "px";
    circle.style.top = e.pageY + "px";
    circle.style.transform = "translate(-50%, -50%) scale(1)";
  });

  link.addEventListener("mouseleave", () => {
    circle.style.transform = "translate(-50%, -50%) scale(0)";
  });
});

const burger = document.getElementById("menu");
const nav = document.getElementById("ul1");

burger.addEventListener("click", () => {
nav.classList.toggle("active");
});
