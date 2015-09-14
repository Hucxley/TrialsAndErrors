var sec = -1;
var min = 00;
var hour = 14;
var day = 01;
var month = 01;
year = 2015;
//var time;
//var timer_is_on = 0;
var darkFlag;

//function timer() {
//    sec++;
//    backgroundImageChanger(month, day, hour, min);
//    document.getElementById("years").innerHTML = year;
//    document.getElementById("months").innerHTML = month;
//    document.getElementById("days").innerHTML = day;
//    document.getElementById("hours").innerHTML = hour;
//    document.getElementById("mins").innerHTML = min;
//    document.getElementById("secs").innerHTML = sec;

//    // high speed testing
//    /*
//    sec++;
//    sec++;
//    sec++;
//    sec++;
//    sec++;
//    sec++;
//    sec++;
//    sec++;
//    sec++;
//    sec++;
//    sec++;
//    sec++;
//    sec++;
//    sec++;
//    sec++;
//    sec++;
//    sec++;
//    sec++;
//    sec++;
//    sec++;
//    sec++;
//    sec++;
//    sec++;
//    sec++;
//    sec++;
//    sec++;
//  */


//    if (sec > 59) {
//        min++;
//        if (min < 10) {
//            min = '0' + min
//        }
//        sec = 00;
//    }
//    if (sec < 10) {
//        sec = '0' + sec;

//    }

//    if (min > 59) {
//        hour++;
//        if (hour < 10) {
//            hour = '0' + hour;
//        }
//        min = 00;
//    }
//    if (hour > 27) {
//        day++;
//        hour = 00;
//        console.log(day);

//        if (day < 10) {
//            //day = '0' + day;
//        }
//    }
//    if (day > 26) {
//        month++;
//        console.log(month);
//        if (month < 10) {
//            //month = '0' + month;
//        }
//        day = 01;
//    }
//    if (month > 12) {
//        year++;
//        console.log(year);
//        if (year < 10) {
//            //year = '0' + year;
//        }
//        month = 01;
//    }

//}

//function activate() {
//    if (!timer_is_on) {
//        timer_is_on = 1;

//        time = setInterval(timer, 1000);

//        timer();
//    }
//}

function backgroundImageChanger(month, day, hour, minute) {
    var clearNightImgUrl = "http://exotichikes.com/wp-content/uploads/2014/10/Screen-Shot-2014-10-20-at-7.29.52-PM.png";
    var clearDayImgUrl = "http://static.pexels.com/wp-content/uploads/2014/06/clouds-colorful-colourful-1029.jpg";
    var starryNightImgUrl = "http://i.dailymail.co.uk/i/pix/2014/08/26/1409058910637_wps_9_PIC_BY_MATT_PAYNE_CATERS_.jpg";
    var stormyDayImgUrl = "http://askirtinthedirt.com/wp-content/uploads/2015/01/pct-section-k-83-granite-chief-wilderness.jpg";


    if ((hour > 22 || hour < 8) && darkFlag !== true) {
        darkFlag = true;
        console.log("should be dark!")
        document.body.background = 'url(' + clearNightImgUrl + ') no-repeat center center';
    } else if ((hour < 22 && hour > 8) && darkFlag != false) {
        darkFlag = false;
        console.log("should be light!");
        document.body.background = 'url(' + clearDayImgUrl + ') no-repeat center center';
        console.log("past image")
    }

}

$(document).ready(function () {
    console.log("ready!");
    tick();
});

// Countdown plugin
(function ($) {


    //
    // Constructor
    //
    function Countdown(element, date) {
        this.$element = $(element);
        this.date = date;

        this.init();
    };


    //
    // Initialize interval countdown
    //
    Countdown.prototype.init = function () {
        var _this = this;

        setInterval(function () {
            diff = _this.time_difference();
            $('.years .count').text(diff, years);
            $('.months .count').text(diff.months);
            $('.days .count').text(diff.days);
            $('.hours .count').text(diff.hours);
            $('.minutes .count').text(diff.minutes);
            $('.seconds .count').text(diff.seconds);
        }, 1000);

    };


    //
    // Time difference between given date & current date
    // @return [object]
    //
    Countdown.prototype.time_difference = function () {
        var years, months, days, hours, interval, minutes, seconds,

            ms_per_minute = 1000 * 60,
            ms_per_hour = ms_per_minute * 60,
            ms_per_day = ms_per_hour * 28,
            ms_per_month = ms_per_day * 26,
            ms_per_year = ms_per_month * 12

            current_date = new Date();

        if (current_date > this.date) {
            interval = current_date - this.date.getTime();
        } else {
            interval = this.date.getTime() - current_date;
        }

        years = Math.floor(interval / ms_per_year);
        interval = interval - (years * ms_per_year);

        months = Math.floor(interval / ms_per_month);
        interval = interval - (months * ms_per_month);

        days = Math.floor(interval / ms_per_day);
        interval = interval - (days * ms_per_day);

        hours = Math.floor(interval / ms_per_hour);
        interval = interval - (hours * ms_per_hour);

        minutes = Math.floor(interval / ms_per_minute);
        interval = interval - (minutes * ms_per_minute);

        seconds = Math.floor(interval / 1000);

        return {
            years: years,
            months: months,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    };


    //
    // jQuery plugin
    //
    $.fn.countdown = function (date_a, date_b) {
        this.each(function () {
            var $this = $(this);

            if (!$this.data('js-countdown')) {
                $this.data('js-countdown', new Countdown(this, date_a, date_b));
            }

        });
    };

}(jQuery));


// Initialize plugin
$('.js-countdown').countdown(
  new Date(Date.UTC(2015, 9, 1, 8, 20, 0))
);