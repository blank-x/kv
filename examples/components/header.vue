<template>
  <header :style="$route.name === 'index' ? 'box-shadow:none' : 'box-shadow:0 10px 60px 0 rgba(29,29,31,0.07)'"
          class="page-header">

    <div class="header-container">
      <router-link :to="{name: 'index'}">测试组件库</router-link>
    </div>
  </header>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>
<style lang="scss" type="text/scss">
  .page-header {
    background-color: #fff;
    box-shadow: 0 10px 60px 0 rgba(29, 29, 31, 0.07);
    opacity: 0.98;
    position: relative !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    transition: all .3s;
    z-index: 100;

    .header-container {
      width: 90%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      height: 80px;
      justify-content: space-between;
    }
  }
</style>
