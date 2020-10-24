// windchill factor calculation
var temp = document.getElementById("currTemp").value;
var speed = document.getElementById("windSpeed").value;
var output = calcWindchill(temp, speed);
document.getElementById("windchill").innerHTML = output;

function calcWindchill(tempF, windSpeed) {
    let f = 35.74 + (0.6215 * tempF) - (35.75 * (windSpeed ** 0.16)) + 0.4275 * tempF * (windSpeed ** 0.16);
    
    if ((tempF <= 50) && (windSpeed > 3)) {
        return f;
    } else {
        return "N/A";
    }
}