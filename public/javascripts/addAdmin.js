const form = document.getElementById('productAdd');/* captura el formulario con id = productAdd */

const inputs = document.querySelectorAll('#productAdd input'); /* accede a los inputs del form con id = productAdd */


const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{5,40}$/, // Letras y espacios, pueden llevar acentos.
	precio: /^\d{2,5}$/, // 2 a 5 numeros.
    descuento: /^\d{2,15}$/, // 2 a 15 numeros.
	descripcion: /^[a-zA-ZÀ-ÿ\s\d]{5,500}$/ // Descripcion,
}

const campos = {
	nombre: false,
	precio: false,
	descripcion: false
}

const validarForm = (e) => {
   switch (e.target.name) {
    case 'name':
        validarCampo(expresiones.nombre, e.target, 'name');
    break;
    case 'price':
        validarCampo(expresiones.precio, e.target, 'price');
    break;
/*     case 'discount':
        validarCampo(expresiones.descuento, e.target, 'discount');
    break; */
    case 'description':
        validarCampo(expresiones.descripcion, e.target, 'description');
    break;
   }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos [campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error'`).classList.add('formulario__input-error-activo');
        campos [campo] = false;
    }
}

inputs.forEach((input) =>{
    input.addEventListener('keyup', () => {
        validarForm();
    })
})

form.addEventListener('submit', (e) =>{
    /* e.preventDefault(); */

    if (campos.name && campos.price && campos.descripcion) {
        /* form.reset(); */

        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
    
});