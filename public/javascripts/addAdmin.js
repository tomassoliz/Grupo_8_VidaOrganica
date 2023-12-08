const formulario = document.getElementById('formulario'); /* captura el formulario con id = productAdd */
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
    precio: /^\d{2,15}$/, // 2 a 5 numeros.
    descripcion: /^[a-zA-ZÀ-ÿ\s\d]{20,500}$/, // Descripcion,
}

const campos = {
    name: false,
    price: false,
    description: false,
}

const validarForm = (e) => {
    switch (e.target.name) {
        case 'name':
            validarCampo(expresiones.nombre, e.target, 'nombre');
            break;
        case 'price':
            validarCampo(expresiones.precio, e.target, 'precio');
            break;
        case 'description':
            validarCampo(expresiones.descripcion, e.target, 'descripcion');
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
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('form__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('form__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .form__input-error`).classList.add('form__input-error-activo');
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarForm);
    input.addEventListener('blur', validarForm);
})

function validarExt() {
    const imgInput = document.getElementById('image');
    const archivoRuta = imgInput.value;
    const extPermitidas = /(.png|.jpeg|.jpg|.gif)$/

    if (!extPermitidas.exec(archivoRuta)) {
        alert('Formato no permitido');
        imgInput.value = '';
        campos.image = false;
        return false
    } else {
        if (imgInput.files && imgInput.files[0]) {
            const visor = new FileReader();
            visor.onload = function (e) {
                document.getElementById('visorArchivo').innerHTML =
                    '<embed src="' + e.target.result + ' "width="200" height="200" >'
            };
            visor.readAsDataURL(imgInput.files[0]);
        }
        campos.image = true
        return true
    }
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    const imagenValida = validarExt();
    console.log(validarExt);

    if (campos.name && campos.price && campos.description && imagenValida) {
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
});
