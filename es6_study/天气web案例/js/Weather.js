// constructor(apiKey = "c32c0f56965667d43f9c392021c5d981"){
//     this.apiKey = apiKey
// }
document.body.style.backgroundImage = `url('https://picsum.photos/1600/900/?${name}')`
//export导出类
export class Weather {
    constructor(apiKey = 'c32c0f56965667d43f9c392021c5d981') {
        this.apiKey = apiKey
    }
    fetchWeather(city) {
        return new Promise((resolve, reject) => {
            let xmlhttp
            //之前的老写法 功能:看浏览器是否支持
            if (window.XMLHttpRequest) {
                xmlhttp = new XMLHttpRequest()
            } else {
                xmlhttp = new ActiveXObject('Microsoft.XMLHttp')
            }
            xmlhttp.onreadystatechange = () => {
                if (xmlhttp.readyState === 4) {
                    if (xmlhttp.status === 200) {
                        try {
                            const data = JSON.parse(xmlhttp.responseText)
                            resolve(data)
                        } catch (err) {
                            reject(new Error('数据解析失败'))
                        }
                    } else {
                        reject(new Error(`请求失败，状态码：${xmlhttp.status}`))
                    }
                }
            }
            xmlhttp.onerror = () => {
                reject(new Error('网络请求失败'))
            }
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
            xmlhttp.open('GET', url, true)
            xmlhttp.send()
        })
    }
}

