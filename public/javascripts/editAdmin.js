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
            case this.value.trim().length < 10:
                $('msgError-description').innerHTML = "Debe contener como mínimo 10  letras";
                this.classList.add('is-invalid')
                break
            case !/^[A-Za-z\s\d!]+$/.test(this.value.trim()):
                $('msgError-description').innerHTML = "No se permiten caracteres especiales";
                this.classList.add('is-invalid')
                break
            default:
                $('msgError-description').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    });

	// este es el id del formulario
    $('formulario').addEventListener('submit', function (event) {
        event.preventDefault();

        // this.elements = accedes a todos los elementos del formulario
        const elementsForm = this.elements;
        let error = false;

        for (let i = 0; i < elementsForm.length - 1; i++) {

            // si esta vacio o esta invalido hace...
            if (!elementsForm[i].value.trim() || elementsForm[i].classList.contains('is-invalid')) {
                error = true;
                elementsForm[i].classList.add('is-invalid');
                $('msgError-empty').innerHTML = "El formulario tiene errores, volvé a intentarlo"
            }
        }
        // si no hay error mandame el formulario
        !error && this.submit()
    })

}