const arr= [15, 22, 36, 44, 55, 97, 68, 74];
const newArray = arr.map((value, index, currArr) => {
    return value * 10
}); 

console.log(newArray); 