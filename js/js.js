const rewardCards = document.querySelectorAll(".rewardBody");
const coinCards = document.querySelectorAll('.coinCard');

// function visibilityToggle(element) {
//     if (element.className == "hidden") {
//         element.classList.remove('hidden');
//         console.log("I've been clicked");
//     } else {
//         element.classList.add('hidden');
//         console.log("I've been clicked");
//     }
// }

function rewardViewToggle() {
    if (element.classList.includes('hidden')) {
        element.classList.remove('hidden');
    } else {
        element.classList.add('hidden');
    }
}

for (let i = 0; i < coinCards.length; i++) {
    coinCards[i].addEventListener('click', rewardViewToggle);
    console.log("eventlistener " + i + " added");
}

// coinCards.forEach(card => {
//     card.addEventListener('click', rewardViewToggle(card))
// })