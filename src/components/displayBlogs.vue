<template>
    <div id="display-blogs">
        <h2>All Posts</h2>
        <button @click="view_posts">View Posts</button>

        <div v-for="blog in blogs" class="single-post">
            <h3>{{blog.title}}</h3>
            <article>
                {{blog.body}}
            </article>
            <comment></comment>
        </div>

    </div>

</template>

<script>

    import addComment from './comment.vue'
    import {mapState} from 'vuex'
    import store from '../store.js'

    export default {
        data(){
            return{
                blogs:{},
                posts: [],

            }
        },
        components : {
            comment: addComment
        },
//
        methods: {
            view_posts() {
                this.$store.dispatch('LOAD_BLOG_LIST');
                this.axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
                    console.log(response.data);
                    this.blogs = response.data;
                })
            }
        },

//        created(){
//            this.axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
//                console.log(response.data);
//                this.blogs = response.data;
//            })
//
//        }


    }

</script>

<style>
    #display-blogs{
        max-width: 800px;
        margin: 0 auto;
    }
    .single-post{
        padding:20px;
        margin: 20px 0;
        box-sizing: border-box;
        background: #C5DBDC;
    }

</style>