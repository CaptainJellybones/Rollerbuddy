const rewardCards = document.querySelectorAll(".rewardBody");
const coinCards = document.querySelectorAll('.coinCard');
var coins = [];
let secFullDay = 86400;
let userPower;

// coin object constructor
function Coin(name, reward, networkPower, blockTimer) {
    this.coinName = name;
    this.coinReward = reward;
    this.coinNetwork = networkPower;
    this.coinTimer = blockTimer;
}

// creating the coin object
function addCoin(name, reward, networkPower, blockTimer) {
    var c = new Coin(name, reward, networkPower, blockTimer);
    coins.push(c);
}

// All of the coins and their base reward
addCoin('rlt', 30, NaN, 600);
addCoin('btc', 30000, NaN, 600);
addCoin('eth', 0.005, NaN, 600);
addCoin('bnb', 0.012, NaN, 600);
addCoin('matic', 3, NaN, 600);
addCoin('doge', 20, NaN, 600);
addCoin('sol', 0.5, NaN, 600);

// May god forgive me for this function | toggle for card full-view except for on inputs
function rewardViewToggle(element) {
    if (element.target.classList.contains('input')) {
        // Do nothing...
    } else {
        element.currentTarget.children[1].children[2].children[1].classList.toggle('hidden');
        element.currentTarget.children[1].children[3].classList.toggle('imgFlip');
    }
}

// Click event listener for every coin card
for (let i = 0; i < coinCards.length; i++) {
    coinCards[i].addEventListener('click', rewardViewToggle);
    console.log("eventlistener " + i + " added");
}

function calculate() {
    // Check which power-prefix user selected
    if (document.querySelector(".myPowerPrefix").value == "GH/s") {
        userPower *= 1000000000;
    } else if (document.querySelector(".myPowerPrefix").value == "TH/s") {
        userPower *= 1000000000000;
    } else if (document.querySelector(".myPowerPrefix").value == "GH/s") {
        userPower *= 1000000000000000;
    } else {
        userPower *= 1000000000000000000;
    }
    console.log("User has selected: " + document.querySelector(".myPowerInput").value + " " + document.querySelector(".myPowerPrefix").value);

    
}

