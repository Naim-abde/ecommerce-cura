var bar = document.getElementById('bar')
var nav = document.getElementById('nav')
var close = document.getElementById('close')

bar.addEventListener('click',function(){
    nav.classList.add('active')
});
close.addEventListener('click',function(){
    nav.classList.remove('active')
})
 
