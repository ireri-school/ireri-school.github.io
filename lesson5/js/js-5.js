// get current year for copyright year in footer
let now = new Date();
let year = now.getFullYear();
document.getElementById("current-yr").innerHTML = year;

// get current date in format: Wednesday, 24 July 2020
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = monthNames[now.getMonth()];
let dayOfMonth = now.getDate();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayOfWeek = days[now.getDay()];
let today = String(dayOfWeek) + ", " + dayOfMonth + " " + month + " " + year;
document.getElementsByClassName("today")[0].innerHTML = today;

//banner
if (dayOfWeek == "Friday") {
    document.getElementById("announcement").style.display = "block"
    document.getElementById("myHeader").style.marginTop = "3em"
}

//toggling the menu
const hamButton = document.querySelector(".toggle");
const mainNav = document.querySelector(".navigation");

hamButton.addEventListener("click",() => {mainNav.classList.toggle("responsive")}, false);

window.onresize = () => {if (window.innerWidth > 760) mainNav.classList.remove("responsive")};