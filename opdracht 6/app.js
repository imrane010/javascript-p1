let position = 0;
let block = document.getElementById("block");

function moveBlock(){
    position = position + 20;

    block.style.left = position + "px";
    if(position >= innerWidth){
        position = 0
    }
}



setInterval(moveBlock, 100);