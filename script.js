let images = [
    "dice-01.svg",
    "dice-02.svg",
    "dice-03.svg",
    "dice-04.svg",
    "dice-05.svg",
    "dice-06.svg"
];

let dice = document.querySelectorAll("img");
let dieOneValue = Math.floor(Math.random() * 6);
document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);

function roll() {
    dice.forEach(function (die) {
        die.classList.add("shake");
    });
    
}
let display = document.querySelector("#countdown")
var timer = 10, seconds;
var timing = setInterval(function () {
    console.log("Hi")
    seconds = parseInt(timer % 60, 10);

    display.innerHTML = "Please select a value in not more than<span class='countdown'> " + seconds + " seconds</span>";

    if (--timer < 0) {
        timer = 0;
        clearInterval(timing);
        let button = document.querySelectorAll("#dice-btn")
        button.forEach(btn => {
            btn.disabled = false
        })
        var number = Math.floor(Math.random() * 6) + 1;
        throwDice(number)
    }
}, 3000);
function throwDice(num) {
    clearInterval(timing)
    display.innerHTML = `<span class='countdown'>${num}</span> IS CHOSEN`;
    let dieOneValue = Math.floor(Math.random() * 6);
    document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
    dice.forEach(function (die) {
        die.classList.add("shake");
    });
    setTimeout(function () {
        dice.forEach(function (die) {
            die.classList.remove("shake");
        });
    }, 3000)

    if (num == (dieOneValue + 1)) {
        document.querySelector("#score").innerHTML = 50;
        display.innerHTML = `<span class='countdown'>HURRAY YOU GOT IT CORRECT</span>`;
        alert("YOU GOT IT CORRECT");

    } else {
        document.querySelector("#score").innerHTML = 0;
    }
}
throwDice(num)

