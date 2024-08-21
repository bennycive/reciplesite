// JAVASCRIPT CODE HERE
const menuIcon = document.querySelector("#menuIcon");
const menu = document.querySelector("#menu");

menuIcon.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});
