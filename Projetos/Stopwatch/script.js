const startBtn = document.getElementById('start_btn');
const resetBtn = document.getElementById('reset_btn');
const stopBtn = document.getElementById('stop_btn');
const contBtn = document.getElementById('continue_btn');

const hours_element = document.getElementById('hours');
const minutes_element = document.getElementById('minutes');
const seconds_element = document.getElementById('seconds');
const millisecs_element = document.getElementById('millisecs');

let interval;
let hours = 0;
let minutes = 0;
let seconds = 0;
let millisecs = 0;
let isPaused = false;

function start_Time(){
    isPaused = false;
    interval = setInterval(() => { //SetInterval é uma função própria do javascript que funciona em loop para execução um período de tempo
        if (!isPaused){
            millisecs += 10; //atualizar a variavel millisec na mesma quantidade que o tempo em setInterval(), que é 10ms
            if(millisecs === 1000){
                seconds++;
                millisecs = 0;
            }
            if (seconds === 60){
                minutes++;
                seconds = 0;
            }
            if (minutes === 60){
                hours++;
                minutes = 0;
            }
        }
        hours_element.innerHTML = format_Time(hours);
        minutes_element.innerHTML = format_Time(minutes);
        seconds_element.innerHTML = format_Time(seconds);
        millisecs_element.innerHTML = format_Millisecs(millisecs);
    }, 10)

    startBtn.style.display = "none";
    stopBtn.style.display = "block";
}

function stop_Time(){
    isPaused = true;
    stopBtn.style.display = "none";
    contBtn.style.display = "block";
}

function cont_Time(){
    isPaused = false;
    contBtn.style.display = "none";
    stopBtn.style.display = "block";
}

function reset_Time(){
    clearInterval(interval)
    millisecs = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

    stopBtn.style.display = "none";
    contBtn.style.display = "none";
    startBtn.style.display = "block";

    millisecs_element.innerHTML = "000";
    seconds_element.innerHTML = "00";
    minutes_element.innerHTML = "00";
    hours_element.innerHTML = "00";
}

//No click functions
function format_Time(time){
    return time < 10 ? `0${time}` : time; //Operador ternário para adicionar ou não o 0 antes do número
}

function format_Millisecs(time){
    return time < 100 ? `0${time}` : time;
}