import MainGameVue from "@/components/MainGame.vue";
import { shallowMount } from "@vue/test-utils";

describe('MainGame.vue', () => {
    it('renders all elements', () => {
        const wrapper = shallowMount(MainGameVue)

        const bagCointainer = wrapper.find('div#bag')
        expect(bagCointainer.exists()).toBe(true)

    })
})