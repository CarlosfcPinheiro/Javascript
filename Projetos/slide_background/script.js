const content = document.getElementById('content');
const button = document.getElementById('button');

function genRandomHex(){
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    var hex = '#';

    for (var i=0; i<6; i++){
        var number_or_letter = parseInt(Math.random()*2 + 1); // 1 => Number and 2 => Letter

        if (number_or_letter == 1){
            var number = parseInt(Math.random()*9 + 0);
            hex += number;
        }
        else{
            var letter_index = parseInt(Math.random()*6 + 1) - 1;
            hex += letters[letter_index];
        }
    }
    
    return hex;
}

showAnimation = () => {
    var box = document.querySelector("#box-up");
    var hexrandom = genRandomHex();

    button.disabled = true;
    button.style.color = "#000000";
    button.className = "jump"

    box.style.background = hexrandom;
    box.className = "show";
    
    var intervalAnimation = setInterval(() => {
        box.className = box.className.replace("show", "");
        content.style.background = hexrandom;

        button.disabled = false;
        button.className = button.className.replace("jump", "");

        clearInterval(intervalAnimation);

    }, 1100);
}