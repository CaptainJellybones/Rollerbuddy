const rewardCards = document.querySelectorAll(".rewardBody");
const coinCards = document.querySelectorAll('.coinCard');

// All of the coins and their base reward
let rltBlockReward = 30;
let btcBlockReward = 30000;
let ethBlockReward = 0.005;
let bnbBlockReward = 0.012;
let maticBlockReward = 3;
let dogeBlockReward = 20;
let solBlockReward = 0.5;

let secFullDay = 86400;
let userPower;

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

