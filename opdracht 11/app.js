let container = document.getElementById("container")
let button = document.getElementById("button")
let tijd = document.getElementById("tijd")
let starttime;
let endtime;
 
function startgame(){
   
button.style.display = "none"
container.style.backgroundColor = "red"
 
setTimeout(() => {
   container.style.backgroundColor = "green";
   starttime = Date.now()
 
 
 }, Math.floor(Math.random() * 10 + 1) *1000);
 
}
 
function stopTime(){
   if(container.style.backgroundColor == "red") return;
  endtime = Date.now()
  tijd.innerText = endtime - starttime + "ms"
  container.style.backgroundColor = "blue"
 
 
}