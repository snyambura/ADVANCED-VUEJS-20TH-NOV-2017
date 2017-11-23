<template>
    <div id="add-blog">
        <h3> Add a new post</h3>
        <form v-if="!submitted">
            <label>
                Title
            </label>
            <input type="text" v-model.lazy="blog.title" required>
            <p></p>
            <label>Content</label>
            <textarea v-model.lazy="blog.content"></textarea>
            <p></p>
            <label>Category</label>

            <div id="checkboxes">
                <label> uncategorized </label>
                <input type="checkbox" value="uncategorized" v-model="blog.categories"/>
                <label> category1 </label>
                <input type="checkbox" value="category1" v-model="blog.categories"/>
                <label> category2 </label>
                <input type="checkbox" value="category2" v-model="blog.categories"/>
                <label> category3 </label>
                <input type="checkbox" value="category3" v-model="blog.categories"/>

            </div>
            <p></p>
            <label>Author</label>
            <select v-model="blog.author">
                <option v-for="author in authors"> {{author}} </option>
            </select>
            <p></p>

            <button v-on:click.prevent="post()">Submit Post</button>

        </form>
        <div v-if="submitted">
            <p>Post successfully submitted</p>
        </div>
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
                submitted: false
            }
        },
        methods: {
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
