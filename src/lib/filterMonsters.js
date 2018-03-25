const filterMonsters = (monsters, value) => {
  if (value === '' || value === undefined || value === null) return monsters

  return monsters.filter(
    monster => {
      const monsterName = monster.name.toLowerCase()
      const toFind = value.trim().toLowerCase()

      return monsterName.includes(toFind)
    }
  )
}
export default filterMonsters
