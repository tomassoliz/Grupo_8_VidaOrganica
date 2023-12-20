const $ = id => document.getElementById(id);

// esto es un elemento cuando se cargue haga todo lo demas... clave
window.onload = function () {

    $('name').addEventListener('focus', function (e) {
        // cuando hago foco hace lo contrario a...
        $('msgError-name').innerHTML = null
        this.classList.remove('is-invalid')
        this.classList.remove('is-valid')
    })

    $('name').addEventListener('blur', function (e) {
        // function usa para usar "this" del elemento que en este caso es "name"

        // true: es para colocar varias condiciones y no sea una sola
        switch (true) {
            // si es que no tiene valor
            case !this.value.trim():
                $('msgError-name').innerHTML = "El nombre es obligatorio"
                // propiedad de bootstrap
                this.classList.add('is-invalid')
                break;
            // cantidad de elementos
            case this.value.trim().length < 2:
                $('msgError-name').innerHTML = "Mínimo dos letras";
                this.classList.add('is-invalid')
                break
            // expresion regular
            // usamos el metodo test para testear en base a la expresion regular que te dice que son todas letras
            case !/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(this.value.trim()):
                $('msgError-name').innerHTML = "Solo se permiten letras";
                this.classList.add('is-invalid')
                break
            default:
                // si es que el msj esta bien
                $('msgError-name').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    });


    $('surname').addEventListener('focus', function (e) {
        $('msgError-surname').innerHTML = null
        this.classList.remove('is-invalid');
        this.classList.remove('is-valid')
    })

    $('surname').addEventListener('blur', function (e) {

        switch (true) {
            case !this.value.trim():
                $('msgError-surname').innerHTML = "El apellido es obligatorio"
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length < 2:
                $('msgError-surname').innerHTML = "Mínimo dos letras";
                this.classList.add('is-invalid')
                break
            case !/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(this.value.trim()):
                $('msgError-surname').innerHTML = "Solo se permiten letras";
                this.classList.add('is-invalid')
                break
            default:
                $('msgError-surname').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    });


    $('email').addEventListener('focus', function (e) {
        $('msgError-email').innerHTML = null
        this.classList.remove('is-invalid');
        this.classList.remove('is-valid')
    })

    $('email').addEventListener('blur', function (e) {

        switch (true) {
            case !this.value.trim():
                $('msgError-email').innerHTML = "El email es obligatorio"
                this.classList.add('is-invalid')
                break;
            case !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.value.trim()):
                $('msgError-email').innerHTML = "El formato es inválido";
                this.classList.add('is-invalid')
                break
            default:
                $('msgError-email').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    });

    // hacemos otro evento Listener cuando haya cambiado el valor de arriba

    $('email').addEventListener('change', async function (e) {
        // change: cuando cambia el valor

        try {
            // esto es por la api que creamos y lo usamos por fetch
            const response = await fetch(`/apis/check-email?email=${this.value.trim()}`)
            // ademas el parametro "email = el elemento con su valor"
            
            // esto es para parsearlo
            const result = await response.json()

            // si es true hacemos ...
            if (result.data) {
                $('msgError-email').innerHTML = "El email ya se encuentra registrado"
                this.classList.add('is-invalid')
            }
        } catch (error) {
            console.error(error);
        }
    })

    $('password').addEventListener('focus', function (e) {
        $('msgError-password').innerHTML = null
        this.classList.remove('is-invalid');
        this.classList.remove('is-valid')
    })

    $('password').addEventListener('blur', function (e) {

        switch (true) {
            case !this.value.trim():
                $('msgError-password').innerHTML = "La contraseña es obligatoria"
                this.classList.add('is-invalid')
                break;
            case !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,12}$/.test(this.value.trim()):
                $('msgError-password').innerHTML = "La contraseña debe tener entre 6 y 12 caracteres, minúscula, mayúscula, número y caracter especial";
                this.classList.add('is-invalid')
                break
            default:
                $('msgError-password').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    });

    $('password2').addEventListener('focus', function (e) {
        $('msgError-password2').innerHTML = null
        this.classList.remove('is-invalid');
        this.classList.remove('is-valid')
    })

    $('password2').addEventListener('blur', function (e) {

        switch (true) {
            case !this.value.trim():
                $('msgError-password2').innerHTML = "Debes confirmar tu contraseña"
                this.classList.add('is-invalid')
                break;
                // si no coinciden mabos password
            case this.value.trim() !== $('password').value.trim():
                $('msgError-password2').innerHTML = "Las contraseñas no coinciden";
                this.classList.add('is-invalid')
                break
            default:
                $('msgError-password2').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    });

    // este es el id del formulario
    $('form-register').addEventListener('submit', function (event) {
        event.preventDefault();

        // this.elements = accedes a todos los elementos del formulario
        const elementsForm = this.elements;
        let error = false;

        for (let i = 0; i < elementsForm.length - 3; i++) {

            // si esta vacio o esta invalido hace...
            if (!elementsForm[i].value.trim() || elementsForm[i].classList.contains('is-invalid')) {
                console.log(!elementsForm[i].value && elementsForm[i]);
                error = true;
                elementsForm[i].classList.add('is-invalid');
                $('msgError-empty').innerHTML = "El formulario tiene errors"
            }
        }
        // si no hay error mandame el formulario
        !error && this.submit()
    })

}