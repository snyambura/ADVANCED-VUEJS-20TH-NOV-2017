
import { mount } from 'vue-test-utils';
import expect from 'expect';
import addBlog from '../src/components/addBlog.vue';

let wrapper;

beforeEach(() => {
  wrapper = mount(addBlog);
});

describe('addBlog', () => {
    it('assertion success', () => {
        expect(wrapper.text()).toContain('Add a new post');
    });

    it('can add title', () => {
        wrapper.vm.title = 'post title'

        wrapper.find('button').trigger('click')
        expect(wrapper.vm.title).toContain('post title')

    })
    it('can add content', () => {
        wrapper.vm.content = 'post content'

        wrapper.find('button').trigger('click')
        expect(wrapper.vm.content).toContain('post content')

    })

})
