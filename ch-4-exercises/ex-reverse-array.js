
const reverseArray = (array) => {
    
    // input check
    if (!array.length) {
        return;
    }

    let newArray = [];

    for (let index = 0; index < array.length; index++) {
        newArray[index] = array[(array.length - 1) - index];
    }

    return newArray;
}

const reverseArrayInPlace = (array) => {
    
    // input check
    if (!array.length) {
        return;
    }
    
    // remove the last element and splice it into current index location
    for (let index = 0; index < array.length; index++) {
        array.splice(index, 0, array.pop());
    }

    return array;
}
