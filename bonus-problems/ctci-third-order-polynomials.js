
// find all positive integer solutions such that a^3 + b^3 = c^3 + d^3

let n = 1000;
let pairMap = new Map();
let solutions = [];

// build a map of pairs (value) and the sum of the cubes of the pairs (key)
for (let c = 1; c <= n; c++) {
    for (let d = 1; d <= n; d++) {
        if (c !== d) {
            let list;
            let result = c**3 + d**3;
            let pair = [c,d];
            // check for an existing list of pairs for the current sum of cubes
            pairMap.has(result) ? list = pairMap.get(result) : list = [];
            // prevent duplicate pairs, even if they are not in the same order
            if (
                !list.find((existingPair) => existingPair.toString() === pair.toString()) &&
                !list.find((existingPair) => existingPair.toString() === pair.reverse().toString())
            ) {
                list.push(pair);
            }
            pairMap.set(result, list);
        }
    }
}

// check through all pairs for unique matches and add to solutions
pairMap.forEach((pairList, result) => {
    pairList.forEach((pair) => {
        pairList.forEach((pair2) => {
            if (
                pair.toString() !== pair2.toString() &&
                pair.toString() !== pair2.reverse().toString() &&
                !solutions.find(solution => solution.toString() === [...pair,...pair2].toString()) &&
                !solutions.find(solution => solution.sort().toString() === [...pair,...pair2].sort().toString())
            ) {
                solutions.push([...pair,...pair2]);
            }
        })
    })
})
console.log(solutions);

