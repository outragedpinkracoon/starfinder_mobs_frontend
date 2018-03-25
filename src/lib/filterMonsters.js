const filterMonsters = (monsters, value) => {
  if (value === '' || value === undefined || value === null) return monsters
  const term = value.trim().toLowerCase()

  if (term.includes(' ')) {
    return filterByMultipleTerms(monsters, term)
  } else {
    return filterBySingleTerm(monsters, term)
  }
}

const filterByMultipleTerms = (monsters, term) => {
  const toFind = term.split(' ')
  return monsters.filter(
    monster => {
      const monsterName = monster.name.toLowerCase()
      const allMatched = toFind.every(substring => monsterName.includes(substring))
      return allMatched
    }
  )
}

const filterBySingleTerm = (monsters, term) => {
  return monsters.filter(
    monster => {
      const monsterName = monster.name.toLowerCase()
      const toFind = term

      return monsterName.includes(toFind)
    }
  )
}

export default filterMonsters
