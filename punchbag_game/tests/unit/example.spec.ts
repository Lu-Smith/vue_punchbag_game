import { shallowMount } from '@vue/test-utils'
import App from '../../src/App.vue'
import MainFooter from '../../src/components/MainFooter.vue'


describe('App.vue', () => {
  it('renders all elements', () => {
    const wrapper = shallowMount(App)
    const footerComponent = wrapper.findComponent(MainFooter)
    expect(footerComponent.exists()).toBe(true)
  })
})
