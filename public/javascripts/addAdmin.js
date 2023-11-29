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
	description: false,
    image: false
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
    case 'image':
        validarCampo(expresiones.image, e.target, 'image');
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

/* const defaultFile = '\images\DefaultProductImages.jpg';
const img = document.getElementById('img');
fileLoader.addEventListener('change', e=> {
    if (e.target.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            img.src = e.target.result;
        }
        reader.readAsDataURL(e.target.files[0])
    }else{
        img.src = defaultFile;
    }
}) */

function validarExt() {
    var imgInput = document.getElementById('image');
    var archivoRuta = imgInput.value;
    const extPermitidas = /(.png|.jpeg|.jpg|.gif)$/i

    if (!extPermitidas.exec(archivoRuta)) {
        alert('Formato no permitido');
        imgInput.value= '';
        return false;
    }
        else{
            if (imgInput.files && imgInput.files[0]) {
                var visor = new FileReader();
                visor.onload=function(e){
                    document.getElementById('visorArchivo').innerHTML=
                    '<embed src="'+e.target.result+'" width="200" height="200" >'
                };
                visor.readAsDataURL(imgInput.files[0]);
            }
        }
}
const $ = id => document.getElementById(id);
const elementsForm = $('form').elements;



/* form.addEventListener('submit', function(event) {
    event.preventDefault();

    const errors = [];

    for (let i = 0; i < array.length; i++) {
        if (!elementsForm[i].value) {
            errors.push(`El campo ${elementsForm[i].name} no puede estar vacío.`)
        }
        
    }
    if(!errors.length){
        document.getElementById('form__mensaje').classList.add('form__mensaje-activo');
    }else{
        this.submit();
    }
    
}); */

$('formAdd').addEventListener('submit',(e) =>{
    if (!campos.name || !campos.price || !campos.description || !campos.image) {
        e.preventDefault();
        document.getElementById('form__mensaje').classList.add('form__mensaje-activo');
    }else {
        this.Submit()
    }
});

    

   







/* FRACASO DE VALIDACION DE IMAGEN */

/* const allowExtensionImg = (idinputfile) =>{
    
    var fileInput = document.getElementById('image');
    
    fileInput.addEventListener('change', function () {
        
            var filePath = this.value;
            var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
            if(!allowedExtensions.exec(filePath)){
                document.getElementById(`grupo__${campo}`).classList.add('form__grupo-incorrecto')
                fileInput.value = '';
                return false;
            }else{
                document.getElementById(`grupo__${campo}`).classList.remove('form__grupo-correcto')
                return true;
            }
        
    });
    
}
 */