import MainHeaderVue from "@/components/MainHeader.vue";
import { shallowMount } from "@vue/test-utils";

describe('Header.vue', () => {
    it('renders all elements', () => {
        const wrapper = shallowMount(MainHeaderVue)

        const buttonsElements = wrapper.findAll('button')
        expect(buttonsElements.length).toBe(2)
        expect(buttonsElements[0].exists()).toBeTruthy
        expect(buttonsElements[1].exists()).toBeTruthy
        expect(buttonsElements[0].text()).toContain('Dark')
        expect(buttonsElements[1].text()).toContain('Light')

        const toggleElementOff = buttonsElements[0].find('span')
        expect(toggleElementOff.exists()).toBeTruthy
        expect(toggleElementOff.text()).toContain('toggle_off')
        expect(toggleElementOff.attributes('class')).toBe('material-symbols-outlined')
        const toggleElementOn = buttonsElements[1].find('span')
        expect(toggleElementOn.exists()).toBeTruthy
        expect(toggleElementOff.text()).toContain('toggle_off')
        expect(toggleElementOn.attributes('class')).toBe('material-symbols-outlined darkMode')
    })
    it('toggles dark mode is on', async () => {
        const wrapper = shallowMount(MainHeaderVue)

        await wrapper.find('button.darkButton').trigger('click');

        expect((wrapper.vm as any).darkMode).toBe(false);

        const toggleElementOn = wrapper.find('.lightButton span');
        expect(toggleElementOn.attributes('class')).toBe('material-symbols-outlined darkMode');

        const toggleElementOff = wrapper.find('.darkButton span');
        expect(toggleElementOff.attributes('class')).toBe('material-symbols-outlined');
    })
})