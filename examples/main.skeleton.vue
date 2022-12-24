<template>
  <div class="main-skeleton">
    <x-skeleton height="80px"></x-skeleton>
    <div>
      <div class="skeleton-container">
        <div class="skeleton">
          <x-skeleton height="300px"></x-skeleton>
        </div>
        <x-skeleton height="45px"></x-skeleton>
      </div>
      <div class="skeleton-bottom">
        <x-skeleton height="45px"></x-skeleton>
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
