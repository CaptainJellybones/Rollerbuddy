console.log("Hello World");

fetch('https://rollercoin.com/api/mining/network-info-by-day?from=2021-07-11&to=2021-07-18&currency=SAT&groupBy=block_reward')
.then(function() {
    console.log("Success!")
})
.catch(function() {
    console.log("Failure!")
});

// function blockAmount() {
//     // Returns pre-set block rewards based on block selected
//     // Update if updated on rollercoin
//     switch (document.getElementById("block-type").selectedIndex) {
//         case 0:
//             //BTC
//             var blockreward = 30000;
//             document.getElementById("btcblockreward").value = 30000;
//             break;
//         case 1:
//             var blockreward = 20;
//             document.getElementById("dogeblockreward").value = 20;
//             break;
//         case 2:
//             var blockreward = 0.005;
//             document.getElementById("ethblockreward").value = 0.005;
//             break;
//         default:
//             var blockreward = 30;
//             document.getElementById("rtlblockreward").value = 30;
//             break;
//     }
// }

function showHashpowerHelp() {
    var x = document.querySelector("body > div.row.no-gutters.hashinput > div > div:nth-child(1) > img");
    if (x.classList.contains("hide")) {
        x.classList.remove("hide");
    } else {
        x.classList.add("hide");
    }
}

function supportMeToggle() {
    var x = document.querySelector("body > div.supportMe");
    if (x.classList.contains("hidden")) {
        x.classList.add("animate__animate", "animate__fadeInLeft");
        x.classList.remove("hidden");
        console.log("revealed SupportMe")
        // x.classList.add("animate__animated", "animate__bounceOutLeft"); 
    } else {
        x.classList.add("hidden");
        console.log("Hide SupportMe")
    }
}

function calculateGoalPower() {
    console.log("Calculate Begin");
    var netpower = parseFloat(document.getElementById("network-power").value);
    var goalpower = parseFloat(document.getElementById("goal-power").value);
    var blockreward = parseFloat(document.getElementById("block-reward").value);

    switch (document.getElementById("network-power-selector").selectedIndex) {
        case 0:
            netpower *= 1000000000;
            console.log("Netpower after ghs conversion: " + netpower);
            break;
        case 1:
            netpower *= 1000000000000;
            console.log("Netpower after ths conversion: " + netpower);
            break;
        case 2:
            netpower *= 1000000000000000;
            console.log("Netpower after phs conversion: " + netpower);
            break;
        default:
            netpower *= 1000000000000000000;
            console.log("Netpower after ehs conversion: " + netpower);
            break;
    }
    switch (document.getElementById("goal-power-selector").selectedIndex) {
        case 0:
            goalpower *= 1000000000;
            console.log("goalpower after ghs conversion: " + goalpower);
            break;
        case 1:
            goalpower *= 1000000000000;
            console.log("goalpower after ths conversion: " + goalpower);
            break;
        case 2:
            goalpower *= 1000000000000000;
            console.log("goalpwer after phs conversion: " + goalpower);
            break;
        default:
            goalpower *= 1000000000000000000;
            console.log("goalpwer after ehs conversion: " + goalpower);
            break;
    }
    console.log("Block: " + blockreward);
    var exp_reward = blockreward * (goalpower / netpower);

    console.log("exp. reward " + exp_reward.toFixed(4));

    /* const btcBlockTimer = 600;
    const dogeBlockTimer = 600;
    console.log(dogeBlockTimer + "seconds doge")
    const ethBlockTimer = 600; */

    //All timers are now the same 2021-04-19
    const BlockTimer = 600;
    const secFullDay = 86400;

    const dailyBtcBlocks = secFullDay / BlockTimer;
    const dailyDogeBlocks = secFullDay / BlockTimer;
    const dailyEthBlocks = secFullDay / BlockTimer;
    console.log(dailyBtcBlocks + ", " + dailyDogeBlocks + ", " + dailyEthBlocks)

    console.log("DailyBTC " + dailyBtcBlocks);
    console.log("DailyDOGE " + dailyDogeBlocks);
    console.log("DailyETH " + dailyEthBlocks);
    console.log(exp_reward);

    switch (document.getElementById("block-type").selectedIndex) {
        case 0:
            document.getElementById("exp_reward").innerHTML = exp_reward.toFixed(4) + " Satoshi";
            var btcResult = (exp_reward * dailyBtcBlocks).toFixed(4);
            document.getElementById("daily").innerHTML = btcResult + " Satoshi";
            document.getElementById("weekly").innerHTML = (btcResult * 7).toFixed(4) + " Satoshi";
            document.getElementById("monthly").innerHTML = (btcResult * 30).toFixed(4) + " Satoshi";
            break;
        case 1:
            document.getElementById("exp_reward").innerHTML = exp_reward.toFixed(4) + " Doge";
            var dogeResult = (exp_reward * dailyDogeBlocks).toFixed(4);
            document.getElementById("daily").innerHTML = dogeResult + " Doge";
            document.getElementById("weekly").innerHTML = (dogeResult * 7).toFixed(4) + " Doge";
            document.getElementById("monthly").innerHTML = (dogeResult * 30).toFixed(4) + " Doge";
            break;
        case 2:
            document.getElementById("exp_reward").innerHTML = exp_reward.toFixed(8) + " Etherium";
            var ethResult = (exp_reward * dailyEthBlocks).toFixed(4);
            document.getElementById("daily").innerHTML = ethResult + " Etherium";
            document.getElementById("weekly").innerHTML = (ethResult * 7).toFixed(4) + " Etherium";
            document.getElementById("monthly").innerHTML = (ethResult * 30).toFixed(4) + " Etherium";
            break;
        default:
            document.getElementById("exp_reward").innerHTML = exp_reward.toFixed(8) + " Rollertoken";
            var rltResult = (exp_reward * dailyEthBlocks).toFixed(4);
            document.getElementById("daily").innerHTML = rltResult + " Rollertoken";
            document.getElementById("weekly").innerHTML = (rltResult * 7).toFixed(4) + " Rollertoken";
            document.getElementById("monthly").innerHTML = (rltResult * 30).toFixed(4) + " Rollertoken";
            break;
    }
}