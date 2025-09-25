// Global variables

let date = new Date();
let year = date.getFullYear();
let month = String(date.getMonth() + 1).padStart(2, '0');
let day = String(date.getDate()).padStart(2, '0');
let timerInterval;

// Fixed start dates used: Spring 20.03 Summer 21.06 Fall 22.09 Winter 21.12
const seasonStartDates = ["20-03", "21-06", "22-09", "21-12"];


const seasonNames = ["Spring", "Summer", "Fall", "Winter"];

// Get current season name and season change date 

let changeDateOut;
let getCurrentSeason = () => {

    date = new Date();
    let found = false;

    console.log(date);

    for (let i = 0; i < seasonStartDates.length; i++) {
        let [day, month] = seasonStartDates[i].split("-");
        let changeDate = new Date(year, month - 1, day);
        changeDateOut = changeDate;


        if (date < changeDate) {
            document.getElementById("seasonName").innerHTML = `${seasonNames[i]}`
            document.getElementById("dateOfChange").innerHTML = `${seasonStartDates[i]}-${year}`
            document.body.style.backgroundImage = `url('/images/0${i}.png')`;
            found = true;
            break;
        }
    }
    if (!found) {
        year = year + 1;
        let [day, month] = seasonStartDates[0].split("-");
        changeDateOut = new Date(year, month - 1, day);
        document.getElementById("seasonName").innerHTML = `${seasonNames[0]}`
        document.getElementById("dateOfChange").innerHTML = `${seasonStartDates[0]}-${year}`
        document.body.style.backgroundImage = "url('/images/04.png')";
        console.log(changeDateOut)
    }
};

getCurrentSeason();

// Timer logic 

// ms to actual time
function msToTime(ms) {
    return {
        days: Math.floor(ms / 86400000),
        hours: Math.floor(ms % 86400000 / 3600000),
        minutes: Math.floor(ms % 3600000 / 60000),
        seconds: Math.floor(ms % 60000 / 1000)
    }
};

// Timer 

let timer = () => {

    let timerDate = new Date();
    const timeDifferenceMS = changeDateOut - timerDate;    

    if (timeDifferenceMS <= 0) {
    clearInterval(timerInterval);
    getCurrentSeason();
    }

    const timeDifference = msToTime(changeDateOut - timerDate);

    document.getElementById("days").innerHTML = `${timeDifference.days}`
    document.getElementById("hours").innerHTML = `${timeDifference.hours}`
    document.getElementById("minutes").innerHTML = `${timeDifference.minutes}`
    document.getElementById("seconds").innerHTML = `${timeDifference.seconds}`


};

document.addEventListener("DOMContentLoaded", () => {
    timerInterval = setInterval(timer, 1000);
});
