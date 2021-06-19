const bday = '31 Mar 2022';
const daysel = document.getElementById('days')
const hoursel = document.getElementById('hours')
const minutesel = document.getElementById('minutes')
const secondsel = document.getElementById('seconds')
function countdown()
{
    const birthday = new Date(bday);
    const currdate = new Date();
    const totalseconds = (Math.abs(birthday-currdate))/1000;
const days = Math.floor(totalseconds/3600/24);    
const hours = Math.floor(totalseconds/3600) %24;
const minutes = Math.floor(totalseconds/60) %60;
const seconds = Math.floor(totalseconds)%60;    
console.log(days,hours,minutes,seconds);
daysel.innerHTML = days;
hoursel.innerHTML = hours;
minutesel.innerHTML = minutes;
secondsel.innerHTML = seconds;
}
countdown();
setInterval(countdown,1000);