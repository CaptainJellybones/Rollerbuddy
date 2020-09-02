console.log("Hello World");

function calculate() {
    console.log("Calculate Begin");
    var netpower = parseFloat(document.getElementById("network-power").value);
    var goalpower = parseFloat(document.getElementById("goal-power").value);
    var blockreward = parseInt(document.getElementById("block-reward").value);
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
    document.getElementById("exp_reward").innerHTML = exp_reward.toFixed(4);
    console.log("exp. reward " + exp_reward.toFixed(4));

    var btcBlockTimer = 328;
    var dogeBlockTimer = 308;
    var ethBlockTimer = 351;
    var secFullDay = 86400;

    const dailyBtcBlocks = secFullDay / btcBlockTimer;
    const dailyDogeBlocks = secFullDay / dogeBlockTimer;
    const dailyEthBlocks = secFullDay / ethBlockTimer;
    
    console.log("DailyBTC "+dailyBtcBlocks);
    console.log("DailyDOGE "+dailyDogeBlocks);
    console.log("DailyETH "+dailyEthBlocks);
    console.log(exp_reward);

    switch (document.getElementById("block-type").selectedIndex) {
        case 0:
            var btcResult = (exp_reward * dailyBtcBlocks).toFixed(4);
            document.getElementById("daily").innerHTML = btcResult;
            document.getElementById("weekly").innerHTML = (btcResult * 7).toFixed(4);
            document.getElementById("monthly").innerHTML = (btcResult * 30).toFixed(4);
            break;
        case 1:
            var dogeResult = (exp_reward * dailyDogeBlocks).toFixed(4);
            document.getElementById("daily").innerHTML = dogeResult;
            document.getElementById("weekly").innerHTML = (dogeResult * 7).toFixed(4);
            document.getElementById("monthly").innerHTML = (dogeResult * 30).toFixed(4);
            break;
        default:
            var ethResult = (exp_reward * dailyEthBlocks).toFixed(4);
            document.getElementById("daily").innerHTML = ethResult;
            document.getElementById("weekly").innerHTML = (ethResult * 7).toFixed(4);
            document.getElementById("monthly").innerHTML = (ethResult * 30).toFixed(4);
            break;
    }
}