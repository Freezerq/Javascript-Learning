function noOdds( values ){
  return values.filter((elem => elem % 2 == 0 ? true : false))
}