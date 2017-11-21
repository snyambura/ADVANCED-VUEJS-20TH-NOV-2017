<template>
  <div>
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
