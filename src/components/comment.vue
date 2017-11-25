<template>
    <div id="display-blogs">
        <h2>All Posts</h2>

            <textarea v-model="holder" placeholder="Add Comment..."></textarea>
            <br/>
            <button :disabled="holder==''" @click="add_comment">Add Comment</button>
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
                this.$store.dispatch('COMMENT', this.holder);
                this.holder = '';
                console.log(holder);
            },

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