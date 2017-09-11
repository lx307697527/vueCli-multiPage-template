<template>
  <div>
    <v-uikitDocNav/>
    <router-view/>
  </div>
</template>

<script>
  import Vue from 'vue';
  import DocNav from 'components/uikit/DocNav';
  /* eslint-disable no-new */
  export default{
    name: 'App',
    components: {
      'v-uikitDocNav': DocNav,
    },
    created(){
//      this.$router.beforeEach((to, from, next) => {
//        console.log('to',to.path);
//        if (to.path === '/') {
//          this.$router.push('/core');
//        }
//        next();
//      })
    },
  };
</script>

<style   lang="less" >

</style>
