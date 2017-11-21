<template>
    <div id="display-blogs">
        <h2>All Posts</h2>
        <div v-for="blog in blogs" class="single-post">
            <h3>{{blog.title}}</h3>
            <article>
                {{blog.body}}
            </article>

            <textarea v-model="holder" placeholder="Add Comment..."></textarea>
            <br/>
            <button :disabled="holder==''" @click="add_comment">Add Comment</button>
        </div>

    </div>

</template>

<script>
    export default {
        data(){
            return{
                blogs:[],
                holder:''

            }
        },
        methods: {
            add_comment: function(){
                this.$store.dispatch('ADD_COMMENT', this.holder);
                this.holder = '';
            },

        },
        created(){
            this.axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
                console.log(response.data)
                this.blogs = response.data.slice(0.4);
            })

        }
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