document.body.style.cursor = "pointer";

document.addEventListener("click", (event) => {
    const elementUnderMouse = event.target;
    const elementStyle = window.getComputedStyle(elementUnderMouse);
    console.log(elementStyle.fontFamily);  
    document.body.style.cursor = "auto";
});