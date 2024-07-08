
/*
    From the book: 
        "The previous chapter introduced the standard function Math.min that re- turns its
        smallest argument.We can write a function like that ourselves now. Define the
        function min that takes two arguments and returns their minimum."
*/

const min = (num1, num2) => {
    if (num1 < num2) {
        return num1;
    } else if (num1 > num2) {
        return num2;
    }
}

console.log("the smaller of the numbers 2 and 5 is: ", min(2, 5));
console.log("the smaller of the numbers 56 and 23 is: ", min(56, 23));
console.log("the smaller of the numbers 4 and 4 is: ", min(4, 4));
