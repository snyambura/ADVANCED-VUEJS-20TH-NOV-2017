<template>
    <div id="add-blog">
        <title :tle="blog.title" @TitleChanged="blog.title=$event"></title>
        <h3> Preview </h3>

        <div id="preview">
            <h4>Preview</h4>
            <p> Title: </p>
            <p>{{blog.title}}</p>
            <p>Content</p>
            <p>{{blog.content}}</p>
            <p> Categories </p>
            <ul>
                <li v-for="category in blog.categories">{{category}}.</li>
            </ul>
            <p> Author : {{blog.author}} </p>
        </div>


    </div>
</template>

<script>
    import addBlog from './addBlog.vue'

    export default {
        data() {
            return {
                blog: {
                    title: "",
                    content: " ",
                    categories: [],
                    author: ""
                },
                authors: ['A', 'B', 'C', 'D'],
//                submitted: false
            }
        },

        components: {
            'title' : addBlog
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
