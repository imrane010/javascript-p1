let output = document.getElementById("verlanglijst")

let verlanglijst = ["ak-74", "tsar bomb", "uranium 235", "plutonium 239", "7.63mm German Mauser Pistol"]


for(let i = 0; i < verlanglijst.length; i++){
    output.innerHTML += verlanglijst [i] + "<br>";
}


console.log(verlanglijst);