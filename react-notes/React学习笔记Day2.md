## 1. 表单受控绑定

##### 1.1 定义一个react状态 -> useState

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-17-15-23-09-image.png)

##### 1.2 onChange实现事件同步绑定

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-17-15-23-20-image.png)

## 2. React获取DOM元素

##### 2.1 useRef获取ref对象 绑定到dom标签上

##### 2.2 用ref.current获取dom

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-17-15-40-19-image.png)

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-17-15-38-23-image.png)

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-17-15-38-55-image.png)

## 3.组件通信-父传子

##### 3.1 组件通信就是两个组件的信息通讯

##### 3.2 父组件传递数据， 子组件身上绑定属性

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-17-16-18-32-image.png)

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-17-16-18-21-image.png)

##### 3.3 子组件接收数据，props的参数 （props是一个对象）

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-17-16-18-03-image.png)

##### 3.4 props可以是各种类型的数据（数字，字符串，布尔值，数组，对象，函数，JSX）,子组件接收到的数据只具有可读性，不能修改父组件传递过来的数据

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-17-16-30-35-image.png)

##### 3.5 children 的使用（在子组件中添加标签时，props默认加了一个children）

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-17-16-49-24-image.png)

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-17-16-49-36-image.png)

## 4.组件通信-子传父

##### 4.1 原理就是父给子传一个函数，子调用函数把想传递的数据传进函数，父调用一个这个函数，打印出子传递的数据

父给子传一个函数

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-24-10-51-15-image.png)

Son里面调用一下函数，把这个函数传递给子组件，子组件要接受一下这个传递过来的函数

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-24-10-53-04-image.png)

然后在子组件中把像哟啊传递的信息传进函数中，这样父组件就可以接受到子传过来的信息了

## 5.兄弟组件通信

##### ![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-24-11-00-13-image.png)

##### 5.1用到一个 ” 状态提升 “ ，原理就是共用一个父， 先实现A传递给父，父把数据存一下，然后传递给B

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-24-11-10-32-image.png)

## 6. 使用Content机制跨层组件通信

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-24-11-17-35-image.png)

##### 6.1 先用createContext创建一个ctx对象

###### 6.2 在顶层用ctx.Provoder 把组件包起来，传递value值

##### 6.3 在底层组件中用useContext钩子函数来获取顶层传递过来的数据

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-24-11-35-22-image.png)

## 7. useEffect 概念和使用

##### 7.1 useEffect写法：useEffect(()=>{}, []) 数组为空代表回调函数在组件渲染完毕之后就执行一次

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-24-15-34-40-image.png)

注：useEffect不是由时间引起的，而是由渲染本身引起的操作

##### 7.2 不同依赖项说明

1. 没有依赖项    初始 + 组件更新

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-24-15-56-18-image.png)

    2.  传入空数组 初始执行一次

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-24-15-57-29-image.png)

    3.  传入特定依赖项    初始 + 依赖项变化时执行

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-24-15-58-18-image.png)

##### 7.3  使用useEffect清除副作用

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-24-16-27-24-image.png)

清除副作用就是在useEffect里面return一个回调函数用来实现清除逻辑

## 8. 自定义Hook实现

##### 8.1 先声明一个以use开头的函数

##### 8.2 在函数体内部封装可复用的逻辑（只要是可以复用的逻辑）

##### 8.3 把组件中用的值用return返回出去

##### 8.4 在哪个组件中就调用函数

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-24-16-52-20-image.png)

## 9. ReactHooks 使用规则说明

##### 9.1 Hook函数 只能在组件内使用，或者是在自定义的Hook中使用

##### 9.2 Hook函数不能在条件判断语句中使用，只能在顶层使用


