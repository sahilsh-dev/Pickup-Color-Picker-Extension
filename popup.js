const pickedColor = document.querySelector("#picked-color");
const unsupportedMsg = document.querySelector(".unsupported-msg");
const coppiedMsg = document.querySelector(".copied-msg");
const fontFamily = document.querySelector(".font-family");

document.querySelector("#colorpicker").addEventListener("click", () => {
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

async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

document.querySelector("#fontpicker").addEventListener("click", async () => {
    const tab = await getCurrentTab();
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["fontpicker.js"]
    })
});
