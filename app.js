function digitalClock(){
    let date = new Date();
    let hours = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours > 12 ? 'P.M':'A.M';
    hours = hours > 12 ? hours - 12 : hours ;
    hours = hours < 10 ? '0' + hours : hours ;
    minute = minute < 10 ? '0' + minute: minute;
    seconds = seconds < 10 ? '0' + seconds: seconds;
    let finalTime = `${hours}:${minute}:${seconds}`;
    document.getElementById('time').innerText = finalTime;
    document.querySelector('small').innerText = ampm;
}
setInterval(digitalClock,1000);