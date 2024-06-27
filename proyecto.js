
document.getElementById('modoOscuro').addEventListener('click', function() {
    const htmlElement = document.documentElement; // Esto selecciona la etiqueta <html>
    
    if (htmlElement.hasAttribute('data-bs-theme')) {
        htmlElement.removeAttribute('data-bs-theme'); // Quita el atributo para volver a modo claro
    } else {
        htmlElement.setAttribute('data-bs-theme', 'dark'); // Añade el atributo para activar modo oscuro
    }
});

//PARA PHYTHON mouseover:sobre mouseleave:cundo sale mouseenter:cuando entra

document.getElementById('seleccion').addEventListener('click',function(){
    var fila2S=document.getElementById('fila2S'); 
    fila2S.style.display='flex';
    fila2S.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('iteracion').addEventListener('click',function(){
    var fila2S=document.getElementById('fila2I');
    fila2S.style.display='flex';
    fila2S.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contador').addEventListener('mouseenter',function(){
    var fila3I=document.getElementById('fila3I');
    fila3I.style.display='flex';
    fila3I.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('condicion').addEventListener('mouseenter',function(){
    var fila3I=document.getElementById('fila3I');
    fila3I.style.display='flex';
    fila3I.scrollIntoView({ behavior: 'smooth' });
});

