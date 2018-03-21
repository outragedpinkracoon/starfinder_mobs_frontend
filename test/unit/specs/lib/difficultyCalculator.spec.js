import calculate from '@/lib/difficultyCalculator'

xdescribe('Difficulty Calculator', () => {
  context('with 4 level 3 players, encounter exp 600', () => {
    it('should be easy', () => {
      const result = calculate({
        partyLevel: 3,
        exp: 600
      })
      expect(result).to.equal('EASY')
    })
  })

  context('with 4 level 3 players, encounter exp  800', () => {
    it('should be average', () => {
      const result = calculate({
        partyLevel: 3,
        exp: 800
      })
      expect(result).to.equal('AVERAGE')
    })
  })

  context('with 4 level 3 players, encounter exp 1200', () => {
    it('should be challenging', () => {
      const result = calculate({
        partyLevel: 3,
        exp: 1200
      })
      expect(result).to.equal('CHALLENGING')
    })
  })

  context('with 4 level 3 players, encounter exp  1600', () => {
    const result = calculate({
      partyLevel: 3,
      exp: 1600
    })
    it('should be hard', () => {
      expect(result).to.equal('HARD')
    })
  })

  context('with 4 level 3 players, encounter exp 2400', () => {
    const result = calculate({
      partyLevel: 3,
      exp: 2400
    })

    it('should be epic', () => {
      expect(result).to.equal('EPIC')
    })
  })
})
