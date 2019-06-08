import { expect } from 'chai'
import { shallowMount} from '@vue/test-utils'
import ScoreBtn from '@/components/buttons/ScoreBtn.vue'

describe('ScoreBtn.vue', () => {
  it('renders props.nbVotes when passed number of votes', () => {
    const nbVote = 2
    const wrapper = shallowMount(ScoreBtn, {
      propsData: { nbVotes: 2 }
    })
    expect(wrapper.text()).to.include(nbVote)
  })
})
