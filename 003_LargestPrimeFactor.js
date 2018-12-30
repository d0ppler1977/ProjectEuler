/*Largest prime factor
Problem 3 
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/
function LargestPrimeFactor(num) {
    let i = 2;
    while (num > 1) {
        if (num % i === 0) {
            num /= i;
            i --;
        }
        i ++;
    }
    return i;
}
console.log(LargestPrimeFactor(process.argv[2]));