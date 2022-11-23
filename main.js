var nav = document.querySelector('.navbar')
var content = document.querySelector('.content')
var bars = document.querySelector('.bars')
bars.addEventListener('click', ()=> {
  nav.classList.toggle('close')
  content.classList.toggle('content-close')
})