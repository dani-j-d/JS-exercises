
const deepEqual = (value1, value2) => {
    
    let equal = false;
    if (typeof value1 === "object" && typeof value2 === "object" && value1 !== null && value2 !== null) {
        let value1Keys = Object.keys(value1);
        let value2Keys = Object.keys(value2);
        if (value1Keys.length === value2Keys.length) {
            equal = true;

            value1Keys.forEach(elementOfV1 => {
                if(!value2Keys.includes(elementOfV1)) {
                    equal = false;
                }
            })
        }
    } else if (
        (typeof value1 !== "object" && typeof value2 === null) ||
        (typeof value2 !== "object" && typeof value1 === null) ||
        (typeof value1 !== "object" && typeof value2 !== "object")
        ) {
        if (value1 === value2) {
            equal = true;
        }
    }

    return equal;

}
