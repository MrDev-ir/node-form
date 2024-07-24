const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
pwShowHide = document.querySelectorAll(".pwHide");

pwShowHide.forEach((icon) => {
    icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector("input");
        if (getPwInput.type === "password"){
            getPwInput.type = "text";
            icon.classList.replace("fa-eye-slash", "fa-eye");
        }else{
            getPwInput.type = "password";
            icon.classList.replace("fa-eye", "fa-eye-slash");
        }
    });
});

registerBtn.addEventListener("click", () => {
    container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
});