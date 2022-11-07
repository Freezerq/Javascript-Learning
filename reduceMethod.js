const myArr = [1, 6, 2, 6, 2, 6, 8, 99]


// const newArr = myArr.map(elem => elem * 7)
// console.log(newArr)

// Сумма элементов Array
const oddsArr = myArr.reduce((total, myArr) => total + myArr, 0);

console.log(oddsArr)