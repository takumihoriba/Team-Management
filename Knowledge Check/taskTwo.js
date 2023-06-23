//This is dedicated for task 2

const startTime = Date.now()
var a = new Date();
const endTime = startTime + 30000;


function generatePrimeNumbers() {
    // This function should generate the prime numbers between.
    // This code should stop running after roughly 30 seconds.

    const primeNumbers  = [];
    

    while (true) {
        const startTime = Date.now()
        if (startTime > endTime) {
            var b = new Date();
            return [b, primeNumbers];
        }
    }
}

primeNumbers = generatePrimeNumbers();
var difference = (primeNumbers[0] - a) / 1000;

console.log('This is the prime number array: ', primeNumbers[1]);
console.log('This is the time it took to generate the prime numbers: ', difference, 'seconds')