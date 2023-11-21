/* const $ = id => document.getElementById(id) */
window.addEventListener('load', function () {
    let form = document.querySelector('form.reservation');

    form.addEventListener('submit', function (e) {
        

        let errors = [];

        let name = document.querySelector('input.name')

        if (name.value == "") {
            errors.push('El campo nombre debe completarse')
        }else if (name.value.lenght < 5) {
            errors.push('el campo nombre debe tener al menos 5 caracteres')
        }

        let price = document.querySelector('input.price')
        if (price.value == "") {
            errors.push('Elcampo precio debe completarse')
        }else if (price.value !== Number) {
            errors.push('el campo precio solo acepta numeros')
        }

        let description = document.querySelector('textarea.description')
        if (description.value == "") {
            errors.push('El campo description debe completarse')
        }else if (description.value.lenght < 5) {
            errors.push('el campo nombre debe tener al menos 5 caracteres')
        }

        if (errors.length > 0) {
            e.preventDefault();

            let ulErrors = document.querySelector('.errors ul');
            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += "<li>" + errors[i] + "</li>";
                
            }
        }
    })
})






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

