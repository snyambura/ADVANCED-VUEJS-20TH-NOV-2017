<template>
    <div id="add-blog">
        <h3> Add author</h3>
        <form v-if="!submitted">
            <label>
                Name
            </label>
            <input type="text">

            <p></p>

            <button v-on:click.prevent="post()">Submit Post</button>

        </form>




    </div>
</template>

<script>
    export default {

        data() {
            return {
                author :''
            }
        },
        methods: {
            getTitle(event){
                this.blog.title = event.target.value;
                this.$emit("TitleChanged", this.blog.title)
            },

            post: function() {
                this.axios.post('https://jsonplaceholder.typicode.com/posts',{
                    title: this.blog.title,
                    body: this.blog.content,
                    userId:1,
                }).then(function(data){
                    console.log(data)
//                    this.submitted=true;
                })

            }

        }
    }
</script>

<style lang="scss">
    #add-blog *{
        box-sizing: border-box;
    }
    #add-blog{
        margin: 20px auto;
        max-width: 500px;
    }
    label{
        display: block;
    }
    input[type="text"], textarea{
        display: block;
        width: 100%;
        padding: 8px;
    }
    #preview{
        padding: 10px 20px;
        border: 1px solid;
        margin: 30px 0;
    }
    h4{
        margin-top: 10px;
    }
    #checkboxes input{
        display: inline-block;
        margin-right: 10px;

    }
    #checkboxes label{
        display: inline-block;
    }

</style>
