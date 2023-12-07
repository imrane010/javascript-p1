let winkelmand = ["Bananen", "Whiskey", "Chips", "Bonen", "Aardappelen"]

let anus = document.getElementById("aap")

let output = document.getElementById("lenght");
let winkela = document.getElementById("winkela")
let getsortednoob = document.getElementById("getsortednoob")

output.innerText = "Er zitten " + winkelmand.length + " producten in mijn winkelmand";

let aap = document.getElementById("producten")

aap.innerText = winkelmand

aap.innerText = winkelmand[3] + ", staat op de vierde plek in uw winkelmand"

winkelmand[1] = "Bier"

let monke = document.getElementById("monke")


function producten_toevoegen(){
winkelmand.push("slaves")
monke.innerText = winkelmand

if(winkelmand.length > 1 ){
   monke.innerText = winkelmand
}else{monke.innerText = "u heeft niet genoeg producten om te tonen"}
}



if(winkelmand[4] == "drop"){
    monke.innerText = winkelmand;
}else {
    monke.innerText = "u heeft geen drop"
}

anus.innerText = winkelmand.join(" ")


winkelmand.splice(0, 2,)
winkela.innerText = winkelmand

winkelmand.sort()

getsortednoob.innertext = winkelmand