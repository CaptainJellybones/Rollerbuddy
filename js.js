console.log("Hello World");

function blockAmount() {
    // Returns pre-set block rewards based on block selected
    // Update if updated on rollercoin
    switch (document.getElementById("block-type").selectedIndex) {
        case 0:
            var blockreward = 9000;
            document.getElementById("block-reward").value = 9000;
            break;
        case 1:
            var blockreward = 240; 
            document.getElementById("block-reward").value = 240;
            break;
        case 2:
            var blockreward = 0.0017;
            document.getElementById("block-reward").value = 0.0017;
            break;
        default:
            var blockreward = 5;
            document.getElementById("block-reward").value = 5;
            break;
        }
}

var showimg = false;
function showHashpowerHelp() {
    if (showimg == false) {
        document.querySelector("body > div.row.no-gutters.hashinput > div > div:nth-child(1) > img").style.display = "inline-block";
        showimg = true;
    } else {
        document.querySelector("body > div.row.no-gutters.hashinput > div > div:nth-child(1) > img").style.display = "none";
        showimg = false;
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
    console.log("Block: "+blockreward);
    var exp_reward = blockreward * (goalpower / netpower);
    
    console.log("exp. reward " + exp_reward.toFixed(4));

    const btcBlockTimer = 301;
    const dogeBlockTimer = 301;
    const ethBlockTimer = 301;
    const secFullDay = 86400;

    const dailyBtcBlocks = secFullDay / btcBlockTimer;
    const dailyDogeBlocks = secFullDay / dogeBlockTimer;
    const dailyEthBlocks = secFullDay / ethBlockTimer;
    
    console.log("DailyBTC "+dailyBtcBlocks);
    console.log("DailyDOGE "+dailyDogeBlocks);
    console.log("DailyETH "+dailyEthBlocks);
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


