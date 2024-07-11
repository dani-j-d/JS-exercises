
const range = (start, end, step = 1) => {

    let numberRange = [];
    const stepDirection = Math.sign(step);

    // input sanitization
    if( 
        typeof start !== "number" ||
        typeof end !== "number" ||
        (start < end && stepDirection === -1) || // 'end' value must be lower than 'start' in order to count down
        (start > end && stepDirection === 1)
    ) {
        console.log("Invalid parameters")
        return;
    }

    if (stepDirection === 1) {

        // starting with the first parameter, add the value to an array and count up until reaching the second parameter
        for (let index = start; index <= end ; index = index + step) {
            numberRange.push(index);
        }
    } else if (stepDirection === -1) {

        // starting with the first parameter, add the value to an array and count down until reaching the second parameter
        for (let index = start; index >= end ; index = index + step) {
            numberRange.push(index);
        }
    } else if (stepDirection === 0) {

        // if the user specifies a step of zero, then only the start parameter is added
        numberRange.push(start);
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
