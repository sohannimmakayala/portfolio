function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
const year = new Date().getFullYear();
document.getElementById(
  "footer"
).innerHTML = `&copy; ${year} Sohan Nimmakayala. All Rights Reserved.`;
