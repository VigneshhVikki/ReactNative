const arr= [15, 22, 36, 44, 55, 97, 68, 74];
const newArray = []
arr.forEach((value, index, currArr) => {
    newArray.push(value * 20 );
});
    console.log(newArray);
 