/*Largest palindrome product
Problem 4 
A palindromic number reads the same both ways. The largest palindrome 
made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

function LargestPalindromeProduct() {
    const max = 999;
    const palindromes = [];
    for (let i = max; i > max / 2; i --) {
        for (let j = i; j > max / 2; j --) {
            if (isPalindrome(j * i)) palindromes.push(j * i);
        }
    }
    palindromes.sort(sortNumber);
    return palindromes.pop();
}

function sortNumber(a,b) {
    return a - b;
}

function isPalindrome(num) {
    const str = num.toString(10);
    return str === str.split("").reverse().join("");
}

console.log(LargestPalindromeProduct());