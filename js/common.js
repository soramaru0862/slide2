'use strict'

// ロード画面
const st0 = document.querySelectorAll('.st0');
    const anime = function () {
      new Vivus('logo', { type: 'scenario-sync', duration: 20, forceRender: false, animTimingFunction: Vivus.EASE }, function () {
        setTimeout(function () {
          for (const i = 0; i < st0.length; i++)
            st0[i].removeAttribute('style');
          anime();
        }, 2000)
      });
    }
    anime();

window.addEventListener('load', () => {
  document.querySelector('.loading-title').classList.add('-visible')
})
setTimeout(() => {
  document.querySelector('.loading').classList.add('-invisible')
}, 4200)

/* const anime = () => {
  new Vivus('logo', {
  start: 'manual',
  type: 'scenario-sync',
  duration: 15,
  forceRender: false,
  animTimingFunction: Vivus.EASE
})
} */

// ヒーローヘッダー
const images = [
  './img/images1.jpg',
  './img/images2.jpg',
  './img/images3.jpg',
  './img/images4.jpg',
  './img/images5.jpg',
  './img/images6.jpg'
]

let currentIndex = -2
const mainImage = document.getElementById('hero_main')
const mainImage2 = document.getElementById('hero_main2')
const image = document.querySelector('.hero-main')
const image2 = document.querySelector('.hero-main2')

window.addEventListener('load', () => {
    const slideAuto = setInterval(() => {
      currentIndex += 2
      image.classList.remove('active')
      image2.classList.remove('active')
      setTimeout(() => {
        mainImage.src = images[currentIndex]
        mainImage2.src = images[currentIndex + 1]
        image.classList.add('active')
        image2.classList.add('active')
      }, 200)
      if (currentIndex === 4) {
        clearInterval(slideAuto)
      }
      console.log(currentIndex)
  }, 4200)
})

// ヘッダー
window.addEventListener('load', () => {
  setTimeout(() => {
    const header= document.getElementById('header')
    header.classList.add('is-show')
  }, 16800)
})
