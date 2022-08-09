const rewardCards = document.querySelectorAll(".rewardBody");
const coinCards = document.querySelectorAll('.coinCard');

let testCard = document.querySelector("body > div.container.coins > div.row.firstPowerRow > div:nth-child(4) > div");

// May god forgive me for this function
function rewardViewToggle(element) {
    element.currentTarget.children[1].children[2].children[1].classList.toggle('hidden');
    element.currentTarget.children[1].children[3].classList.toggle('imgFlip');
}

for (let i = 0; i < coinCards.length; i++) {
    coinCards[i].addEventListener('click', rewardViewToggle);
    console.log("eventlistener " + i + " added");
}

function calculate() {
    console.log("Calculate Initiated")
}