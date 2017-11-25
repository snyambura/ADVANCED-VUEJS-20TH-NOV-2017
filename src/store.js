import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'


Vue.use(Vuex);

const store= new Vuex.Store({
    state: {
        blogs: {},
        comment:''
    },
    actions: {
        // LOAD_BLOG_LIST ({commit}, blogs) => {
        //     axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
        //         commit('DISPLAY_BLOGS', response.data.blogs)
        //     }, (err) => {
        //         console.log(err)
        //     })
        // },

        LOAD_BLOG_LIST : ({commit}) => {
                //api call using axios
                axios.get('https://jsonplaceholder.typicode.com/posts')
                    .then(response => {
                        commit('DISPLAY_BLOGS', {posts:response.data});
                        return response.data.blogs  ;
                    })
            },

            COMMENT: function ({commit}, blog) {
                commit('ADD_COMMENT', blog)
            }

    },
    mutations: {
        DISPLAY_BLOGS(state, posts) {
            state.blogs = posts;
        },

        ADD_COMMENT(state, blog){
            state.comment= blog;
        }

        }

});

export default  store;