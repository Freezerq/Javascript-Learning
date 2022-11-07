const people = [
  { name: 'Игорь', age: 25, profession: 'Dev'},
  { name: 'Ольга', age: 21, profession: 'Cleaner'},
]


// Находит человека по имени и кладёт его объект в переменную
const olga = people.find(people => people.name === 'Ольга')
console.log(olga)
