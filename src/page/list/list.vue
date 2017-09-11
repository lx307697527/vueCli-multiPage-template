<template>
  <div id="app">
    <div class="g-body">
      <List/>
    </div>
  </div>
</template>

<script>


import List from 'components/List';


export default {
  name: 'app',
  components: {
    List
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
