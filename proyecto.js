
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


//PARA VALIDAR FORMULARIO
function Valida(){
    //variables para tomar los datos de los input del formulario
  
    var nomInput=document.getElementById('nom');
    var apeInput=document.getElementById('ape');
    var emailInput=document.getElementById('email');
    var telInput=document.getElementById('tel');
    var textarea=document.getElementById('textArea');
    divError=document.getElementById('Error');
    divConfirmacion=document.getElementById('Confirmacion');
    var formularioC=document.getElementById('formularioContacto');
    var isValid = true;//booleano que utilizo para que si todo es valido retorne true sino false

    divError.innerHTML = '';//div donde vere los carteles de error

    if(nomInput.value==''){
        nomInput.style.backgroundColor='rgba(252, 124, 124, 0.527)';
        divError.innerHTML+='<span style="color: red;">*</span>El nombre es obligatorio <br>';
        divError.scrollIntoView({ behavior: 'smooth' });
        isValid=false;
    }else if(nomInput.value.length < 3){//si el tamaño(length) del valor(value) del string(nomInput) es <3...
        divError.innerHTML+='El nombre debe tener al menos 3 caracteres<br>';
        divError.scrollIntoView({behavior:'smooth'});
        isValid=false;//el booleano cambia y sera false
    }else {
       nomInput.style.backgroundColor='white'; // Restaurar color de fondo si el campo no está vacío
    }

    if(apeInput.value==''){
        apeInput.style.backgroundColor='rgba(252, 124, 124, 0.527)';
        divError.innerHTML+='<span style="color: red;">* </span>El apellido es obligatorio <br>';
        divError.scrollIntoView({ behavior: 'smooth' });
        isValid=false;
    }else if (apeInput.value.length < 3) {//si el tamaño(length) del valor(value) del string(apeInput) es <3...
        divError.innerHTML += 'El apellido debe tener al menos 3 caracteres<br>';
        divError.scrollIntoView({behavior:'smooth'});
        isValid = false;
    } else {
        apeInput.style.backgroundColor='white'; // Restaurar color de fondo si el campo no está vacío
    }

    if(emailInput.value==''&& telInput.value == '' ){
        emailInput.style.backgroundColor='rgba(252, 124, 124, 0.527)';
        divError.innerHTML+='<span style="color: red;">* </span>El email es obligatorio si no se registra un telefono.Ingrese un número de teléfono o email para comunicarnos<br>';
        divError.scrollIntoView({ behavior: 'smooth' });
        isValid=false;
    //si email no esta vacio y el valor no incluye @ o no termina con .com entonces.... usando includes y endsWith
    }else if (emailInput.value != '' && (!emailInput.value.includes('@') || !emailInput.value.endsWith('.com'))) {
        divError.innerHTML += 'El e-mail debe tener un formato válido y finalizar en .com<br>';
        divError.scrollIntoView({behavior:'smooth'});
        isValid = false;
    } 
    else {
        emailInput.style.backgroundColor='white'; // Restaurar color de fondo si el campo no está vacío
    }
    
    if(textarea.value==''){
        textarea.style.backgroundColor='rgba(252, 124, 124, 0.527)';
        divError.innerHTML+='<span style="color: red;">* </span>Por favor comentenos brevemente en que necesita que la ayudemos<br> <br>';
        divError.scrollIntoView({ behavior: 'smooth' });
        isValid=false;
    } else {
        textarea.style.backgroundColor='white'; // Restaurar color de fondo si el campo no está vacío
    } 
    // Prevenir el envío del formulario si hay errores de validación
    //si isValid no es true=false prevenir el envio del formulario
    if (!isValid) {
        event.preventDefault();
    }else{
        divConfirmacion.innerHTML='Envio exitoso, pronto nos pondremos en contacto.Gracias<br>';
        divConfirmacion.scrollIntoView({behavior:'smooth'});
        formularioC.reset();
    }  
     
   return isValid; 
}

