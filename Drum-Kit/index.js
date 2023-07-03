function buttonAnimation(content){
    var activebutton = document.querySelector("."+content);
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed")
    },100);
}
function respond(content){
    switch (content) {
        case "w":
            var tom1= new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2= new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3= new Audio("./sounds/tom-3.mp3");
            tom3.play();
        case "d":
            var tom4= new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash=new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            break;
    }
}


let arr=document.querySelectorAll(".drum");
for(let x of arr){

    x.addEventListener("click",function(){
       respond(x.textContent);
       buttonAnimation(x.textContent);
    }
    );
}

document.addEventListener("keydown",function(event){
    respond(event.key);
    buttonAnimation(event.key);
})

