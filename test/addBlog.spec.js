require('jsdom-global')();


import { mount } from 'vue-test-utils';
import addBlog from '../src/components/addBlog.vue';
import expect from 'expect';

// describe('addBlog', () =>{
//     // it('logs the posted article', () => {
//     //     let wrapper = mount(addBlog);
//     //
//     //     expect(wrapper.vm.b
//     // })
//     it('assertion success', async () => {
//         let wrapper = mount(addBlog);
//         const result = await resolvingPromise;
//         expect(result).to.equal('promise resolved');
//     });
// })

describe('Mentioner', () => {
    it('renders the correct message', () => {
        const vm = new Vue(addBlog).$mount();
        console.log(vm.$el.textContent);
    })
})


// var MyComponent = {
//     data: function() {
//         return {
//             message: 'hello!'
//         }
//     },
//     template: `<div>{{ message }}</div>`,
// };

describe('Mentioner', () => {
    it('renders the correct message', () => {
        const vm = new Vue(addBlog).$mount();
        console.log(vm.$el.textContent);
    })
})