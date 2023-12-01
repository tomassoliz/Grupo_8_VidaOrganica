const $ = (id) => document.getElementById(id);

window.onload = function () {
  $("email").addEventListener("focus", function (e) {
    $("msgError-Email").innerHTML = null;
    this.classList.remove("is-invalid");
    this.classList.remove("is-valid");
  });

  $("email").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msgError-Email").innerHTML = "El email es obligatorio";
        this.classList.add("is-invalid");
        break;
      case !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.value.trim()):
        $("msgError-Email").innerHTML = "El formato es inválido";
        this.classList.add("is-invalid");
        break;
      default:
        $("msgError-Email").innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        break;
    }
  });



$("password").addEventListener("focus", function (e) {
    $("msgError-Pass").innerHTML = null;
    this.classList.remove("is-invalid");
    this.classList.remove("is-valid");
  });

  $("password").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msgError-Pass").innerHTML = "La contraseña es obligatoria";
        this.classList.add("is-invalid");
        break;
      default:
        $("msgError-Pass").innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        break;
    }
  });

  $('viewPassword').addEventListener('click', function(e) {
        
    $('msgError-Pass').innerHTML = null
    $('password').classList.remove('is-invalid');
    $('password').classList.remove('is-valid');

    $('password').type = $('password').type === "text" ? "password" : "text"

    this.classList.toggle("fa");
    this.classList.toggle("fa-eye");

    this.classList.toggle("fa-solid");
    this.classList.toggle("fa-eye-slash");

});

}
