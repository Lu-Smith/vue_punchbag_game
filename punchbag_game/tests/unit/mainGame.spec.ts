import MainGameVue from "@/components/MainGame.vue";
import { shallowMount } from "@vue/test-utils";

describe('MainGame.vue', () => {
    it('renders all elements', () => {
        const wrapper = shallowMount(MainGameVue)

        const bagCointainer = wrapper.find('div#bag')
        expect(bagCointainer.exists()).toBe(true)

        const healthCointainer = wrapper.find('div#bag-health')
        expect(healthCointainer.exists()).toBe(true)

        const controlsCointainer = wrapper.find('div#controls')
        expect(controlsCointainer.exists()).toBe(true)

        const punchButton = controlsCointainer.find('button')
        expect(punchButton.exists()).toBe(true)

    })
})