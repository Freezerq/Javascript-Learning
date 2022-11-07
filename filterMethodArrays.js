const myArr = [1, 6, 2, 6, 2, 6, 8, 99]


// const newArr = myArr.map(elem => elem * 7)
// console.log(newArr)


const oddsArr = myArr.filter(elem => {
  if (elem % 2 == 0) {
    return true;
  };
});

console.log(oddsArr)