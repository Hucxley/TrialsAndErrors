var counter = 0;
var isActive = false;
var intervalModifier = 1000;
var timeNow;
var years, months, days, hours, minutes, seconds;

function addRound(n) {

    counter += n*6;
    $('#counter').text(counter);
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
        updateDisplay(timeDisplay);

    }

}

function updateDisplay(timeNow) {
    console.log("updating: " + timeNow);
    years = Math.floor(timeNow / 313);
    console.log(years);
    months = Math.floor(timeNow % 313);
    console.log(years);
    days = Math.floor(months / 28);
    console.log(days);
    hours = Math.floor(days % 28);
    console.log(hours);
    minutes = Math.floor(hours / 60);
    console.log(minutes);
    seconds = Math.floor(hours % 60);
    console.log(seconds);
    currentTime = { "years": years, "months": months, "days": days, "hours": hours, "minutes": minutes, "seconds": seconds };
    console.log(currentTime);
    $('#counter').text(currentTime.days + "." + currentTime.months + "." + currentTime.years + "_" + currentTime.hours + ":" + currentTime.minutes + ":" + currentTime.seconds);


}

function pauseCounter() {

    isActive = false;
    clearInterval(intervalHandler);
}

function initAttributes () {
    //var years, months, days, hours, minutes, seconds;
    timeNow = timeConstruct();
    console.log("init: " +timeNow);
    pmFlag = false;
    //years = timeNow.Years;
    //months = timeNow.Months;
    //days = timeNow.Days;
    //hours = timeNow.Hours;
    //if (hours > 22 || hours < 4) {
    //    pmFlag = true;
    //}
    //if (hours > 14) {

    //    hours -= 14;
    //}

    //minutes = timeNow.Minutes;
    //seconds = timeNow.Seconds;
    //minutes = timeNow.Minutes;
    console.log("clock set, handling weather")
    return timeNow;

};

function timeConstruct(seed) {

    seconds = seed || Math.floor((Math.random() * 9000000000000000) + 1);
    console.log(seconds);
    return seconds;
}

function advanceTime(timeNow, c) {
    console.log("advanceTime: " + timeNow.Seconds);
    console.log("advanceTime c: " + c);
    timeNow.Seconds = timeNow.Seconds + c;
    return timeNow;
}

function backgroundImageChanger(month, day, hour, minute, pmFlag) {
    console.log("enter image changer");
    var clearNightImgUrl = '../img/Screen-Shot-2014-10-20-at-7.29.52-PM.png';
    var clearDayImgUrl = '../img/clouds-colorful-colourful-1029[1].jpg';
    var starryNightImgUrl = '../img/1409058910637_wps_9_PIC_BY_MATT_PAYNE_CATERS_[1].jpg';
    var stormyDayImgUrl = '..img/pct-section-k-83-granite-chief-wilderness[1].jpg';


    if ((hour > 6 || hour < 4) && pmFlag === true) {
        console.log("should be dark!")
        document.getElementById("main").style.backgroundImage = "url(" + clearNightImgUrl + ")";
    } else if ((hour < 6 || hour > 4) && pmFlag === false) {
        console.log("should be light!");
        document.getElementById("main").style.backgroundImage = "url(" + clearDayImgUrl + ")";
    }
    console.log("past image")

}

$(document).ready(function () {
    timeNow = initAttributes();
    console.log("attributes set");
    $('#counter').text(timeNow);
    //backgroundImageChanger(months, days, hours, minutes, pmFlag);
})
