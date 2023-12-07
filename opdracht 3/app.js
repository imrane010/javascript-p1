let output = document.getElementById("title");


for(let i = 0; i< 101; i++ ){
    output.innerHTML += i + "<br>" ;
}


for(let o = 100; o >= 0; o-- ){
    output.innerHTML += o + "<br>" ;
    console.log(o);
}


let cars = [ "Skoda", "Renault", "Shelby"];

console.log(cars);

for(let i = 0; i < cars.length; i++){
    output.innerHTML += cars [i] + "<br>";
}

let output2 = document.getElementById("persons");

let persons = ["Haktan", "Hakan", "Hans", "Hangelo", "Hank", "Hugo", "Hamza"]

for(let i = 0; i <persons.length; i++ ){
    output2.innerHTML += persons [i] + "<br>";
}

console.log(persons);