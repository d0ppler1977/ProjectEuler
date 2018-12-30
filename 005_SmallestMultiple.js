/*
Smallest multiple
Problem 5 
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/
function SmallestMultiple() {
    let num = 2520;
    while (true) {
        num += 2;
        let remainder = 0;
        for (let i = 2; i < 21; i ++) {
            remainder += num % i;
        }
        if (remainder === 0) return num;
    }
}

console.log(SmallestMultiple());
