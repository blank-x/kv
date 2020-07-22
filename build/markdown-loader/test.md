::: demo
```html
<kv-tag
  :key="tag.name"
  v-for="tag in dynamicTags"
  closable
  :disable-transitions="false"
  @close="handleClose(tag)" :type="tag.color">
  {{tag.name}}
</kv-tag>
<script>
var sdsdsd = 1
export default {
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
  }
</script>
<style>
.kv-tag{
    margin-right: 8px;    
}   
</style>
```
:::