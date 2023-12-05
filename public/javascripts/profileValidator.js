const $ = id => document.getElementById(id);

window.onload = async function(e){

    $('name').addEventListener('blur', function(e){

        switch (true) {
            case !this.value.trim():
                $('msgError-name').innerHTML = "El nombre es obligatorio"
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length < 2:
                $('msgError-name').innerHTML = "Mínimo dos letras";
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

    

    $('surname').addEventListener('blur', function(e){

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

    $('email').addEventListener('focus', function(e){
        $('msgError-email').innerHTML = null
        this.classList.remove('is-invalid');
        this.classList.remove('is-valid')
    })
    
    $('email').addEventListener('blur', function(e){
    
        switch (true) {
            case !this.value.trim():
                $('msgError-email').innerHTML = "El email es obligatorioo!!!"
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
    
    

    
    $("birthday").addEventListener("blur", function (e) {
        switch (true) {
          case !this.value.trim():
            $("msgError-birthday").innerHTML = "La fecha de nacimiento es obligatoria";
            this.classList.add("is-invalid");
            break;
    
          default:
            $("msgError-birthday").innerHTML = null;
            this.classList.add("is-valid");
            this.classList.remove("is-invalid");
            break;
        }
      });
    
    $('form-Profile').addEventListener('submit', function(event) {
        event.preventDefault();

        const elementsForm = this.elements;
        let error = false;

        for (let i = 0; i < 3; i++) {
            
            if(!elementsForm[i].value.trim()){
                error = true;
                $('msgError-empty').innerHTML = "El formulario tiene errores"
            }

        }

        !error && this.submit()
    })
  

}