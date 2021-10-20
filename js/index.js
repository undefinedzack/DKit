var buttons = document.querySelectorAll(".container div");


for(var i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener("click",function (){
        
        var name = this.firstElementChild.innerHTML;
        makeSound(name);
        makeAnimation(name);
    });
}



document.addEventListener("keypress",function(event){
   console.log(event.key);
    makeSound(event.key);
    makeAnimation(event.key);
});

function makeSound(key)
{
    switch (key.toUpperCase()) {
        case "W":
            var audio = new Audio('/sounds/tom-1.mp3');
            audio.play();
            break;
        case "A":
            new Audio('/sounds/tom-2.mp3').play();
            break;
        case "S":
            new Audio('/sounds/tom-3.mp3').play();
            break;
        case "D":
            new Audio('/sounds/tom-4.mp3').play();
            break;
        case "J":
            new Audio('/sounds/snare.mp3').play();
            break;
        case "K":
            new Audio('/sounds/crash.mp3').play();
            break;
        case "L":
            new Audio('/sounds/kick-bass.mp3').play();
            break;
        default:
            break;
    }
}

function makeAnimation(key)
{
    var selected = document.querySelector("."+key.toLowerCase());
    selected.classList.add("pressed");
    
    setTimeout(function () {
        selected.classList.remove("pressed");    
    },100);
}