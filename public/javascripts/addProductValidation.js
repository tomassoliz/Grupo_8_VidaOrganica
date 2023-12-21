const $ = id => document.getElementById(id);

window.onload = function () {

    $('name').addEventListener('blur', function (e) {

        switch (true) {
            case !this.value.trim():
                $('msgError-name').innerHTML = "El nombre es obligatorio"
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length < 5:
                $('msgError-name').innerHTML = "Mínimo cinco letras";
                this.classList.add('is-invalid')
                break
            case !/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(this.value.trim()):
                $('msgError-name').innerHTML = "Solo se permiten letras";
                this.classList.add('is-invalid')
                break
            default:
                $('msgError-name').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    });

    $('price').addEventListener('blur', function (e) {

        switch (true) {
            case !this.value.trim():
                $('msgError-price').innerHTML = "El precio es obligatorio"
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length < 2:
                $('msgError-price').innerHTML = "Mínimo dos numeros";
                this.classList.add('is-invalid')
                break
            case !/^[0-9]+$/.test(this.value.trim()):
                $('msgError-price').innerHTML = "Solo se permiten numeros";
                this.classList.add('is-invalid')
                break
            default:
                $('msgError-price').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    });
    $('brand').addEventListener('blur', function (e) {

        switch (true) {
            case !this.value.trim():
                $('msgError-brand').innerHTML = "La marca es obligatoria"
                this.classList.add('is-invalid')
                break;
            default:
                $('msgError-brand').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    });

    $('category').addEventListener('blur', function (e) {

        switch (true) {
            case !this.value.trim():
                $('msgError-category').innerHTML = "La categoría es obligatoria"
                this.classList.add('is-invalid')
                break;
            default:
                $('msgError-category').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    });

    $('section').addEventListener('blur', function (e) {

        switch (true) {
            case !this.value.trim():
                $('msgError-section').innerHTML = "La sección es obligatoria"
                this.classList.add('is-invalid')
                break;
            default:
                $('msgError-section').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    });

    $('description').addEventListener('blur', function (e) {

        switch (true) {
            case !this.value.trim():
                $('msgError-description').innerHTML = "La descripción es obligatoria"
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length < 2:
                $('msgError-description').innerHTML = "Mínimo dos letras";
                this.classList.add('is-invalid')
                break
            case !/^[A-Za-z\s\d!]+$/.test(this.value.trim()):
                $('msgError-description').innerHTML = "Solo se permiten letras";
                this.classList.add('is-invalid')
                break
            default:
                $('msgError-description').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    });

}





















/* const form = document.getElementById('productAdd');/* captura el formulario con id = productAdd 

const inputs = document.querySelectorAll('#productAdd input'); // accede a los inputs del form con id = productAdd 


const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{5,40}$/, // Letras y espacios, pueden llevar acentos.
	precio: /^\d{2,5}$/, // 2 a 5 numeros.
    descuento: /^\d{2,15}$/, // 2 a 15 numeros.
	descripcion: /^[a-zA-ZÀ-ÿ\s\d]{5,500}$/ // Descripcion,
}

const validarForm = (e) => {
   switch (e.target.name) {
    case 'name':
        validarCampo(expresiones.nombre, e.target, 'name');
    break;
    case 'price':
        validarCampo(expresiones.precio, e.target, 'price');
    break;
    case 'discount':
        validarCampo(expresiones.descuento, e.target, 'discount');
    break;
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
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error'`).classList.add('formulario__input-error-activo');
    }
}

inputs.forEach((input) =>{
    input.addEventListener('keyup', () => {
        validarForm()
    })
})

form.addEventListener('submit', (e) =>{
    e.preventDefault();
}); */

/* BASADO EN PG */

/* window.addEventListener('onload', function () {
    let form = document.querySelector('form.form-add');

    form.addEventListener('submit', function (e) {

        let errors = [];

        let name = document.querySelector('input.productName')

        if (name.value === "") {
            errors.push('El campo nombre debe completarse')
        } else if (name.value.lenght < 5) {
            errors.push('el campo nombre debe tener al menos 5 caracteres')
        };

        let price = document.querySelector('input.price');
        if (price.value == "") {
            errors.push('Elcampo precio debe completarse')
        } else if (price.value !== Number) {
            errors.push('el campo precio solo acepta numeros')
        };

        let description = document.querySelector('textarea.description');
        if (description.value == "") {
            errors.push('El campo description debe completarse')
        } else if (description.value.lenght < 20) {
            errors.push('el campo nombre debe tener al menos 5 caracteres')
        };

        if (errors.length > 0) {
            e.preventDefault();

            let ulErrors = document.querySelector('.errors ul');
            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += "<li>" + errors[i] + "</li>";

            }
        };
    })
}) */
























///////////////////////////////////////////
/* BASADO EN CLASE */

/* window.onload = function () {
    $('name').addEventListener('blur', function (e) {
        switch (true) {
            case !this.ariaValue.trim():
                $('msgError-name').innerHTML = 'El nombre es obligatorio'
                this.classList.add('is-invalid')
                break;
            case this.ariaValueMax.trim().length < 2:
                $('msgError-name').innerHTML = 'Mínimo dos letras'
                this.classList.add('is-invalid')
            default:
                break;
        }
    })
}
 */

/* $('productAdd').addEventListener('submit', function (event) {
    event.preventDefault();

    const errors = [];
    $('box-errors').innerHTML = null

    for (let i = 0; i < elementsForm.length -1; i++) {
        if (!elementsForm[i].value) {
            errors.push(`El campo ${elementsForm[i].name} no puede estar vacio`)
        }
        if (elementsForm[i].classList.contains('is-invalid')) {
            errors.push(`el campo${elementsForm[i].name} tiene datos inválidos`)
        }
    }

    if (errors.length) {
        errors.forEach((error) => {
            $('box-errors').innerHTML +=`<li>${error}</li>`
        });
    } else {
        this.Submit()
    }
}) */

