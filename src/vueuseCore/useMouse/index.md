


简单的使用: 以此来通过监听, 获取触摸和点击事件

```ts
const {x, y} = useMouse()
```


### MouseCoordType = 'page' | 'client' |'screen' | 'movement';

`export type useMouseCoordType = 'page' | 'client' |'screen' | 'movement';`

page：相对于整个文档的坐标，包含滚动偏移量。
client：相对于视口的坐标，不包含滚动偏移量。
screen：相对于屏幕的坐标。
movement：相对于上一次鼠标移动事件的坐标变化量，不适用于触摸事件。

此外: offsetX 和 offsetY, 是相对于事件目标元素（通常是触发事件的元素）的左上角的水平和垂直偏移量。

### 触摸事件


### 点击事件

### 拖拽事件

#### dragover
```js
addEventListener('dragover')
```
- 触发时机: dragover事件, 一个在元素被拖拽到另一个可放置目标上移动时, 会触发dragover事件
- 默认行为：默认情况下，浏览器不允许在目标元素上放置拖动的元素。为了允许放置，必须在 dragover 调用 event.preventDefault() 以阻止默认行为并自定义处理逻辑。

#### drop
- 触发时机：当拖动的元素被放置到一个可放置目标上时，会触发 drop 事件。
- 默认行为：默认情况下，浏览器会打开被拖动的文件或链接。为了自定义处理放置操作，必须在 drop 事件处理程序中调用 event.preventDefault() 以阻止默认行为并自定义处理逻辑。

### event.preventDefault() 

event.preventDefault() 方法用于阻止浏览器执行与事件关联的默认行为。以下是一些常见的应用场景：

阻止表单提交, 组织链接跳转, 阻止右键提交, 阻止拖拽文件打开, 阻止滚动事件和键盘的默认行为
