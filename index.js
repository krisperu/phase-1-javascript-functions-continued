// code your solution here
saturdayFun();
function saturdayFun(activity = "roller-skate") {
    return "This Saturday, I want to " + activity + "!";
}

mondayWork();
function mondayWork(workLocation = "go to the office") {
    return "This Monday, I will " + workLocation + ".";
}
let wrapAdjective = function(style = "*") {
    return function(adjective = "special") {
        return `You are ${style}${adjective}${style}!`
    }
}
