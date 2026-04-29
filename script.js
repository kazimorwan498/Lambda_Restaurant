let navItems = document.querySelectorAll(".nav-items");
let navLinks = document.querySelectorAll(".nav-links");

navLinks.forEach((e, index) => {
  e.addEventListener("click", () => {
    navItems.forEach((i) => i.classList.remove("active"));
    navItems[index].classList.add("active");
  });
});
