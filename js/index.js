// Your code goes here
const header = document.querySelector('.intro')
const headImg = header.querySelector('img')
const title = header.querySelector('h2')
const headWord = header.querySelector('p')
const img = document.querySelectorAll('img')
const footer = document.querySelector('.footer')

headImg.addEventListener("click", function( ) {
    alert('uclickimg')
})
footer.addEventListener("mouseover", function( event ) {
    event.target.style.color = 'green'
    setTimeout(function() {
        event.target.style.color = ""
    }, 200)
})
Document.querySelector('a').addEventListener("focus", function( e ) {
    console.log('focused')
})
document.addEventListener('keydown', function (e) {
    console.log(e)
})
VisualViewport.addEventListener('scroll', function() {
    document.querySelector('*').style.fontSize = '30'
})
img.addEventListener('dblclick', function (e){
    e.target.style.width = '30vh'
})
document.querySelector('.content-section').addEventListener("mouseup", function ( event ){
    event.target.style.width = '40vh'
})
window.addEventListener('load', (event) => {
    console.log('we just loaded up babes');
})
visualViewport.addEventListener('resize', function() {
    headWord.style.fontSize = '500'
})
document.querySelectorAll('.img-content').addEventListener('click', e => {
    document.querySelector('div.destination').style.border = '5px'
})
// click = () => ( alert('u just clicked an img'))