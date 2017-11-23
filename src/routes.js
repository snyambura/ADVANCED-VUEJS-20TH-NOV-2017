import displayBlogs from './components/displayBlogs.vue';
import addBlog from './components/addBlog.vue';
export default [
    {
        path: '/',
        name: 'display',
        component:displayBlogs
    },
    {
        path: '/add',
        name: 'add',
        component:addBlog}
]