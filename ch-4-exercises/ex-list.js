
// define list
let list = {
    value: null,
    rest: null
}

const prepend = (element, list) => {
    return {
        value: element,
        rest: list
    }
};

const nth = (list, number, counter = 0) => {

    let target;
    
    if (counter === number) {
        target = list.value;
    } else if (!list.rest) {
        target = undefined;
    } else {
        counter++,
        target = nth(list.rest, number, counter);
    }

    return target;
};

const arrayToList = (array) => {

    let newList = {...list};

    for (let iterator = 0; iterator < array.length; iterator++) {
        let entry = {...list};
        entry.value = array[(array.length - 1) - iterator];
        if(iterator > 0) {
            entry.rest = {...newList};
        }
        newList = {...entry};
    }

    return newList;
}

const listToArray = (list) => {
    
    let newArray = [];

    do {
        newArray.push(list.value);
        list = list.rest;
    } while (list);

    return newArray;
}
