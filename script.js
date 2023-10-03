// Toggle the menu when the hamburger icon is clicked
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("open");
});

// Close the menu when a menu item is clicked
const menuItems = document.querySelectorAll(".menu a");

menuItems.forEach((item) => {
    item.addEventListener("click", () => {
        menu.classList.remove("open");
    });
});
