setInterval(()=>{
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let hour = document.getElementById('hour_digit');
    let minutes = document.getElementById('minutes_digit')
    let seconds = document.getElementById('seconds_digit')
    let time = document.getElementById('time');

    ans = h<12?'AM':'PM';

    time.innerHTML = ans;

    h = h>12?h-12:h;
    h ='0'+h;

    hour.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    
},1000)