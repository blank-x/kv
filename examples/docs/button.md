# Button 按钮
----
### 基础用法
使用```type```、```plain```和```round```属性来定义 Button 的样式。


::: demo
```html

<div>
  <kv-button>默认按钮</kv-button>
  <kv-button type="primary">主要按钮</kv-button>
  <kv-button type="success">成功按钮</kv-button>
  <kv-button type="info">信息按钮</kv-button>
  <kv-button type="warning">警告按钮</kv-button>
  <kv-button type="danger">危险按钮</kv-button>
</div>
<div class="m-10">
  <kv-button plain>朴素按钮</kv-button>
  <kv-button type="primary" plain>主要按钮</kv-button>
  <kv-button type="success" plain>成功按钮</kv-button>
  <kv-button type="info" plain>信息按钮</kv-button>
  <kv-button type="warning" plain>警告按钮</kv-button>
  <kv-button type="danger" plain>危险按钮</kv-button>
</div>
<div class="m-10">
  <kv-button round>圆形按钮</kv-button>
  <kv-button type="primary" round>主要按钮</kv-button>
  <kv-button type="success" round>成功按钮</kv-button>
  <kv-button type="info" round>信息按钮</kv-button>
  <kv-button type="warning" round>警告按钮</kv-button>
  <kv-button type="danger" round>危险按钮</kv-button>
</div>

```
:::

### 禁用状态

按钮不可用状态。

::: demo
```html

<div>
  <kv-button disabled>默认按钮</kv-button>
  <kv-button type="primary" disabled>主要按钮</kv-button>
  <kv-button type="success" disabled>成功按钮</kv-button>
  <kv-button type="info" disabled>信息按钮</kv-button>
  <kv-button type="warning" disabled>警告按钮</kv-button>
  <kv-button type="danger" disabled>危险按钮</kv-button>
</div>
<div class="m-10">
  <kv-button plain disabled>朴素按钮</kv-button>
  <kv-button type="primary" plain disabled>主要按钮</kv-button>
  <kv-button type="success" plain disabled>成功按钮</kv-button>
  <kv-button type="info" plain disabled>信息按钮</kv-button>
  <kv-button type="warning" plain disabled>警告按钮</kv-button>
  <kv-button type="danger" plain disabled>危险按钮</kv-button>
</div>

```
:::

### 图标按钮
带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。
设置```icon```属性即可，icon 的列表可以参考 KV-UI 的 icon 组件，也可以设置在文字右边的 icon ，只要使用```i```标签即可，可以使用自定义图标。


::: demo
```html

<kv-button icon="kv-icon-tag" type="primary"></kv-button>
<kv-button icon="kv-icon-close" type="primary"></kv-button>
<kv-button icon="kv-icon-smile" type="primary"></kv-button>
<kv-button icon="kv-icon-search" type="primary">搜索</kv-button>
<kv-button icon="kv-icon-cloudfill" type="primary">下载</kv-button>

```
:::


### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。
额外的尺寸：```medium```、```small```，通过设置```size```属性来配置它们。

::: demo
```html

<kv-button>默认尺寸</kv-button>
<kv-button size="medium">中等按钮</kv-button>
<kv-button size="small">小型按钮</kv-button>

```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   default,medium,small            |    —     |
| type     | 类型   | string    |   primary,success,warning,danger,info |     —    |
| plain     | 是否朴素按钮   | Boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标，已有的图标库中的图标名 | string   |  —  |  —  |
