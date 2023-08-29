document.body.style.cursor = "pointer";

const textBlock = document.createElement("p");
document.body.appendChild(textBlock);
textBlock.style.cssText = `
    position: absolute;
    font-size: 14px;
    overflow: hidden;
    padding: 5px;
    width: 140px;
    height: 80px;
    background-color: grey;
`;

const handleMouseMove = (event) => {
    const mouseX = event.clientX + 10;
    const mouseY = event.clientY + 10;
    console.log(mouseX, mouseY)
    textBlock.style.left = `${mouseX}px`;
    textBlock.style.top = `${mouseY}px`;

    const elementUnderMouse = event.target;
    const elementStyle = window.getComputedStyle(elementUnderMouse);
    console.log(elementStyle.fontFamily);
    textBlock.textContent = elementStyle.fontFamily;
}

document.addEventListener("mousemove", handleMouseMove);

document.addEventListener("click", () => {
    document.removeEventListener("mousemove", handleMouseMove);
    textBlock.style.display = "none";
    document.body.style.cursor = "auto";
})