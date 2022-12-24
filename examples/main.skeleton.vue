<template>
  <div class="main-skeleton">
    <kv-skeleton height="80px"></kv-skeleton>
    <div>
      <div class="skeleton-container">
        <div class="skeleton">
          <kv-skeleton height="300px"></kv-skeleton>
        </div>
        <kv-skeleton height="45px"></kv-skeleton>
      </div>
      <div class="skeleton-bottom">
        <kv-skeleton height="45px"></kv-skeleton>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        msg: 'hello vue'
      }
    }
  }
</script>
<style lang="scss">
  .skeleton-container {
    width: 960px;
    margin: 0 auto;
    text-align: center;
    padding: 100px 0;
  }

  .skeleton-bottom {
    width: 960px;
    margin: 0 auto;
    text-align: center;
  }

  .skeleton {
    margin: 0 auto;
    width: 300px;
    margin-bottom: 56px;
  }
</style>
