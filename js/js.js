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

// function expand(event) {
//     if (event.current.classList.includes('hidden')) {
//         alert("You clicked while hidden");
//     } else {
//         alert("You clicked while visible");
//     }
// }

// coinCards.forEach(card => {
//     card.addEventListener('click', rewardViewToggle(card))
// })

// function visibilityToggle(element) {
//     if (element.className == "hidden") {
//         element.classList.remove('hidden');
//         console.log("I've been clicked");
//     } else {
//         element.classList.add('hidden');
//         console.log("I've been clicked");
//     }
// }
