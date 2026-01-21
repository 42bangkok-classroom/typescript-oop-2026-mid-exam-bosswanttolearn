// Write your code below

const arg = process.argv[2];
const n = Number(arg);

if (arg === undefined || Number.isNaN(n) || n <= 0) process.exit(0);

for (let i = 1; i <= n; i++) {
  if (i % 15 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}
