import calculateChallengeRating from '@/lib/challengeRatingCalculator'

const calculate = ({ partyLevel, encounterExp }) => {
  const challengeRating = calculateChallengeRating(encounterExp)
  if (challengeRating === -1) return { 'id': 0, name: 'TRIVIAL' }

  const averagePartyLevel = partyLevel

  const modifier = challengeRating - averagePartyLevel
  if (modifier > 3) return { 'id': 99, name: 'DEATH' }
  if (modifier < -1) return { 'id': 0, name: 'TRIVIAL' }

  return modifiers[modifier.toString()]
}

const modifiers = {
  '-1': { 'id': 1, name: 'EASY' },
  '0': { 'id': 2, name: 'AVERAGE' },
  '1': { 'id': 3, name: 'CHALLENGING' },
  '2': { 'id': 4, name: 'HARD' },
  '3': { 'id': 5, name: 'EPIC' }
}

export default calculate
