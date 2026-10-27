import { Weather } from './Weather.js'
import { updateUI } from './UI.js'
const weatherApp = new Weather()
const search = async () => {
    console.log(11)
    try {
        const input = document.querySelector('.search-bar')
        console.log(input.value)
        const data = await weatherApp.fetchWeather(input.value)
        console.log('返回数据:', data)
        if (data)
            updateUI(data)

    } catch (error) {
        console.log('错误:', error)
    }


}
document.querySelector('.search button').addEventListener('click', search)
document.querySelector('.search-bar').addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        search()
    }
})
window.addEventListener('load', async () => {
    document.getElementById('loading').style.display = 'none'
    const data = await weatherApp.fetchWeather('Shanghai')
    if (data) updateUI(data)
})
const tiltElements = document.querySelectorAll('.box')
VanillaTilt.init(tiltElements, {
    max: 15,
    speed: 400,
    glare: true,
    'max-glare': 0.5

})


