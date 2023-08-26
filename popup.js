const pickedColor = document.querySelector("#picked-color");
const unsupportedMsg = document.querySelector(".unsupported-msg");
const coppiedMsg = document.querySelector(".copied-msg");

document.querySelector("#colorpicker-start").addEventListener("click", () => {
    if (!window.EyeDropper) {
        unsupportedMsg.classList.remove("hidden");
        return;
    } 
    
    const eyeDropper = new EyeDropper();

    eyeDropper.open()
        .then((result) => {
            pickedColor.textContent = result.sRGBHex;
            pickedColor.style.color = result.sRGBHex;
            navigator.clipboard.writeText(result.sRGBHex);
            coppiedMsg.classList.remove("hidden");
        })
        .catch((e) => {
            pickedColor.textContent = "#_______";
            coppiedMsg.classList.add("hidden");
        })
})