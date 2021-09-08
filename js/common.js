'use strict'
// ロード画面
const st0 = document.querySelectorAll('.st0');
const anime = function () {
  new Vivus('logo', {
    type: 'scenario-sync',
    duration: 20,
    forceRender: false,
    animTimingFunction: Vivus.EASE
  }, function () {
    setTimeout(function () {
      for (let i = 0; i < st0.length; i++) {
        st0[i].removeAttribute('style');
      }
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

// ヒーローヘッダー
if (window.matchMedia('(max-width: 768px)').matches) {
  const images = [
    './img/images-1.png',
    './img/images-2.png',
    './img/images-3.png'
  ]

  let currentIndex = -1
  const mainImage = document.getElementById('hero_main')
  const image = document.querySelector('.hero-main')

  window.addEventListener('load', () => {
    const slideAuto = setInterval(() => {
      currentIndex++
      image.classList.remove('active')
      setTimeout(() => {
        mainImage.src = images[currentIndex]
        image.classList.add('active')
      }, 200)
      if (currentIndex === 2) {
        clearInterval(slideAuto)
      }
    }, 4200)
  })

  // ヘッダー
  window.addEventListener('load', () => {
    setTimeout(() => {
      const header = document.getElementById('header')
      header.classList.add('is-show')
    }, 16800)
  })
} else if (window.matchMedia('(min-width:769px)').matches) {
  const imgs = [
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
        mainImage.src = imgs[currentIndex]
        mainImage2.src = imgs[currentIndex + 1]
        image.classList.add('active')
        image2.classList.add('active')
      }, 200)
      if (currentIndex === 4) {
        clearInterval(slideAuto)
      }
    }, 4200)
  })

  // ヘッダー
  window.addEventListener('load', () => {
    setTimeout(() => {
      const header = document.getElementById('header')
      header.classList.add('is-show')
    }, 16800)
  })
}
