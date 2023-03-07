const { readFileSync, writeFileSync } = require("fs");
console.log("start");
// read file input
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first, second);

// write file
// put {flag: 'a'} to add text to existing text or do not put flags if you want it to override
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result, old sport: ${first}, ${second}`
);
console.log("done with this task");
console.log("starting the next one");
