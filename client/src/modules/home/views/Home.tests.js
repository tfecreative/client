import { shallowMount } from '@vue/test-utils'
import Home from '@/modules/home/views/Home.vue'

describe('Home.vue', () => {
  it('renders welcome message', () => {
    const wrapper = shallowMount(Home)
    expect(wrapper.text()).toMatch('Welcome!')
  })
})
