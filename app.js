// START WATCH FUNCTION
function mytime(){
    let getTime = new Date();
    let hr = (getTime.getHours() < 10)? "0" + getTime.getHours() : getTime.getHours();
    min = (getTime.getMinutes() < 10)? "0" + getTime.getMinutes() : getTime.getMinutes();
    sec = (getTime.getSeconds() < 10)? "0" + getTime.getSeconds() : getTime.getSeconds();
    am_pm = (getTime.getHours() >= 12) ? "PM" : "AM";

    if(getTime.getHours() == 0){
        hr = 12;
    }else if(getTime.getHours() > 12){
        hr = getTime.getHours() - 12;
    }else{
        hr = getTime.getHours();
    }
    document.getElementsByClassName('hour')[0].innerHTML = hr;
    document.getElementsByClassName('minit')[0].innerHTML = min;
    document.getElementsByClassName('sec')[0].innerHTML = sec;
    document.getElementsByClassName('am_pm')[0].innerHTML = am_pm;

    day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    print_day = day[getTime.getDay()];
    document.getElementsByClassName('day')[0].innerHTML = print_day;
    document.getElementsByClassName('date')[0].innerHTML = getTime.getDate() + "/" + (getTime.getMonth() + 1) + "/" + getTime.getFullYear();
}

mytime();
setInterval(function(){
    mytime();
},1000);