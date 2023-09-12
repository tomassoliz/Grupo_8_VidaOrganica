const pass = documnet.getElementById("form-control"),
    icon = document.querySelector("icon_eye")

icon.addEventListener("click", e => {
    if (pass.type === "password") {
        pass.type = "text";
        icon.classList.remove('fa-solid fa-eye')
        icon.classList.add('fa-solid fa-eye-slash')
    } else {
        pass.type = "password"
        icon.classList.add('fa-solid fa-eye')
        icon.classList.remove('fa-solid fa-eye-slash')
    }
})