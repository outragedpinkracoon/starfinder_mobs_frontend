import calculate from '@/lib/challengeRatingCalculator'

describe('Challenge Rating Calculator', () => {
  context('when the exp is 400', () => {
    it('should have a CR of 1', () => {
      const result = calculate(400)
      expect(result).to.equal(1)
    })
  })

  context('when the exp is 450', () => {
    it('should have a CR of 2', () => {
      const result = calculate(450)
      expect(result).to.equal(2)
    })
  })

  context('when the exp is 599', () => {
    it('should have a CR of 2', () => {
      const result = calculate(599)
      expect(result).to.equal(2)
    })
  })

  context('when the exp is 601', () => {
    it('should have a CR of 3', () => {
      const result = calculate(601)
      expect(result).to.equal(3)
    })
  })

  context('when the exp is above the maximum threshold', () => {
    it('should have a CR of 24', () => {
      const result = calculate(819201)
      expect(result).to.equal(24)
    })
  })

  context('when the exp is below the minimum threshold', () => {
    it('should have a CR of 1', () => {
      const result = calculate(200)
      expect(result).to.equal(1)
    })
  })
})
