console.log("Hello World");

function blockAmount() {
    // Returns pre-set block rewards based on block selected
    // Update if updated on rollercoin
    switch (document.getElementById("block-type").selectedIndex) {
        case 0:
            //bitcoin
            var blockreward = 30000;
            document.getElementById("block-reward").value = 30000;
            break;
        case 1:
            //Doge
            var blockreward = 20;
            document.getElementById("block-reward").value = 20;
            break;
        case 2:
            //eth
            var blockreward = 0.005;
            document.getElementById("block-reward").value = 0.005;
            break;
        case 3:
            //bnb
            var blockreward = 0.012;
            document.getElementById("block-reward").value = 0.012;
            break;
        case 4: 
            //matic
            var blockreward = 3;
            document.getElementById("block-reward").value = 3;
            console.log("matic end");
            break;
        case 5: 
            //SOL
            var blockreward = 0.5;
            document.getElementById("block-reward").value = 0.05;
            console.log("sol end");
            break;
        case 6:
            //rst
            var blockreward = 20;
            document.getElementById("block-reward").value = 30;
            break;
        case 7:
            //trx
            var blockreward = 150;
            document.getElementById("block-reward").value = 150;
            break;
    default:
            //RLT
            console.log("rlt start");
            var blockreward = 60;
            document.getElementById("block-reward").value = 90;
            break;
    }
}

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
            //GH/s
            goalpower *= 1000000000;
            console.log("goalpower after ghs conversion: " + goalpower);
            break;
        case 1:
            //TH/s
            goalpower *= 1000000000000;
            console.log("goalpower after ths conversion: " + goalpower);
            break;
        case 2:
            //PH/s
            goalpower *= 1000000000000000;
            console.log("goalpwer after phs conversion: " + goalpower);
            break;
        default:
            //EH/s
            goalpower *= 1000000000000000000;
            console.log("goalpwer after ehs conversion: " + goalpower);
            break;
    }
    console.log("Block: " + blockreward);
    var exp_reward = blockreward * (goalpower / netpower);

    console.log("exp. reward " + exp_reward.toFixed(4));

    //All timers are now the same 2021-04-19
    let blockInput = parseFloat(document.getElementById("block-timer").value);
    const BlockTimer = blockInput * 60;
    console.log("Blocktimer is: " + BlockTimer + ". (" + blockInput + " * 60");
    const secFullDay = 86400;

    const dailyBlocks = secFullDay / BlockTimer;
    console.log(exp_reward);

    switch (document.getElementById("block-type").selectedIndex) {
        case 0:
            document.getElementById("exp_reward").innerHTML = exp_reward.toFixed(4) + " Satoshi";
            var btcResult = (exp_reward * dailyBlocks).toFixed(4);
            document.getElementById("daily").innerHTML = btcResult + " Satoshi";
            document.getElementById("weekly").innerHTML = (btcResult * 7).toFixed(4) + " Satoshi";
            document.getElementById("monthly").innerHTML = (btcResult * 30).toFixed(4) + " Satoshi";
            break;
        case 1:
            document.getElementById("exp_reward").innerHTML = exp_reward.toFixed(4) + " DOGE";
            var dogeResult = (exp_reward * dailyBlocks).toFixed(6);
            document.getElementById("daily").innerHTML = dogeResult + " DOGE";
            document.getElementById("weekly").innerHTML = (dogeResult * 7).toFixed(4) + " DOGE";
            document.getElementById("monthly").innerHTML = (dogeResult * 30).toFixed(4) + " DOGE";
            break;
        case 2:
            document.getElementById("exp_reward").innerHTML = exp_reward.toFixed(8) + " Ethereum";
            var ethResult = (exp_reward * dailyBlocks).toFixed(8);
            document.getElementById("daily").innerHTML = ethResult + " Ethereum";
            document.getElementById("weekly").innerHTML = (ethResult * 7).toFixed(8) + " Ethereum";
            document.getElementById("monthly").innerHTML = (ethResult * 30).toFixed(8) + " Ethereum";
            break;
        case 3:
            document.getElementById("exp_reward").innerHTML = exp_reward.toFixed(8) + " BNB";
            var bnbResult = (exp_reward * dailyBlocks).toFixed(8);
            document.getElementById("daily").innerHTML = bnbResult + " BNB";
            document.getElementById("weekly").innerHTML = (bnbResult * 7).toFixed(8) + " BNB";
            document.getElementById("monthly").innerHTML = (bnbResult * 30).toFixed(8) + " BNB";
            break;
        case 4:
            document.getElementById("exp_reward").innerHTML = exp_reward.toFixed(8) + " MATIC";
            var maticResult = (exp_reward * dailyBlocks).toFixed(8);
            document.getElementById("daily").innerHTML = maticResult + " MATIC";
            document.getElementById("weekly").innerHTML = (maticResult * 7).toFixed(8) + " MATIC";
            document.getElementById("monthly").innerHTML = (maticResult * 30).toFixed(8) + " MATIC";
            break;
        case 5:
            document.getElementById("exp_reward").innerHTML = exp_reward.toFixed(8) + " SOL";
            var solResult = (exp_reward * dailyBlocks).toFixed(8);
            document.getElementById("daily").innerHTML = solResult + " SOL";
            document.getElementById("weekly").innerHTML = (solResult * 7).toFixed(8) + " SOL";
            document.getElementById("monthly").innerHTML = (solResult * 30).toFixed(8) + " SOL";
            break;
        case 6: 
            document.getElementById("exp_reward").innerHTML = exp_reward.toFixed(8) + " RLT";
            var solResult = (exp_reward * dailyBlocks).toFixed(8);
            document.getElementById("daily").innerHTML = solResult + " RLT";
            document.getElementById("weekly").innerHTML = (solResult * 7).toFixed(8) + " RLT";
            document.getElementById("monthly").innerHTML = (solResult * 30).toFixed(8) + " RLT";
            break;
        case 7:
            document.getElementById("exp_reward").innerHTML = exp_reward.toFixed(8) + " RST";
            var solResult = (exp_reward * dailyBlocks).toFixed(8);
            document.getElementById("daily").innerHTML = solResult + " RST";
            document.getElementById("weekly").innerHTML = (solResult * 7).toFixed(8) + " RST";
            document.getElementById("monthly").innerHTML = (solResult * 30).toFixed(8) + " RST";
            break;
        case 8:
            document.getElementById("exp_reward").innerHTML = exp_reward.toFixed(8) + " TRX";
            var rltResult = (exp_reward * dailyBlocks).toFixed(4);
            document.getElementById("daily").innerHTML = rltResult + " TRX";
            document.getElementById("weekly").innerHTML = (rltResult * 7).toFixed(4) + " TRX";
            document.getElementById("monthly").innerHTML = (rltResult * 30).toFixed(4) + " TRX";
            break;
        default:
            console.log("Something went wrong");
            break;
    }
}

// Arc.io Div appender

