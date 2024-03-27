// Guess Game

let limit = 800;
let randomnum = parseInt(Math.random() * limit);
let num = 0;

while (num != randomnum){
    let num = window.prompt(`Enter a number between 1 and ${limit}`);

    if (num == randomnum){
        break;
    }
    else if (num > randomnum){
        window.alert(`The number is less than ${num}`);
    }
    else{
        window.alert(`The number is upper than ${num}`);
    }
}
window.alert("Well done! You're right!");
