import MainFooterVue from "@/components/MainFooter.vue";
import { shallowMount } from "@vue/test-utils";

describe('MainFooter', () => {
    it('renders all elements correctly', () => {
        const wrapper = shallowMount(MainFooterVue)

        const textElement = wrapper.find('h4')
        expect(textElement.exists()).toBe(true)
        expect(textElement.text()).toBe('This game was coded by Luna Smith and is available as an open-source project on GitHub.')
        
        
         //profile link
         const profileLink = textElement.find('a.profile-link')
         expect(profileLink.exists()).toBe(true)
         expect(profileLink.text()).toBe('Luna Smith')
         expect(profileLink.attributes('href')).toBe('https://www.lunasmithart.com/')
         expect(profileLink.attributes('target')).toBe('_blank')
        
         //gitHub link
         const gitHubLink = textElement.find('a.gitHub-link')
         expect(gitHubLink.exists()).toBe(true)
         expect(gitHubLink.text()).toBe('GitHub')
         expect(gitHubLink.attributes('href')).toBe('https://github.com/Lu-Smith/vue_punchbag_game')
         expect(gitHubLink.attributes('target')).toBe('_blank')
    })
})