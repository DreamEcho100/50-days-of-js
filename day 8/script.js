var DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;
var getDaysBetweenDates = function (dateText1, dateText2) {
    // write your solution here
    var date1InMillisecond = new Date(dateText1).getTime();
    var date2InMillisecond = new Date(dateText2).getTime();
    if (isNaN(date1InMillisecond) || isNaN(date2InMillisecond))
        return -1;
    return date1InMillisecond > date2InMillisecond
        ? (date1InMillisecond - date2InMillisecond) / DAY_IN_MILLISECONDS
        : (date2InMillisecond - date1InMillisecond) / DAY_IN_MILLISECONDS;
};
console.log("Days difference: " + getDaysBetweenDates('10/15/2020', '12/1/2020'));
