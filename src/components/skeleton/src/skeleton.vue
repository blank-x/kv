<template>
  <div :style="{background: bgColor, paddingBottom, width}" class="w__skeleton">
  </div>
</template>

<script>
  export default {
    name: 'WSkeleton',
    props: {
      proportion: {
        type: Number,
        default: 1
      }, // h : w
      bgColor: {
        type: String,
        default: '#b4bccc'
      },
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: [String, Boolean],
        default: false
      }
    },
    data() {
      return {
        paddingBottom: this.height || `${this.proportion * 100}%`
      }
    }
  }
</script>
