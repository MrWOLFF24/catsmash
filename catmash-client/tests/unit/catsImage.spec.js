import { expect } from 'chai'
import { shallowMount} from '@vue/test-utils'
import CatsImage from '@/components/home/CatsImage.vue'

describe('CatsImage.vue', () => {
  it('renders props.cat when passed object of cats', () => {
    const cat = {id: 2, ranking: 1, image: 'https://picsum.photos/200'}
    const wrapper = shallowMount(CatsImage, {
      propsData: { cat: {id: 2, ranking: 1, image: 'https://picsum.photos/200'} }
    })
    expect(wrapper.props().cat).to.include(cat)
  })
})
