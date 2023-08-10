import MainHeaderVue from "@/components/MainHeader.vue";
import { shallowMount } from "@vue/test-utils";

describe('Header.vue', () => {
    it('renders all elements', () => {
        const wrapper = shallowMount(MainHeaderVue)

        const buttonsElements = wrapper.findAll('button')
        expect(buttonsElements.length).toBe(2)
        expect(buttonsElements[0].exists()).toBeTruthy
        expect(buttonsElements[1].exists()).toBeTruthy
    })
})