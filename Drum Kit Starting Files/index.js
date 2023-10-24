const kick_bass = new Audio("./sounds/kick-bass.mp3");
const snare = new Audio("./sounds/snare.mp3");
const tom1 = new Audio("./sounds/tom-1.mp3");
const tom2 = new Audio("./sounds/tom-2.mp3");
const tom3 = new Audio("./sounds/tom-3.mp3");
const tom4 = new Audio("./sounds/tom-4.mp3");
const crash = new Audio("./sounds/crash.mp3");

var elements = document.querySelectorAll(".drum");
for(var i = 0 ; i < elements.length ; i++){
    elements[i].addEventListener("click" , function(){
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
    elements[i].addEventListener("keydown" , function(event){
        makeSound(event.key);
        buttonAnimation(event.key);
    });
}

function makeSound(key){
    switch(key){
        case 'w': tom1.play();  break;
        case 'a': tom2.play();  break;
        case 's': tom3.play();  break;
        case 'd': tom4.play();  break;
        case 'j': snare.play(); break;
        case 'k': crash.play(); break;
        case 'l': kick_bass.play(); break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    } , 100);
}
