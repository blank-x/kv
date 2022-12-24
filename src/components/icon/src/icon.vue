<template>
  <i :class="'x-icon-' + name">111</i>
</template>

<script>
  export default {
    name: 'ElIcon',

    props: {
      name: String
    }
  };
</script>
