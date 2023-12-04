const $ = id => document.getElementById(id);


window.onload = async function (e) {

    $('name').addEventListener('blur', function (e) {

        switch (true) {
            case !this.value.trim():
                $('msgError-name').innerHTML = "Debes introducir un nombre"
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length < 2:
                $('msgError-name').innerHTML = "Debe tener como mínimo dos letras";
                this.classList.add('is-invalid')
                break
            case !/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(this.value.trim()):
                $('msgError-name').innerHTML = "No se permiten caracteres especiales";
                this.classList.add('is-invalid')
                break
            default:
                $('msgError-name').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    });



    $('surname').addEventListener('blur', function (e) {

        switch (true) {
            case !this.value.trim():
                $('msgError-surname').innerHTML = "Debes introducir un apellido"
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length < 2:
                $('msgError-surname').innerHTML = "Debe tener como mínimo dos letras";
                this.classList.add('is-invalid')
                break
            case !/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(this.value.trim()):
                $('msgError-surname').innerHTML = "No se permiten caracteres especiales";
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
                $('msgError-email').innerHTML = "Debes introducir una dirección de correo electrónico"
                this.classList.add('is-invalid')
                break;
            case !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.value.trim()):
                $('msgError-email').innerHTML = "No se permiten caracteres especiales";
                this.classList.add('is-invalid')
                break
            default:
                $('msgError-email').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    });
    $('email').addEventListener('change', async function (e) {

        try {

            const response = await fetch(`/apis/check-email?email=${this.value.trim()}`)
            const result = await response.json()

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
                $('msgError-password').innerHTML = "La contraseña debe tener entre 6 y 12 caracteres, incluyendo minúsculas, al menos una mayúscula, al menos un número y un caracter especial";
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

        $('msgError-password').innerHTML = null
        this.classList.remove('is-invalid');
        this.classList.remove('is-valid')
    })

    $('password2').addEventListener('blur', function (e) {

        switch (true) {
            case !this.value.trim():
                $('msgError-password2').innerHTML = "Confirmá tu contraseña"
                this.classList.add('is-invalid')
                break;
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


    $('formuVal').addEventListener('submit', function (event) {

        event.preventDefault();

        const elementsForm = this.elements;
        let error = false;

        for (let i = 0; i < elementsForm.length - 1; i++) { // El for recorre todos los elementos del formulario y el -1 es para que no agarre el boton

            if (!elementsForm[i].value.trim() || elementsForm[i].classList.contains('is-invalid')) {
                error = true;
                elementsForm[i].classList.add('is-invalid');
                $('msgError-empty').innerHTML = "Revisá que todos los datos introducidos sean correctos"
            }
        }
        !error && this.submit() // Si no hay error se envía el form
    })


}