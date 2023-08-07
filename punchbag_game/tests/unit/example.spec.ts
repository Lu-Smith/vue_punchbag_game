import { shallowMount } from '@vue/test-utils'
import App from '../../src/App.vue'
import MainFooter from '../../src/components/MainFooter.vue'
import MainGame from '../../src/components/MainGame.vue'
import MainHeader from '../../src/components/MainHeader.vue'


describe('App.vue', () => {
  it('renders all elements', () => {
    const wrapper = shallowMount(App)

    const footerComponent = wrapper.findComponent(MainFooter)
    expect(footerComponent.exists()).toBe(true)

    const headerComponent = wrapper.findComponent(MainHeader)
    expect(headerComponent.exists()).toBe(true)

    const mainComponent = wrapper.findComponent(MainGame)
    expect(mainComponent.exists()).toBe(true)
  })
})
