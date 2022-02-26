function start(){
    document.getElementById("startText").classList.add("hideBlock");
    document.getElementById("startButton").classList.add("hideBlock");

    document.getElementById("question").classList.remove("hideBlock");
    document.getElementById("question").innerHTML= "попытка"+ stage + ":" + midlle;

    document.getElementById("small").classList.remove("hideBlock");
    document.getElementById("bingo").classList.remove("hideBlock");
    document.getElementById("big").classList.remove("hideBlock");
    
}

function smallClick(){
    max = midlle;

    midlle = Math.floor((min+ max)/2);

    if (max == midlle){
        midlle -=1;
    }

    checkGame();
}

function bigClick(){
    min = midlle;

    midlle = Math.floor((min+max)/2);

    if (min == midlle){
        midlle +=1;
    }

    checkGame();
}


function bingoClick(){
    max = midlle;
    min= midlle;

    checkGame();
}

function checkGame(){
    if (min==max){
        document.getElementById("question").innerHTML = "вы загадали число:"+" " + min;

        document.getElementById("small").classList.add("hideBlock");
        document.getElementById("bingo").classList.add("hideBlock");
        document.getElementById("big").classList.add("hideBlock");

        return;
    }


stage += 1;
if (stage ==8``){
    document.getElementById("question").innerHTML = "жульничать - нехорошо";
}

document.getElementById("question").innerHTML = "попытка" + stage +  ":" + midlle;
}
let min = 0;
let max = 100;

let midlle = Math.floor((min+max)/2);

let stage = 1;