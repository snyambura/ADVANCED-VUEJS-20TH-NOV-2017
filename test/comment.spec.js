// import { expect } from 'chai'
// import { mount } from 'avoriaz'
// import AddTask from '../src/components/pages/AddTask.vue'
// import store from '../src/store/store'

import { mount } from 'vue-test-utils';
import expect from 'expect';
import comment from '../src/components/comment.vue';


let wrapper;

beforeEach(() => {
    wrapper = mount(comment);
});


describe ('comment', () => {
    it('comment is added', () => {
        wrapper.vm.comment = 'post comment'

        wrapper.find('button').trigger('click')
        expect(wrapper.vm.comment).toContain('post comment')

    })


    it('fields are cleared on clicking add comment', () => {
        wrapper.vm.comment = 'post comment'

        wrapper.find('button').trigger('click')
        expect(wrapper.vm.comment).toContain('')
    })
})

