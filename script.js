const balloon = document.querySelector(".balloon");
const explosion = document.querySelector(".explosion");

let currentSize = 150;

window.addEventListener("keydown", changeSize);

function changeSize(e) {
    if (currentSize > 5 && currentSize < 700) {
        if (e.key == "ArrowUp") {
            currentSize *= 1.10;
            balloon.style.fontSize = currentSize + "px";
            return currentSize;
        } else if (e.key == "ArrowDown") {
            currentSize *= 0.90;
            balloon.style.fontSize = currentSize + "px";
            return currentSize;
        } else {
            return;
        }
    } else {
        if (currentSize > 700) {
            balloon.style.display = "none";
            explosion.style.display = "flex";
        }
        else {
            balloon.textContent = "Disappeared!";
            balloon.style.fontSize = "8px";
        }
    }
}