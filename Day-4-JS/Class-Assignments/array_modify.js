const array = [1,2,3];

array.forEach(element => {
    console.log(element*2);
});
// Map in an array
const result = array.map((num) => num * 2);

console.log(result);

//Filter
const filter = array.filter((num) => num % 2 === 0);

console.log(filter);

//reduce

const sum = array.reduce((acc, num) => acc + num, 0);

console.log(sum);