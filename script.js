let btnLeft = document.getElementById('btnLeft')
let btnRight = document.getElementById('btnRight')
let imgSlider = document.getElementById('imgSlider')
let item_show = document.querySelectorAll('.item_show')

let imgIndex = 0

let images = [
   {
      id: "one",
      srcImg: '../1/pic/Dark-00.jpg',
   },
   {
      id: "two",
      srcImg: '../1/pic/dead city.jpg',
   },
   {
      id: "three",
      srcImg: '../1/pic/gothamkings_auto_x2.jpg',
   },
]

var timer = setInterval(function () {
   imgSlider.style.opacity = '0'

   setTimeout(function () {
      imgSlider.style.opacity = '1'
      NextSlide()
   }, 200)
   
   item_show.forEach(function (item) {
      if (item.id === images[imgIndex].id) {
         item.classList.add('active')
      }
      else {
         item.classList.remove('active')
      }
   })

}, 5000)




function NextSlide() {
   imgIndex--
   if (imgIndex < 0) {
      imgIndex = images.length - 1
   }
   imgSlider.style.opacity = '0'
   setTimeout(function () {

      imgSlider.style.opacity = '1'
      imgSlider.setAttribute('src', images[imgIndex].srcImg)
   }, 300)

   item_show.forEach(function (item) {
      if (item.id === images[imgIndex].id) {
         item.classList.add('active')
      }
      else {
         item.classList.remove('active')
      }
   })

}

function BackSlide() {
   imgIndex++
   if (imgIndex > images.length - 1) {
      imgIndex = 0
   }
   imgSlider.style.opacity = '0'
   setTimeout(function () {
      imgSlider.style.opacity = '1'
      imgSlider.setAttribute('src', images[imgIndex].srcImg)
   }, 300)
   
   item_show.forEach(function (item) {
      if (item.id === images[imgIndex].id) {
         item.classList.add('active')
      }
      else {
         item.classList.remove('active')
      }
   })

}

btnLeft.addEventListener('click', NextSlide)
btnRight.addEventListener('click', BackSlide)


