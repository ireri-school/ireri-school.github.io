// get current year for copyright year in footer
let now = new Date();
let year = now.getFullYear();
document.getElementById("current-yr").innerHTML = year;

// get date and time of last "Last Updated"
let lastUpdate = document.lastModified;
document.getElementById("last-modified").innerHTML = lastUpdate;

WebFont.load({
    google: {
      families: [
        'BenchNine'
      ]
    }
  });