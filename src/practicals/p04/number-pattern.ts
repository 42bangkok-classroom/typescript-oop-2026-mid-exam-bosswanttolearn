
export {};
const n = Number(process.argv[2]);
if (Number.isNaN(n) || n <= 0) process.exit(0);

for (let i = n; i >= 1; i--) {
  let row = "";
  for (let j = i; j >= 1; j--

  ) row += j.toString();
  console.log(row);
}
 