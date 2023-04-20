var nummber = document.querySelectorAll(".drum").length;
//detects button clicks
for (var i=0; i<nummber; i++){

    document.querySelectorAll("button")[i].addEventListener("click", function() {
        var buttonInnerHtml=this.innerHTML;
        makeSound(buttonInnerHtml);  
        buttonAnimation(buttonInnerHtml);
        });
}
//detects keyboard keys
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);

});
//adds audio to the particular buttons and keys
function makeSound(key){
    switch(key){
        case"w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;
        case"a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;
        case"s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;
        case"d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;
        case"j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;  
        case"k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;
        case"l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;

        default: console.log(buttonInnerHTML);
      }

}
 
//this function adds a classlist called pressed which gets 
//triggereed when a particular button or key mentioned gets clicked.
//and applies some animation to it
//here pressed is a css class that gets imported and applies the effect
function buttonAnimation(currentkey){

    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);

    }
        
    


 