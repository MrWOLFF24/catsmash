import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import NavBar from '@/components/navbar/NavBar.vue'

describe('will mount navbar component', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(NavBar, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})
