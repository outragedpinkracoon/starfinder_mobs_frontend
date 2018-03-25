import filter from '@/lib/filterMonsters'
import monsters from '../data/test_monsters'

describe('Challenge Rating Calculator', () => {
  context('when the filter is empty', () => {
    it('returns all the monsters', () => {
      const result = filter(monsters, '')
      expect(result).to.deep.equal(monsters)
    })
  })

  context('when the filter is undefined', () => {
    it('returns all the monsters', () => {
      const result = filter(monsters)
      expect(result).to.deep.equal(monsters)
    })
  })

  context('when the filter is null', () => {
    it('returns all the monsters', () => {
      const result = filter(monsters, null)
      expect(result).to.deep.equal(monsters)
    })
  })

  context('when the filter is the exact name', () => {
    it('returns the exact match', () => {
      const result = filter(monsters, 'Space Goblin Zaperator')
      const expectedMonsters = [
        {
          'id': 3,
          'name': 'Space Goblin Zaperator',
          'cr': 0.33,
          'exp': 135,
          'type': 'Humanoid'
        }
      ]
      expect(result).to.deep.equal(expectedMonsters)
    })
  })

  context('when the filter is a lower case exact match', () => {
    it('returns the exact match', () => {
      const result = filter(monsters, 'space goblin zaperator')
      const expectedMonsters = [
        {
          'id': 3,
          'name': 'Space Goblin Zaperator',
          'cr': 0.33,
          'exp': 135,
          'type': 'Humanoid'
        }
      ]
      expect(result).to.deep.equal(expectedMonsters)
    })
  })

  context('when the filter is a mixed case exact match', () => {
    it('returns the exact match', () => {
      const result = filter(monsters, 'Space GoblIn zaPerator')
      const expectedMonsters = [
        {
          'id': 3,
          'name': 'Space Goblin Zaperator',
          'cr': 0.33,
          'exp': 135,
          'type': 'Humanoid'
        }
      ]
      expect(result).to.deep.equal(expectedMonsters)
    })
  })

  context('when the filter has extra spaces', () => {
    it('returns the matching monster', () => {
      const result = filter(monsters, '   Space Goblin Zaperator   ')
      const expectedMonsters = [
        {
          'id': 3,
          'name': 'Space Goblin Zaperator',
          'cr': 0.33,
          'exp': 135,
          'type': 'Humanoid'
        }
      ]
      expect(result).to.deep.equal(expectedMonsters)
    })
  })

  context('when the filter is a part of a match', () => {
    context('when only one monster matches', () => {
      it('returns a single monster that has a part match', () => {
        const result = filter(monsters, 'perato')
        const expectedMonsters = [
          {
            'id': 3,
            'name': 'Space Goblin Zaperator',
            'cr': 0.33,
            'exp': 135,
            'type': 'Humanoid'
          }
        ]
        expect(result).to.deep.equal(expectedMonsters)
      })
    })

    context('when the filter is two substrings', () => {
      it('returns the matching monster', () => {
        const result = filter(monsters, 'gob zap')
        const expectedMonsters = [
          {
            'id': 3,
            'name': 'Space Goblin Zaperator',
            'cr': 0.33,
            'exp': 135,
            'type': 'Humanoid'
          }
        ]
        expect(result).to.deep.equal(expectedMonsters)
      })
    })

    context('when multiple monsters match', () => {
      it('returns the monsters that have a part match', () => {
        const result = filter(monsters, 'Space Gob')
        const expectedMonsters = [
          {
            'id': 3,
            'name': 'Space Goblin Zaperator',
            'cr': 0.33,
            'exp': 135,
            'type': 'Humanoid'
          },
          {
            'id': 24,
            'name': 'Space Goblin Honchohead',
            'cr': 2,
            'exp': 600,
            'type': 'Humanoid'
          },
          {
            'id': 87,
            'name': 'Space Goblin Monarch',
            'cr': 20,
            'exp': 307200,
            'type': 'Humanoid'
          }
        ]
        expect(result).to.deep.equal(expectedMonsters)
      })
    })
  })
})
