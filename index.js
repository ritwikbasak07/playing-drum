for(var i = 0 ; i < document.querySelectorAll("button").length ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var drumButtonInnerhtml = this.innerHTML;
        makeSound(drumButtonInnerhtml);
        buttonAnimation(drumButtonInnerhtml);
        
    });
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
    document.querySelector("." + event.key).classList.add("keypress");
    var currentActive = document.querySelector("." + event.key);
    setTimeout(function(){
        currentActive.classList.remove("keypress");
    },100);
})

function makeSound(key){
    switch (key){
        case "q":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "w":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break; 
        case "a":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "s":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "d":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break; 
        case "f":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "g":
            var kick_bass = new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
            break;      
        default:                           
    }
     
     document.querySelector("." + key).classList.add("pressed");
}

function buttonAnimation(currentkey){
    var currentlyActive = document.querySelector("." + currentkey);
    currentlyActive.classList.add("pressed");
    setTimeout(function(){
        currentlyActive.classList.remove("pressed");
    },100);
}

