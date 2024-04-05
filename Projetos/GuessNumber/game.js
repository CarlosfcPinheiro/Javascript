
//variables
let num_limit = 10;
let num_init = 1;
let tries = 0;
let random_num = randomNum();

function checkGuess(){
    let guess = document.querySelector('input').value;

    if (guess == random_num){
        tries++;
        changeText('h1', 'You are right!!!');
        let tries_msg = `You found the number in ${tries} tries`;
        changeText('p', tries_msg);
        document.getElementById('restart').disabled = false;
        document.getElementById('guess_send').disabled = true;
        document.getElementById('guess_text').disabled = true;
        alterCursor("guess_send", "default")
        alterCursor("restart", "pointer")
        alterCursor("guess_text", "default")
    }
    else{
        tries++;
        if (random_num > guess){
            changeText('p', 'The secret number is upper.');
    }
        else{
            changeText('p', 'The secret number is smaller.');
        }
    }
    console.log(`tries: ${tries}`);
}

function restartGame(){
    initialState();
    tries = 0;
    document.getElementById('restart').disabled = true;
    document.getElementById('guess_send').disabled = false;
    document.getElementById('guess_text').disabled = false;
    random_num = randomNum();
    refreshInput();
}
//INITIAL STATE FUNCTION
initialState()
function initialState(){
    changeText('h1', 'GuessNumber');
    changeText('p', 'Choose a number between 1 and 10.');
    alterCursor("guess_send", "pointer")
    alterCursor("restart", "dafault")
    alterCursor("guess_text", "text")
}
//Functions no-click
function changeText(tag, content){
    let text = document.querySelector(tag);
    text.innerHTML = content;
}

function randomNum(){
    return parseInt(Math.random() * num_limit + num_init);
}

function refreshInput(){
    let refresh = document.querySelector('input'); 
    refresh.value = ''
}

function alterCursor(id, cursor_state){
    document.getElementById(id).style.cursor = cursor_state;
}
