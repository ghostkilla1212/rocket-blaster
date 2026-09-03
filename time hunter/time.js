const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "yellow";
let gamerX = 100;
let gamerY = 100;
function drawGamer() {
    ctx.fillRect(gamerX, gamerY, 100, 100);
}

let gamePoints = Array.from({ length: 20 }, function() {
    return {
        x: Math.random() * (canvas.width - 10),
        y: Math.random() * (canvas.height - 10)
    };
});

function drawPoints() {
    ctx.fillStyle = "red";
    gamePoints.forEach(function(point) {
        ctx.beginPath();
        ctx.arc(point.x + 5, point.y + 5, 5, 0, Math.PI * 2);
        ctx.fill();
    });
    ctx.fillStyle = "yellow";
}

function eatPoints() {
    gamePoints = gamePoints.map(function(point) {
        if (
            gamerX < point.x + 10 &&
            gamerX + 100 > point.x &&
            gamerY < point.y + 10 &&
            gamerY + 100 > point.y
        ) {
            return {
                x: Math.random() * (canvas.width - 10),
                y: Math.random() * (canvas.height - 10)
            };
        }
        return point;
    });
}

addEventListener(
    "keydown",
    function(event) {
        console.log(event.key);
    if (event.key === "w") { gamerY -= 10; }
    if (event.key === "s") { gamerY += 10; }
    if (event.key === "a") { gamerX -= 10; }
    if (event.key === "d") { gamerX += 10; }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    eatPoints();
    drawGamer();
    drawPoints();
});
// spieler steuerung

// timer
let timer = 59;
const timerElement = document.getElementById("timer");
const countdown = setInterval(function() {
    timer--;
    timerElement.textContent = timer;
    if (timer <= 0) {
        clearInterval(countdown);
        timerElement.textContent = "Game Over";
    }
}, 2000);
// timer

// popup
const popup = document.querySelector(".pop-up");

const closeButton = document. querySelector("#close-button");

closeButton.addEventListener("click", function () {
popup.style.display = "none";
});
// popup




