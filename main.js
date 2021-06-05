let i = 0;
let text = 'Front-End developer. Proactiva, responsable, entusiasta, curiosa y enfocada.';
type();
function type(){
    if (i < text.length){
        document.getElementById('text').innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 100);
    }
}