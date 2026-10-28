# ***React学习笔记***

## 1.了解JSX

#### 1.1 JSX本质上就是JavaScript和HTML的缩写

## 2.识别JS表达式

#### 2.1 使用引号传递字符串 {JSX写法外面均用一个{}花括号括住}

<img title="" src="file:///C:/Users/Asus/AppData/Roaming/marktext/images/2026-10-15-17-18-30-image.png" alt="" data-align="inline">

#### 2.2 使用js变量

<img title="" src="file:///C:/Users/Asus/AppData/Roaming/marktext/images/2026-10-15-17-18-44-image.png" alt="" data-align="inline">

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-15-17-18-59-image.png)

#### 2.3 函数调用和方法调用

<img title="" src="file:///C:/Users/Asus/AppData/Roaming/marktext/images/2026-10-15-17-19-15-image.png" alt="" data-align="inline">

#### 2.4 使用js对象

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-15-17-19-56-image.png)

## 3.JSX实现列表渲染

#### 3.1  JSX实现遍历列表(通常用map来渲染,标签里面加一个独一无二的key,可以是字符串或者数组 通常是id )

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-15-17-36-38-image.png)

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-15-17-36-59-image.png)

## 4. 实现渲染

#### 4.1  实现基础条件的渲染（记得在App里面调用一下Test()）

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-15-17-51-10-image.png)

#### 4.2 实现复杂条件的渲染（同样APP里面调用test()）

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-15-18-00-32-image.png)

## 5.React中的使劲按绑定

#### 5.1  不传参数 （on+事件名 = {回调函数} ）

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-16-14-53-54-image.png)

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-16-14-54-08-image.png)

#### 5.2  自定义传参 （on + 事件名 = {（）=> 函数名() } ）

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-16-15-01-53-image.png)

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-16-15-02-07-image.png)

#### 5.3 既想要e,又想要自定义传参

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-16-15-04-00-image.png)

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-16-15-04-11-image.png)

## 6.组件的基础使用

#### 6.1 组件的写法 （组件就是一个首字母大写的函数加return返回值 ，也可以用箭头函数）

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-16-15-15-55-image.png)

#### 6.2 在跟组件中调用自定义的组件（两种写法都可以）

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-16-15-17-43-image.png)

## 7.useState的基础使用

#### 7.1 useState返回的是一个数组，前一项是一个状态变量，后一项是与之绑定的修改状态变量的一个方法 （里面用到了解构赋值）

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-16-15-41-33-image.png)

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-16-15-41-54-image.png)

###### 上面这一步是在跟组件里，return外的

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-16-15-42-50-image.png)

## 8.useState修改状态规则

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-16-15-53-05-image.png)

#### 8.1 useState修改对象

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-16-15-59-00-image.png)

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-16-15-59-15-image.png)

###### form里面也可以是多个值

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-16-16-05-51-image.png)

## 9.基础样式的修改

#### 9.1 行内样式（不推荐）

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-17-09-34-22-image.png)

###### 也可以在外面声明一个style，让行内的style=style即可

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-17-09-37-02-image.png)

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-17-09-37-19-image.png)

#### 9.2 class 类名控制 （创建一个css，import引入，className标明类名）

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-17-09-41-37-image.png)

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-17-09-42-35-image.png)

## 10. classname工具优化类名控制（npm下载classnames）

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-17-10-57-39-image.png)

![](C:\Users\Asus\AppData\Roaming\marktext\images\2026-10-17-10-57-50-image.png)

className = {classnames('最初的类', {想要更换的类：需要满足的条件})}
