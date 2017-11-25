<template>
  <div>
      <!--<button @click="togglecomponents()"> View Posts</button>-->
      <!--<button @click="current_component='add-blog'"> Add Post</button>-->
      <router-link :to="{ name: 'display' }">All Posts</router-link>
      <router-link :to="{ name: 'add' }">Add New Post</router-link>
      <router-view></router-view>
      <!--<keep-alive>-->
          <!--<component :is= "current_component"></component>-->
      <!--</keep-alive>-->


  </div>
</template>

<script>
import addBlog from './components/addBlog.vue';
import displayBlogs from './components/displayBlogs.vue';
import store from './store';

export default {
    store,
    components:{
        'add-blog': addBlog,
        'display-blogs': displayBlogs
    },
    data () {
        return{
            current_component : 'add-blog'

        }

  },
    methods: {
        togglecomponents(){
            this.current_component = 'display-blogs';

        }
    }
}
</script>

<style lang="scss">

</style>
