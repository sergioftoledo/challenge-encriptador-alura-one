let textoIngresado = document.querySelector('#textoIngresado');
let textoSalida = document.querySelector('#textoSalida');
let encriptar = document.querySelector('#encriptar');
let desencriptar = document.querySelector('#desencriptar');
let copiar = document.querySelector('#copiar');
let ImagenInicial = document.querySelector('#cuadro-texto');
let contenedorCifrado = document.querySelector('.contenedor-decifrado');


encriptar.addEventListener('click', function encriptar() {
    if (textoIngresado.value != '') {
        texto = textoIngresado.value.toLowerCase();
        
        textoEncriptado = texto.replace(/e/igm, "enter");
        textoEncriptado = textoEncriptado.replace(/o/igm, "ober");
        textoEncriptado = textoEncriptado.replace(/i/igm, "imes");
        textoEncriptado = textoEncriptado.replace(/a/igm, "ai");
        textoEncriptado = textoEncriptado.replace(/u/igm, "ufat");
        
        
        ImagenInicial.style.display = 'none';
        contenedorCifrado.classList.add('msj-encriptado');
        contenedorCifrado.classList.remove('msj-desencriptado');
        textoSalida.innerHTML = textoEncriptado;
        
        textoIngresado.value = '';
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Algo ha malido sal',
            text: 'Debe ingresar un texto en minúsculas y sin acentos.',
          })
    }
});


desencriptar.addEventListener('click', function desencriptar() {
    if (textoIngresado.value != '') {
        texto = textoIngresado.value.toLowerCase();
    
        textoEncriptado = texto.replace(/enter/igm, "e");
        textoEncriptado = textoEncriptado.replace(/ober/igm, "o");
        textoEncriptado = textoEncriptado.replace(/imes/igm, "i");
        textoEncriptado = textoEncriptado.replace(/ai/igm, "a");
        textoEncriptado = textoEncriptado.replace(/ufat/igm, "u");
    
        ImagenInicial.style.display = 'none';
        contenedorCifrado.classList.remove('msj-encriptado');
        contenedorCifrado.classList.add('msj-desencriptado');
        document.querySelector('#textoSalida').innerHTML = textoEncriptado;
        
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Algo ha malido sal',
            text: 'Debe ingresar un texto cifrado en minúsculas y sin acentos.',
          })
    }
});
// Copiar al portapapeles
copiar.addEventListener('click', function () {
    if (textoSalida.value != '') {
        textoSalida.select();
        document.execCommand('copy');

        Swal.fire(
            'Bien hecho!',
            'Se ha copiado correctamente!',
            'success'
          )
    } else {
        Swal.fire(
            'Algo ha malido sal',
            'No hay texto para copiar.',
            'error'
          )
    }
})