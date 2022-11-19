const arr= [15, 22, 36, 44, 55, 97, 68, 74];
const sum = arr.reduce((prevVal, currVal) => {
    console.log(prevVal, currVal);
    return prevVal + currVal;
}, 0);
console.log(sum);