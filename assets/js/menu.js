//show menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

showMenu("nav-toggle", "nav-menu");
// remove  menu mobille
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  //active link
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");
  //remoe menu
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));
