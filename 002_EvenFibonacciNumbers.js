/*
Each new term in the Fibonacci sequence is generated by adding the previous two terms. 
By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, 
find the sum of the even-valued terms.
*/

function EvenFibonacciNumbers(maxNum) {
    const fibo = [1,2];
    const ROOF = maxNum;
    let top = 0;
    let i = 2;
    let sum = 2; // because 2 is even and not in the loop
    while (top < ROOF) {
        fibo.push(fibo[i - 1] + fibo[i - 2]);
        top = fibo[fibo.length - 1];
        if (top % 2 === 0) sum += top;
        i ++;
    }
    return sum;
}

console.log(EvenFibonacciNumbers(process.argv[2]));