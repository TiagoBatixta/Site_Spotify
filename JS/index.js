const divScroll = document.getElementById('scrollme');
divScroll.style.transition = "all 2s ease";

window.addEventListener('mouseover', function(){
    divScroll.classList.add('hovered');
});

window.addEventListener('mouseleave', function(event){
    divScroll.classList.remove('hovered');
});
