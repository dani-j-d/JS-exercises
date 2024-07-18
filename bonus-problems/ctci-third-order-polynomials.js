
// find all positive integer solutions such that a^3 + b^3 = c^3 + d^3

let pairs = new Map();
let solutions = new Map();
let n = 100;
for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
        let result = i**3 + j**3;
        pairs.set([i, j], result);
    }
}
console.log(pairs)
pairs.forEach((result, pair) => {
    pairs.forEach((anotherResult, anotherPair) => {
        if (
            anotherResult === result &&
            solutions.has(pair) === false &&
            anotherPair !== pair
            ) {
            solutions.set(pair, anotherPair);
        }
    })
})

console.log(solutions);
