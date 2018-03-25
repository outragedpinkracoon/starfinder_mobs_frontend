import Vue from 'vue'
import EncounterBuilder from '@/components/EncounterBuilder'

describe('EncounterBuilder.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(EncounterBuilder)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent)
      .to.equal('Starfinder Encounter Builder')
  })
})
