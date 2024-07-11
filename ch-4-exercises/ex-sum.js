
const range = (start, end) => {

    let numberRange = [];

    // input sanitization
    if( typeof start !== "number" || typeof end !== "number" ) {
        return;
    }

    // starting with the first parameter, add the value to an array and count up until reaching the second parameter
    for (let index = start; index <= end; index++) {
        numberRange.push(index);
    }

    return numberRange;
}

const sum = (numbers) => {

    let total = 0;

    // empty array and add contents to total
    while (numbers.length > 0) {
        total = total + numbers.pop();
    }

    return total;
}