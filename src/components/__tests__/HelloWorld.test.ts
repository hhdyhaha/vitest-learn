import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders initial result as 0', () => {
    const wrapper = mount(HelloWorld)
    expect(wrapper.text()).toContain('结果：0')
  })

  it('updates result when sum button is clicked with valid numbers', async () => {
    const wrapper = mount(HelloWorld)
    await wrapper.find('input[type="text"]').setValue('5')
    await wrapper.findAll('input[type="text"]')[1].setValue('3')
    await wrapper.find('button').trigger('click')
    expect(wrapper.text()).toContain('结果：8')
  })

  it('handles non-numeric input gracefully', async () => {
    const wrapper = mount(HelloWorld)
    await wrapper.find('input[type="text"]').setValue('a')
    await wrapper.findAll('input[type="text"]')[1].setValue('b')
    await wrapper.find('button').trigger('click')
    expect(wrapper.text()).toContain('结果：0')
  })

  it('handles empty input as 0', async () => {
    const wrapper = mount(HelloWorld)
    await wrapper.find('input[type="text"]').setValue('')
    await wrapper.findAll('input[type="text"]')[1].setValue('')
    await wrapper.find('button').trigger('click')
    expect(wrapper.text()).toContain('结果：0')
  })
})