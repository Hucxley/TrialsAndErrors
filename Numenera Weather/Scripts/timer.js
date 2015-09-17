var counter = 0;
var isActive = false;
var intervalModifier = 1000;
var timeNow;
var years, months, days, hours, minutes, seconds;
var pmFlag;
var seed;
var currentTime;
var displayTime;

function addRound(n) {

    counter += (n * 6);
    timeDisplay = timeNow + counter;
    //$('#counter').text(counter);
    displayTime = convertToDisplay(timeDisplay);
    update(displayTime);
    
}


function start()
{

    if (!isActive) {
        isActive = true;
        intervalHandler = setInterval("count()", intervalModifier);
    }

}

function count(){

    if (isActive)
    {
        counter++;
        timeDisplay = timeNow + counter;
        console.log("counting: " + timeDisplay);
        displayTime = convertToDisplay(timeDisplay);
        update(displayTime);

    }

}

function convertToDisplay(timeNow) {
    years = Math.floor(timeNow / (313 * 28 * 60 * 60)) + 1 ;
    var yearSecsRemaining = Math.floor(timeNow % (313 * 28 * 60 * 60)) + 1;
    months = Math.floor(yearSecsRemaining / (26 * 28 * 60 * 60)) + 1;
    var monthSecsRemaining = Math.floor(yearSecsRemaining % (26 * 28 * 60 * 60)) + 1 ;
    days = Math.floor(monthSecsRemaining / (28 * 60 * 60)) + 1;
    var daySecsRemaining = Math.floor(monthSecsRemaining % (28 * 60 * 60)) + 1;
    hours = Math.floor(daySecsRemaining / (60 * 60)) + 1;
    var hourSecsRemaining = Math.floor(daySecsRemaining % (60 * 60)) + 1 ;
    minutes = Math.floor(hourSecsRemaining / (60));
    var minuteSecsRemaining = Math.floor(hourSecsRemaining % (60));
    seconds = minuteSecsRemaining;
    currentTime = { "years": years, "months": months, "days": days, "hours": hours, "minutes": minutes, "seconds": seconds };
    

    return currentTime;
    
    
}

function pauseCounter() {

    isActive = false;
    clearInterval(intervalHandler);
    intervalModifier = 1000;
}

function initAttributes(n) {
    counter = 0;
    seed = 0;
    timeNow = timeConstruct(n);
    pmFlag = false;
    return timeNow;

};

function timeConstruct(seed) {
    if (seed) {
        seconds = seed;
    } else {
        seconds = Math.floor((Math.random() * 900000000000) + 1);
    };
    console.log("init secs: " +seconds);
    return seconds;
}

function advanceTime(timeNow, c) {
    timeNow.Seconds = timeNow.Seconds + c;
    return timeNow;
}

function backgroundImageChanger(month, day, hour, minute) {
    if (hour > 22 || hour < 4)
    {
        pmFlag = true;
    }
    else
    {
        pmFlag = false;
    }

    var clearNightImgUrl = '../img/Screen-Shot-2014-10-20-at-7.29.52-PM.png';
    var clearDayImgUrl = '../img/clouds-colorful-colourful-1029[1].jpg';
    var starryNightImgUrl = '../img/1409058910637_wps_9_PIC_BY_MATT_PAYNE_CATERS_[1].jpg';
    var stormyDayImgUrl = '..img/pct-section-k-83-granite-chief-wilderness[1].jpg';


    if ((hour > 22 || hour < 4) && pmFlag === true) {
        document.getElementById('main').style.backgroundImage = "url(" + clearNightImgUrl + ")";
    } else if ((hour < 22 || hour > 4) && pmFlag === false) {
        document.getElementById('main').style.backgroundImage = "url(" + clearDayImgUrl + ")";
    }
}

function setSeed() {
    seed = parseInt(document.getElementById('time-seed').value);
    document.getElementById('importModal').toggle;
    timeNow = initAttributes(seed);
    console.log("seed set: " + timeNow);
    displayTime = convertToDisplay(timeNow);
    $('#divider1').show();
    $('#divider2').show();
    $('#divider3').show();
    $('#divider4').show();
    update(displayTime);
}

function newGame() {
    timeNow = initAttributes();
    displayTime = convertToDisplay(timeNow);
    $('#divider1').show();
    $('#divider2').show();
    $('#divider3').show();
    $('#divider4').show();
    update(displayTime);
}

function update(currentTime) {
    backgroundImageChanger(currentTime.months, currentTime.days, currentTime.hours, currentTime.minutes);
    $('#counter-months').text(currentTime.months);
    $('#counter-days').text(currentTime.days);
    $('#counter-years').text(currentTime.years);
    $('#counter-hours').text(currentTime.hours);
    $('#counter-minutes').text(currentTime.minutes);
    $('#counter-seconds').text(currentTime.seconds);
    
}

function getSeedTime() {
    $('#export-seed-display').text(timeNow);
}

function travelTime(n) {
    intervalModifier = intervalModifier / n;
    start();
}

$(document).ready(function () {
    $('#divider1').hide();
    $('#divider2').hide();
    $('#divider3').hide();
    $('#divider4').hide();
})
