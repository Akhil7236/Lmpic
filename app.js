const  Days = document.querySelectorAll("Days")
const  Hours = document.querySelectorAll("Hours")
const  Minutes = document.querySelectorAll("Minutes")
const  seconds = document.querySelectorAll("seconds")

const currentyear = new Date().getFullYear();

const newyearTime = new Date(`April 16 $ {currentyear + 1} 00:00:00`);


function updatecountdowntime(){
    const currentTime = new Date();
    const diff = newyearTime - currentTime
}