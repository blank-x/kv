<template>
  <div class="page-footer">
    <div class="footer-container">
      <x-row justify="space-between" type="flex">
        <x-col :span="12" class="text-left">
          <div>
            <p>author: blank-x</p>
            <p>github: <a href="https://github.com/blank-x">https://github.com/blank-x</a></p>
          </div>
        </x-col>
      </x-row>
    </div>
  </div>
</template>
<style lang="scss" scoped type="text/scss">
  .page-footer {
    padding: 0;
    color: #6190E8;
    text-align: center;
    background-color: #fff;

    box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.8);

    .footer-container {
      width: 90%;
      margin: 0 auto;
    }

    .text-left {
      font-size: 12px;
      display: flex;
      align-items: center;
      color: #5e6d82;

      img {
        border-radius: 100%;
        margin-right: 10px;
      }

      a {
        color: #6190E8;
      }
    }
  }

</style>
