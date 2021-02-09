const headerContainerMenu = document.getElementById('header-container-menu');
const btnMenu = document.getElementById('container-hamburguesa');
    
btnMenu.addEventListener('click', (event)=>{
    headerContainerMenu.classList.toggle('active');
});

var i = 0;
var text = 'Front-End developer trainer. Curiosa, competitiva, responsable y auto-exigente.';
type();
function type(){
    if (i < text.length){
        document.getElementById('text').innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 100);
    }
}