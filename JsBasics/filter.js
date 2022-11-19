const arr= [15, 22, 36, 44, 55, 97, 68, 74];
const newArray = arr.filter((value, index, currArr) => {
return value > 20;
});
console.log(newArray);
