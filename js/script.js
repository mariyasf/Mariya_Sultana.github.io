// toggle style switcher

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

// hide style switcher on scoll

window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector("style-switcher").classList.remove("open");
    }
})
// theme colors
const alternatestyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternatestyle.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
    sessionStorage.setItem("color", color);
    setGlobalStyle();
}

window.addEventListener("load", (event) => {
    const currentColor = sessionStorage.getItem("color");
    if (currentColor) {
        setActiveStyle(currentColor);
    }
});