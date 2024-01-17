let trafficLight = document.getElementById("traffic-light")
let aan = document.getElementById("aan")

function red(){
    trafficLight.src = "./img/trafficLightRed.png";
}

function yellow(){
    trafficLight.src = "./img/trafficLightYellow.png";
}

function green(){
    trafficLight.src = "./img/trafficLightGreen.png";
}

function shutoff(){
    trafficLight.src = "./img/shutOff.png";
}

function turnOn(){
    trafficLight.src = "./img/trafficLightRed.png";
    trafficLight.src = "./img/trafficLightYellow.png";
    trafficLight.src = "./img/trafficLightGreen.png";
}

function blink(){
    trafficLight.src = "./img/trafficLightYellow.png";
}

function turnOff(){
    trafficLight.src = "./img/shutOff.png";
}

working = setTimeout();
working = setTimeout();


outOfOrder;