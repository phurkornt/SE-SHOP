

function date (){
    const date = new Date();
    const [month, day, year] = [
        date.getMonth()+1,
        date.getDate(),
        date.getFullYear(),
    ];
    var hours = date.getHours();
    var minutes = date.getMinutes();
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    return `${year}-${month}-${day}`;
}
function currentTime (){
    const date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    return hours + ":" +minutes;
}

function datetime (){
    let output = date() +" "+currentTime();
    return output;
}

module.exports.date = date();
module.exports.currentTime = currentTime();
module.exports.datetime = datetime();