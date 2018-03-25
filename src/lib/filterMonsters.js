const filterMonsters = (monsters, value) => {
  if (value === '' || value === undefined || value === null) return monsters
  const term = value.trim().toLowerCase()

  if (term.includes(' ')) {
    const toFind = term.split(' ')
    return monsters.filter(
      monster => {
        const monsterName = monster.name.toLowerCase()
        const allMatched = toFind.every(substring => monsterName.includes(substring))
        return allMatched
      }
    )
  } else {
    return monsters.filter(
      monster => {
        const monsterName = monster.name.toLowerCase()
        const toFind = term

        return monsterName.includes(toFind)
      }
    )
  }
}
export default filterMonsters
