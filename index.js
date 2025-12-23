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



const viewProjBtn = document.querySelectorAll(".viewProjectBtn");
const detailsSection = document.getElementById("detailsSection");
const allProjects = document.querySelectorAll(".projDetails");
const detailsBackBtn = document.getElementById("detailsBackBtn");

viewProjBtn.forEach(button => {
    button.addEventListener("click", () => {
        detailsSection.style.left = "0%";
        lockScroll();

        allProjects.forEach(project => {
            project.style.display = "none";
        });

        const projectNumber = button.id.replace("showProj", "").replace("Btn", "");
        const selectedProject = document.getElementById(`proj${projectNumber}`);
        if (selectedProject) {
            selectedProject.style.display = "flex";
        }
    });
});

detailsBackBtn.addEventListener("click", () => {
    detailsSection.style.left = "-100%";
    unlockScroll();
})
