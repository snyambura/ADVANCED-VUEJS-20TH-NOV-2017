<template>
  <div>
      <router-link :to="{ name: 'display' }">All Posts</router-link>
      <router-link :to="{ name: 'add' }">Add New Post</router-link>
      <router-view></router-view>

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

        }

  }
}
</script>

<style lang="scss">

</style>
