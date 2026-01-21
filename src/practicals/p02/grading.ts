// Write your code below
export {};
const arg = process.argv[2];
const score = Number(arg);


if (
  arg === undefined ||
  Number.isNaN(score) ||
  score < 0 ||
  score > 100
) {
  console.log("Invalid Input");
  process.exit(0);
}

if (score >= 80) console.log("A");
else if (score >= 70) console.log("B");
else if (score >= 60) console.log("C");
else if (score >= 50) console.log("D");
else console.log("F");
