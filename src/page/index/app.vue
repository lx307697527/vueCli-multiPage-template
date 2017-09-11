<template>
  <div id="app">
    <div class="g-body">
      <Hello/>
    </div>
  </div>
</template>

<script>


import Hello from 'components/Hello';


export default {
  name: 'app',
  components: {
    Hello
  },
};


</script>

<style lang="less">
.g-body {
  background: #eee;
  overflow: hidden;
}

.g-left-shelf {
  width: 844px;
  .m-new-shelf {
    .header-tt {
      color: #f77c2b;
    }
  }
  .m-goods-shelf {
    .header-tt {
      color: #f6b52c;
    }
  }
}

.g-right-sidebar {
  width: 300px;
}
</style>
