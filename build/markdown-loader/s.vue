<template>
  <div class="demo-">
    <demo-block>
      <template slot="source">
        <kv-demo0></kv-demo0>
      </template>
      <template slot="highlight">
        <pre v-pre><code class="html">......</code></pre>
      </template>
    </demo-block>
    <h3>可移除标签</h3>
    <p>
      设置
      <code class="code_inline">closable</code>属性可以定义一个标签是否可移除。默认的标签移除时会附带渐变动画，它接受一个Boolean，true 为关闭。
    </p>
    <demo-block>
      <template slot="source">
        <kv-demo1></kv-demo1>
      </template>
      <template slot="highlight">
        <pre v-pre><code class="html"><span class="hljs-tag">.......</code></pre>
      </template>
    </demo-block>
    <h2>API</h2>
    <table class="table">
      .......
    </table>
  </div>
</template> 
  <script>
export default {
  name: "component-doc0",
  components: {
    "kv-demo0": {
      template: `<div>  <kv-tag>标签一</kv-tag></div>`
    },
    "kv-demo1": {
      template: `<div>
                    <kv-tag :key="tag.name" v-for="tag in dynamicTags" closable :disable-transitions="false" @close="handleClose(tag)" :type="tag.color">
                    {{tag.name}}
                    </kv-tag>
                </div>`,
      data() {
        return {
          dynamicTags: [
            {
              name: "标签一",
              color: "primary"
            },
            {
              name: "标签二",
              color: "success"
            },
            {
              name: "标签三",
              color: "info"
            },
            {
              name: "标签四",
              color: "danger"
            }
          ]
        };
      },
      methods: {
        handleClose(tag) {
          this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
        }
      }
    }
  }
};
</script> 
<style lang="scss" scoped >
  .kv-tag {
    margin-right: 8px;
  }
</style>