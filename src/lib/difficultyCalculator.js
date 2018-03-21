import calculateChallengeRating from '@/lib/challengeRatingCalculator'

const calculate = ({ partyLevel, encounterExp }) => {
  const challengeRating = calculateChallengeRating(encounterExp)
  if (challengeRating === -1) return 'TRIVIAL'

  const averagePartyLevel = partyLevel

  const modifier = challengeRating - averagePartyLevel
  console.log(challengeRating, partyLevel, encounterExp)
  if (modifier > 3) return 'DEATH'
  if (modifier < -1) return 'TRIVIAL'

  return modifiers[modifier.toString()]
}

const modifiers = {
  '-1': 'EASY',
  '0': 'AVERAGE',
  '1': 'CHALLENGING',
  '2': 'HARD',
  '3': 'EPIC'
}

export default calculate
