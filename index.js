let now = new Date(); //initialisation
let today = now.getDate(); //date
let months = now.getMonth(); //month
let years = now.getFullYear(); //year
let tMonth = months - 1;
let totalDays = new Date(years, tMonth, 0).getDate(); //total num of days
let days = now.getDay(); //weekdays
let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thuresday", "Saturday"];
let allMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//Initial data load
function updateCalender(tDays, cDays) {
    let finday = new Date(allMonth[cDays] + " 1, " + years).getDay();
    let count = 0;
    let myHtml = "<tr>"
    for (let i = 1; i <= tDays; i++) {
        count++;
        if (finday !== 0) {
            for (let j = 1; j <= finday; j++)  myHtml += "<th></th>";
            count = finday + 1;
            finday = 0;
        }
        myHtml += "<th>" + i + "</th>";
        if (count % 7 === 0) myHtml += "</tr>";
    }
    document.getElementById("tbody").innerHTML = myHtml;
    document.getElementById("monthName").innerHTML = "<b>" + allMonth[cDays] + " " + years + "</b>";
}

//First call
updateCalender(totalDays, months);

//Next Month nav
function next() {
    document.getElementById("tbody").innerHTML = "";
    let monthName = document.getElementById("monthName");
    tMonth++;
    months++;
    if (months === 12) {
        months = 0;
        years++;
    }
    monthName.innerText = allMonth[months] + " " + years;

    totalDays = new Date(years, tMonth, 0).getDate();
    updateCalender(totalDays, months);
}

//Previous Month nav
function prev() {
    document.getElementById("tbody").innerHTML = "";
    let monthName = document.getElementById("monthName");
    tMonth--;
    months--;
    if (months === -1) {
        months = 11;
        years--;
    }
    monthName.innerText = allMonth[months] + " " + years;

    totalDays = new Date(years, tMonth, 0).getDate();
    updateCalender(totalDays, months);
}
