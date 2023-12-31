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

        //buttons

        expect(controlsCointainer.findAll('button').length).toBe(2);

        const buttons = controlsCointainer.findAll('button');

        expect(buttons[0].text()).toBe('Punch');
        expect(buttons[1].text()).toBe('Restart');
    })
    it('punch method decrese health by 10', () => {
        const wrapper = shallowMount(MainGameVue)

        expect(wrapper.vm.health).toBe(100)

        wrapper.vm.punch()

        expect(wrapper.vm.health).toBe(90)
        expect(wrapper.vm.ended).toBe(false)
        wrapper.vm.punch()
        wrapper.vm.punch()
        wrapper.vm.punch()
        wrapper.vm.punch()
        wrapper.vm.punch()
        wrapper.vm.punch()
        wrapper.vm.punch()
        wrapper.vm.punch()
        wrapper.vm.punch()
        expect(wrapper.vm.health).toBe(0)
        expect(wrapper.vm.ended).toBe(true)

    })
    it('restart method resets health to 100', () => {
        const wrapper = shallowMount(MainGameVue);

        (wrapper.vm as any).health = 50;

        wrapper.vm.restart()

        expect(wrapper.vm.health).toBe(100)
        expect(wrapper.vm.ended).toBe(false)
    })
})