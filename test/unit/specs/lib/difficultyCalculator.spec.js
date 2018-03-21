import calculate from '@/lib/difficultyCalculator'

xdescribe('Difficulty Calculator', () => {
  context('with 4 level 3 players, encounter exp 600', () => {
    it('should be easy', () => {
      const result = calculate()
      expect(result).to.equal('EASY')
    })
  })

  context('with 4 level 3 players, encounter exp 800', () => {
    it('should be average', () => {
      const result = calculate({
        partyLevel: 3,
        encounterExp: 800
      })
      expect(result).to.equal('AVERAGE')
    })
  })

  context('with 4 level 3 players, encounter exp 1200', () => {
    it('should be challenging', () => {
      const result = calculate({
        partyLevel: 3,
        encounterExp: 1200
      })
      expect(result).to.equal('CHALLENGING')
    })
  })

  context('with 4 level 3 players, encounter exp  1600', () => {
    it('should be hard', () => {
      const result = calculate({
        partyLevel: 3,
        encounterExp: 1600
      })
      expect(result).to.equal('HARD')
    })
  })

  context('with 4 level 3 players, encounter exp 2400', () => {
    it('should be epic', () => {
      const result = calculate({
        partyLevel: 3,
        encounterExp: 2400
      })
      expect(result).to.equal('EPIC')
    })
  })

  describe('when the xp is less than 400', () => {
    it('should be trivial', () => {
      const result = calculate(50)
      expect(result).to.equal('TRIVIAL')
    })
  })

  describe('when the xp is more than 3 levels higher than the APL', () => {
    it('should be death', () => {
      const result = calculate(50)
      expect(result).to.equal('DEATH')
    })
  })

  describe('when the xp is more than 1 levels below the APL', () => {
    it('should be trivial', () => {
      const result = calculate(50)
      expect(result).to.equal('TRIVIAL')
    })
  })

  describe('when the xp is greater than 819200', () => {
    it('should be trivial', () => {
      const result = calculate(50)
      expect(result).to.equal('DEATH')
    })
  })
})
