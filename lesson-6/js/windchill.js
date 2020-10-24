// windchill factor calculation
var temp = document.getElementById("currTemp").innerText;
var windSpeed = document.getElementById("windSpeed").innerText;
var output;
if (temp <= 50 && windSpeed > 3) {
    output = calcWindchill(temp, windSpeed);
} else {
    output = "N/A";
}
document.getElementById("windchill").innerHTML = output;


function calcWindchill(temp, windSpeed) {
    let f = Math.round(35.74 + (0.6215 * temp) - (35.75 * (windSpeed ** 0.16)) + 0.4275 * temp * (windSpeed ** 0.16));
    return f + "&deg;F"
}