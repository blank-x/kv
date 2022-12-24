# MetaInfo 
----
管理meta信息
### 常规用法


::: demo

```html
<div class="demo-block">
  <p>title, meta, 和 link 发生变化</p>
</div>

<script>
  export default {
    metaInfo: {
      title: '232323', // set a title
      meta: [{                 // set meta
        name: '22222',
        content: '333333'
      }],
      link: [{                 // set link
        rel: '11111',
        href: 'http://www.baidu.com'
      }]
    }
  }
</script>
```

:::

### async 异步加载

::: demo

```html
<div class="demo-block">
  <p>异步加载</p>
</div>
<script>
export default {
    name: 'async',
    metaInfo () {
      return {
        title: this.pageName
      }
    },
    data () {
      return {
        pageName: 'loading'
      }
    },
    mounted () {
      setTimeout(() => {
        this.pageName = 'async'
      }, 2000)
    }
  }
</script>
```

:::
