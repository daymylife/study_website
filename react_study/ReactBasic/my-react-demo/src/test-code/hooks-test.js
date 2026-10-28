import { useState, useEffect } from 'react'
// 当useEffect第二个参数为空时，页面一开始渲染完毕后执行一次，等待页面渲染完毕后如果页面继续渲染，就继续执行一次回调函数
// 当useEffect第二个参数为空列表时，页面一开始渲染完毕后执行一次，不论后续页面是否渲染，回调函数里面不会再执行
// 当useEffect第二个参数为[关联性参数],页面一开始渲染完毕后执行一次,后续页面渲染时关联性参数发生改变,就执行回调函数,没有改变不执行
function HooksTest() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('副函数执行')
    })

    return <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>click</button>
    </div>

}
export default HooksTest

