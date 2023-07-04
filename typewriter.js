const sentence = "hello there from lighthouse labs";

let delay = 50;
const interval = 50;

for (const [index, char] of sentence.split('').entries()) {
  setTimeout(() => {
    process.stdout.write(char);
    if (index === sentence.length - 1) console.log("\n");
  }, delay);
  delay += interval;
}