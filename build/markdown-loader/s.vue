<template>
  <div class="demo-">
    <demo-block>
      <template slot="source">
        <kv-demo0></kv-demo0>
      </template>
      <template slot="highlight">
					<pre v-pre><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">kv-tag</span>
  <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;tag.name&quot;</span>
  <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;tag in dynamicTags&quot;</span>
  <span class="hljs-attr">closable</span>
  <span class="hljs-attr">:disable-transitions</span>=<span class="hljs-string">&quot;false&quot;</span>
  <span class="hljs-attr">@close</span>=<span class="hljs-string">&quot;handleClose(tag)&quot;</span> <span
              class="hljs-attr">:type</span>=<span class="hljs-string">&quot;tag.color&quot;</span>&gt;</span>
  {{tag.name}}
<span class="hljs-tag">&lt;/<span class="hljs-name">kv-tag</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">var</span> sdsdsd = <span class="hljs-number">1</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">dynamicTags</span>: [{
            <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;标签一&#x27;</span>,
            <span class="hljs-attr">color</span>: <span class="hljs-string">&#x27;primary&#x27;</span>
        }, {
           <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;标签二&#x27;</span>,
           <span class="hljs-attr">color</span>: <span class="hljs-string">&#x27;success&#x27;</span>
        }, {
           <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;标签三&#x27;</span>,
           <span class="hljs-attr">color</span>: <span class="hljs-string">&#x27;info&#x27;</span>
        }, {
            <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;标签四&#x27;</span>,
            <span class="hljs-attr">color</span>: <span class="hljs-string">&#x27;danger&#x27;</span>
        }]
      };
    },
    <span class="hljs-attr">methods</span>: {
      handleClose(tag) {
        <span class="hljs-built_in">this</span>.dynamicTags.splice(<span class="hljs-built_in">this</span>.dynamicTags.indexOf(tag), <span
              class="hljs-number">1</span>);
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
<span class="hljs-selector-class">.kv-tag</span>{
    <span class="hljs-attribute">margin-right</span>: <span class="hljs-number">8px</span>;
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre>
</pre>
      </template>
    </demo-block>
  </div>
</template>
<script>
  export default {
    name: "component-doc0",
    components: {
      "kv-demo0": {
        template: `<div class="kv-demo0"><kv-tag :key="tag.name" v-for="tag in dynamicTags" closable :disable-transitions="false" @close="handleClose(tag)" :type="tag.color">
  {{tag.name}}
</kv-tag>


</div>`,
        data() {
          return {
            dynamicTags: [{
              name: '标签一',
              color: 'primary'
            }, {
              name: '标签二',
              color: 'success'
            }, {
              name: '标签三',
              color: 'info'
            }, {
              name: '标签四',
              color: 'danger'
            }]
          };
        },
        methods: {
          handleClose(tag) {
            this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
          }
        }
      },
    }
  }
</script>
<style lang="scss">
  .kv-tag {
    margin-right: 8px;
  }
</style>
