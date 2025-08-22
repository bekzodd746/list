let inp1 = document.querySelector('.inp1')
let click = document.querySelector('.click')
let ul = document.querySelector('.ul')


click.addEventListener('click', ()=>{
let li = document.createElement('li')
li.textContent = inp1.value
ul.appendChild(li)

inp1.value = ''
})