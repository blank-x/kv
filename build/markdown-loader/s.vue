<template> <div class="demo-"><h1>showMore 显示更多</h1>
<hr>
<h3>基础用法</h3>
<p>文本超出显示长度，折叠起来，通过len属性显示从何处开始折叠。</p>
<demo-block><template slot="source"><kv-demo0></kv-demo0></template><template slot="highlight">
					<pre v-pre><code class="html"><span class="hljs-tag">&lt;<span class="hljs-name">kv-showmore</span> 
   <span class="hljs-attr">:len</span>=<span class="hljs-string">&#x27;10&#x27;</span> 
   <span class="hljs-attr">text</span>=<span class="hljs-string">&#x27;文本超出显示长度，折叠起来，通过len属性显示从何处开始折叠&#x27;</span>&gt;</span>
 <span class="hljs-tag">&lt;/<span class="hljs-name">kv-showmore</span>&gt;</span></code></pre>
				</template></demo-block><h3>高级用法</h3>
<p>文本超出显示长度，折叠起来，展开后，可以通过<code v-pre class="code_inline">allow-fold</code>指定是否需要收起，也可通过<code v-pre class="code_inline">show-text</code>设置折叠时的文案，通过<code v-pre class="code_inline">hidden-text</code>设置收起的文案</p>
<demo-block><template slot="source"><kv-demo1></kv-demo1></template><template slot="highlight">
					<pre v-pre><code class="html"><span class="hljs-tag">&lt;<span class="hljs-name">kv-showmore</span> <span class="hljs-attr">allow-fold</span>
   <span class="hljs-attr">:len</span>=<span class="hljs-string">&#x27;10&#x27;</span> 
   <span class="hljs-attr">show-text</span>=<span class="hljs-string">&#x27;show&#x27;</span>
   <span class="hljs-attr">hidden-text</span>=<span class="hljs-string">&#x27;hidden&#x27;</span>
   <span class="hljs-attr">text</span>=<span class="hljs-string">&#x27;文本超出显示长度，折叠起来，通过len属性显示从何处开始折叠&#x27;</span>&gt;</span>
 <span class="hljs-tag">&lt;/<span class="hljs-name">kv-showmore</span>&gt;</span></code></pre>
				</template></demo-block><h2>API</h2>
<table class="table"><thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>len</td>
<td>显示文本的长度</td>
<td>Number</td>
<td>—</td>
<td>-1(不进行折叠)</td>
</tr>
<tr>
<td>text</td>
<td>类型</td>
<td>String</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>show-text</td>
<td>折叠时需要显示文案</td>
<td>String</td>
<td>—</td>
<td>显示更多</td>
</tr>
<tr>
<td>hidden-text</td>
<td>隐藏时需要显示文案</td>
<td>String</td>
<td>—</td>
<td>隐藏</td>
</tr>
</tbody>
</table>
</div> </template> 
  <script>
      export default {
        name: "component-doc0",
        components: {
          "kv-demo0": {template: `<div>
 <kv-showmore :len="10" text="文本超出显示长度，折叠起来，通过len属性显示从何处开始折叠">
 </kv-showmore>

</div>`,},"kv-demo1": {template: `<div>
 <kv-showmore allow-fold :len="10" show-text="show" hidden-text="hidden" text="文本超出显示长度，折叠起来，通过len属性显示从何处开始折叠">
 </kv-showmore>

</div>`,},
        }
      }
    </script> 
  <style lang="scss"></style>