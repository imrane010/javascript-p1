let trafik = document.getElementById("traffic-light")

function changeTrafficLight(){
    
    if(trafik.src.match("trafficLightRed.png")){
    trafik.src = "trafficLightGreen.png";
}else if(
    trafik.src.match("trafficLightGreen.png")){
        trafik.src = "trafficLightYellow.png"
}else if(
    trafik.src.match("trafficLightYellow.png")){
        trafik.src = "trafficLightRed.png"

}
}