function factorial(num){
    let mult = 1;
    for (let i = num; i >= 1; i-=1){
        mult = mult*i;
    }
    return mult;
}

num = 4;
let fact = factorial(num);
console.log(`${num} Factorial = ${fact}`);