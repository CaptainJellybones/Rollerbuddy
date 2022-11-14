const rewardCards = document.querySelectorAll(".rewardBody");
const coinCards = document.querySelectorAll('.coinCard');
const coins = [];
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
addCoin('RLT', 30, NaN, 600);
addCoin('BTC', 30000, NaN, 600);
addCoin('ETH', 0.005, NaN, 600);
addCoin('BNB', 0.012, NaN, 600);
addCoin('MATIC', 3, NaN, 600);
addCoin('DOGE', 20, NaN, 600);
addCoin('SOL', 0.5, NaN, 600);

//toggle for card full-view except for when inputs are clicked
function rewardViewToggle(element) {
    if (element.target.classList.contains('input')) {
        // Do nothing...
    } else {
        element.currentTarget.children[1].children[2].children[1].classList.toggle('hidden');
        element.currentTarget.children[1].children[3].classList.toggle('imgFlip');
    }
}

// Click event listener for every coin card that listens for rewardViewToggle()
for (let i = 0; i < coinCards.length; i++) {
    coinCards[i].addEventListener('click', rewardViewToggle);
}

function calculate() {
    // Get userpower
    userPower = document.querySelector("#myPowerInput").value;

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

    // Determine the power and coin name of current coin, then use it to determine object to read
    coinCards.forEach(element => {
        calcPower = element.children[1].children[1].value * 1000000000000000000000;
        tempCoin = element.children[0].innerText;
        curCoin = coins.find(x => x.coinName === tempCoin);

        var exp_reward = (curCoin.coinReward * (userPower / calcPower)).toFixed(4);
        // Block Reward
        element.querySelector(".blockReward").innerText = exp_reward;
        console.log(curCoin.coinName + " " + curCoin.coinReward)
    });
}

