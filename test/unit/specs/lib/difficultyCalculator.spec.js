import calculate from '@/lib/difficultyCalculator'

describe('Difficulty Calculator', () => {
  context('with level 3 players, encounter exp 600', () => {
    it('should be easy', () => {
      const result = calculate({
        partyLevel: 3,
        encounterExp: 600
      })
      expect(result).to.deep.equal({ 'id': 1, name: 'EASY' })
    })
  })

  context('with level 3 players, encounter exp 800', () => {
    it('should be average', () => {
      const result = calculate({
        partyLevel: 3,
        encounterExp: 800
      })
      expect(result).to.deep.equal({ 'id': 2, name: 'AVERAGE' })
    })
  })

  context('with level 3 players, encounter exp 1200', () => {
    it('should be challenging', () => {
      const result = calculate({
        partyLevel: 3,
        encounterExp: 1200
      })
      expect(result).to.deep.equal({ 'id': 3, name: 'CHALLENGING' })
    })
  })

  context('with level 3 players, encounter exp 1600', () => {
    it('should be hard', () => {
      const result = calculate({
        partyLevel: 3,
        encounterExp: 1600
      })
      expect(result).to.deep.equal({ 'id': 4, name: 'HARD' })
    })
  })

  context('with level 3 players, encounter exp 2400', () => {
    it('should be epic', () => {
      const result = calculate({
        partyLevel: 3,
        encounterExp: 2400
      })
      expect(result).to.deep.equal({ 'id': 5, name: 'EPIC' })
    })
  })

  describe('when the xp is less than 400', () => {
    it('should be trivial', () => {
      const result = calculate({
        partyLevel: 3,
        encounterExp: 50
      })
      expect(result).to.deep.equal({ 'id': 0, name: 'TRIVIAL' })
    })
  })

  describe('when the CR is more than 3 levels higher than the APL', () => {
    it('should be death', () => {
      const result = calculate({
        partyLevel: 3,
        encounterExp: 10000
      })
      expect(result).to.deep.equal({ 'id': 99, name: 'DEATH' })
    })
  })

  describe('when the xp is more than 1 level below the APL', () => {
    it('should be trivial', () => {
      const result = calculate({
        partyLevel: 2,
        encounterExp: 10
      })
      expect(result).to.deep.equal({ 'id': 0, name: 'TRIVIAL' })
    })
  })

  describe('when the xp is greater than 819200', () => {
    it('should be death', () => {
      const result = calculate({
        partyLevel: 20,
        encounterExp: 819500
      })
      expect(result).to.deep.equal({ 'id': 99, name: 'DEATH' })
    })
  })
})
