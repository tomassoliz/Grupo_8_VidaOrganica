const form = document.getElementById('form');/* captura el formulario con id = productAdd */

const inputs = document.querySelectorAll('#form input'); /* accede a los inputs del form con id = productAdd */


const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{5,40}$/, // Letras y espacios, pueden llevar acentos.
	precio: /^\d{2,15}$/, // 2 a 5 numeros.
    descuento: /^\d{2,15}$/, // 2 a 15 numeros.
	descripcion: /^[a-zA-ZÀ-ÿ\s\d]{20,500}$/ // Descripcion,
}

const campos = {
	name: false,
	price: false,
	description: false
}

const validarForm = (e) => {
   switch (e.target.name) {
    case 'name':
        validarCampo(expresiones.nombre, e.target, 'name');
    break;
    case 'price':
        validarCampo(expresiones.precio, e.target, 'price');
    break;

    case 'description':
        validarCampo(expresiones.descripcion, e.target, 'description');
    break;
   }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.add('form__grupo-correcto');
        document.getElementById(`grupo__${campo}`).classList.remove('form__grupo-incorrecto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .form__input-error`).classList.remove('form__input-error-activo');
        campos [campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('form__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('form__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .form__input-error`).classList.add('form__input-error-activo');
        campos [campo] = false;
    }
}

inputs.forEach((input) =>{
    input.addEventListener('keyup', validarForm);
    input.addEventListener('blur', validarForm);
})




/* form.addEventListener('submit', () =>{
    e.preventDefault();

    if (campos.name && campos.price && campos.description) {
        form.reset();

        document.getElementById('form__mensaje-exito').classList.add('form__mensaje-exito-activo');
        setTimeout(() => {
			document.getElementById('form__mensaje-exito').classList.remove('form__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.form__grupo-correcto').forEach((icono) => {
			icono.classList.remove('form__grupo-correcto');
		});
	} else {
		document.getElementById('form__mensaje').classList.add('form__mensaje-activo');
	}
    
}); */