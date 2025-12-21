const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const menuCloseBtn = document.getElementById("menuCloseBtn");

function lockScroll() {
   document.documentElement.classList.add("no-scroll");
   document.body.classList.add("no-scroll");
}

function unlockScroll() {
   document.documentElement.classList.remove("no-scroll");
   document.body.classList.remove("no-scroll");
}

menuBtn.addEventListener("click", () => {
   menu.classList.toggle("active");
   
   if (menu.classList.contains("active")) {
      lockScroll();
   } else {
      unlockScroll();
   }
});

menuCloseBtn.addEventListener("click", () => {
   menu.classList.remove("active");
   unlockScroll();
});

menu.querySelectorAll("a").forEach(link => {
   link.addEventListener("click", () => {
      menu.classList.remove("active");
      unlockScroll();
   });
});