var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
function putimage(){
    if (randomNumber1 ===1){
        s = 'images/dice1.png'
    }
    else if (randomNumber1 ===2){
        s = 'images/dice2.png'
    }
    else if (randomNumber1 ===3){
        s = 'images/dice3.png'
    }
    else if (randomNumber1 ===4){
        s = 'images/dice4.png'
    }
    else if (randomNumber1 ===5){
        s = 'images/dice5.png'
    }
    else if (randomNumber1 ===6){
        s = 'images/dice6.png'
    }
    document.querySelectorAll('img')[0].setAttribute('src',s);
}
function putimage_(){
    if (randomNumber2 ===1){
        s = 'images/dice1.png'
    }
    else if (randomNumber2 ===2){
        s = 'images/dice2.png'
    }
    else if (randomNumber2 ===3){
        s = 'images/dice3.png'
    }
    else if (randomNumber2 ===4){
        s = 'images/dice4.png'
    }
    else if (randomNumber2 ===5){
        s = 'images/dice5.png'
    }
    else if (randomNumber2 ===6){
        s = 'images/dice6.png'
    }
    document.querySelectorAll('img')[1].setAttribute('src',s);
}

function changeHeader(){
    if (randomNumber1>randomNumber2){
        document.querySelector('h1').innerHTML='Player 1 won 🏆';
    }
    else if (randomNumber1<randomNumber2){
        document.querySelector('h1').innerHTML='Player 2 won 🏆';
    }
    else if (randomNumber1===randomNumber2){
        document.querySelector('h1').innerHTML='Draw!!';
    }

}

putimage();
putimage_();
changeHeader();