
# 快速上手

----

### 全局组件使用

可以在项目的入口文件中引入所有组件或所需组件

```js
import XUI from 'xui' // 引入组件库
import '../node_modules/XUI/packages/theme-default/lib/index.css' // 引入样式库

Vue.use(XUI)
```

### 单个组件按需使用

可以局部注册所需的组件，适用于与其他框架组合使用的场景

```js
import { XButton } from 'x-ui'

export default {
  components: {
    XButton
  }
}
```

在模板中，用 `<x-button></x-button>` 自定义标签的方式使用组件

```html
<template>
  <div>
    <x-button>这是一个按钮</x-button>
  </div>
</template>
```

## 自定义主题

`x-UI` 各个组件的样式变量都存放在 `x-ui/packages/theme-defualt/common/var.css` 文件中。用户可根据实际需要，自定义组件的样式
