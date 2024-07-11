
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

