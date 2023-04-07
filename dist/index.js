const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const TIMEOUT_SECONDS = 2000;
function clearText(text) {
    return text.substring(0, text.length - 1);
}
var CustomID;
(function (CustomID) {
    CustomID["Clear"] = "clear";
    CustomID["Backspace"] = "backspace";
    CustomID["Equal"] = "equal";
})(CustomID || (CustomID = {}));
for (const item of buttons) {
    item.addEventListener("click", () => {
        const { id } = item;
        try {
            if (id === CustomID.Clear) {
                display.innerText = "";
            }
            else if (id === CustomID.Backspace) {
                display.innerText = clearText(display.innerText.toString());
            }
            else if (display.innerText !== "" && id === CustomID.Equal) {
                display.innerText = eval(display.innerText);
            }
            else if (display.innerText !== "" && id === CustomID.Equal) {
                display.innerText = "Empty";
                setTimeout(() => (display.innerText = ""), TIMEOUT_SECONDS);
            }
            else {
                display.innerText += id;
            }
        }
        catch (error_) {
            const error = error_;
            console.log("An error occured: ", error.message);
        }
    });
}
const themeToggleButton = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
let isDark = false;
themeToggleButton.onclick = () => {
    calculator.classList.toggle("dark");
    themeToggleButton.classList.toggle("active");
    isDark = !isDark;
};
