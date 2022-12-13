const wrapper = document.querySelector('.wrapper')

let pressed = false
let startX = 0

wrapper.addEventListener('mousedown', function (e) {
  pressed = true
  startX = e.clientX
  this.style.cursor = 'grabbing'

  console.log(startX)
})

wrapper.addEventListener('mouseleave', function (e) {
  pressed = false
})

window.addEventListener('mouseup', function (e) {
  pressed = false
  wrapper.style.cursor = 'grab'
})

wrapper.addEventListener('mousemove', function (e) {
  if(!pressed){
    return
  }

  this.scrollLeft += startX - e.clientX
})

let bottle1 = document.getElementById("bottle1")
let bottle2 = document.getElementById("bottle2")
let bottle3 = document.getElementById("bottle3")

let tab1 = document.getElementById("tab1")
let tab2 = document.getElementById("tab2")
let tab3 = document.getElementById("tab3")
let tab4 = document.getElementById("tab4")
let tab5 = document.getElementById("tab5")

window.addEventListener('scroll', function(){
    var value = window.scrollY;

    bottle1.style.top = value * 0.5 + 'px';
})

