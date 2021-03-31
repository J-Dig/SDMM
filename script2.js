function theTime() {
  var currentTime=new Date();
  var hours=currentTime.getHours();
  var minutes=currentTime.getMinutes();
  var seconds=currentTime.getSeconds();
  var amPm = "AM";

   if (hours === 0){
    hours = 12;
  }
 
if(hours > 12){
   hours = hours - 12;
   amPm = "PM";
}
 
  if (hours < 10){
    hours = "0" + hours;
  }
 if (minutes < 10){
   minutes = "0" + minutes;
 }
 if (seconds < 10){
   seconds = "0" + seconds;
 }
 
 document.getElementById('hours').innerHTML= hours + ":"; 
 document.getElementById('minutes').innerHTML= minutes + ":"; 
 document.getElementById('seconds').innerHTML= seconds; 
 document.getElementById('amPm').innerHTML= amPm;
}
setInterval(theTime);

function theDate(){
  var currentDate=new Date();
  var day=currentDate.getDay();  
  var month=currentDate.getMonth();  
  var date=currentdate.getDate();
  var year=currentDate.getFullYear();  
  
document.getElementById('day').innerHTML= day + ",";
document.getElementById('month').innerHTML= month; 
document.getElementById('date').innerHTML= date; 
document.getElementById('year').innerHTML= year;

var day= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",]
var month=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
}
