function multi_table(num){
    for (let i = 1; i <= 10; i++){
        console.log(`${i}x${num} = ${i*num}`);
    }
}

num = 6;

console.log(`MULTIPLICATION TABLE ${num}\n`);
multi_table(num);