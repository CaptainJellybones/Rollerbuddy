console.log("Hello World");

function calculate() {
    console.log("Calculate Begin");
    var netpower = document.getElementById("network-power").value;
    console.log("Netpower = " + netpower);
    switch (document.querySelector("#network-power").value) {
        case "GH/s":
            netpower * 1000000000;
            console.log("Netpower after conversion: " + netpower);
            break;
        case "TH/s":
            netpower * 1000000000000;
            console.log("Netpower after conversion: " + netpower);
            break;
        default:
            netpower * 1000000000000000;
            console.log("Netpower after conversion: " + netpower);
            break;
    }
}