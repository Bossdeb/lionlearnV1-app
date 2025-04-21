import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    AOS.init({
      duration: 800, // ความเร็วของ animation
      once: true,    // เล่นแค่ครั้งเดียว
    })
  })
})