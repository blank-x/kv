# Button 按钮
----
### 基础用法
使用```type```、```plain```和```round```属性来定义 Button 的样式。


::: demo
```html

<div>
  <x-button>默认按钮</x-button>
  <x-button type="primary">主要按钮</x-button>
  <x-button type="success">成功按钮</x-button>
  <x-button type="info">信息按钮</x-button>
  <x-button type="warning">警告按钮</x-button>
  <x-button type="danger">危险按钮</x-button>
</div>
<div class="m-10">
  <x-button plain>朴素按钮</x-button>
  <x-button type="primary" plain>主要按钮</x-button>
  <x-button type="success" plain>成功按钮</x-button>
  <x-button type="info" plain>信息按钮</x-button>
  <x-button type="warning" plain>警告按钮</x-button>
  <x-button type="danger" plain>危险按钮</x-button>
</div>
<div class="m-10">
  <x-button round>圆形按钮</x-button>
  <x-button type="primary" round>主要按钮</x-button>
  <x-button type="success" round>成功按钮</x-button>
  <x-button type="info" round>信息按钮</x-button>
  <x-button type="warning" round>警告按钮</x-button>
  <x-button type="danger" round>危险按钮</x-button>
</div>

```
:::

### 禁用状态

按钮不可用状态。

::: demo
```html

<div>
  <x-button disabled>默认按钮</x-button>
  <x-button type="primary" disabled>主要按钮</x-button>
  <x-button type="success" disabled>成功按钮</x-button>
  <x-button type="info" disabled>信息按钮</x-button>
  <x-button type="warning" disabled>警告按钮</x-button>
  <x-button type="danger" disabled>危险按钮</x-button>
</div>
<div class="m-10">
  <x-button plain disabled>朴素按钮</x-button>
  <x-button type="primary" plain disabled>主要按钮</x-button>
  <x-button type="success" plain disabled>成功按钮</x-button>
  <x-button type="info" plain disabled>信息按钮</x-button>
  <x-button type="warning" plain disabled>警告按钮</x-button>
  <x-button type="danger" plain disabled>危险按钮</x-button>
</div>

```
:::

### 图标按钮
带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。
设置```icon```属性即可，icon 的列表可以参考 x-UI 的 icon 组件，也可以设置在文字右边的 icon ，只要使用```i```标签即可，可以使用自定义图标。


::: demo
```html

<x-button icon="x-icon-close" type="primary">关闭</x-button>
<x-button icon="x-icon-search" type="primary">搜索</x-button>
<x-button icon="x-icon-cloudfill" type="primary">下载</x-button>

```
:::


### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。
额外的尺寸：```medium```、```small```，通过设置```size```属性来配置它们。

::: demo
```html

<x-button>默认尺寸</x-button>
<x-button size="medium">中等按钮</x-button>
<x-button size="small">小型按钮</x-button>

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
