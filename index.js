const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click",(event)=>{
    const type = password.getAttribute("type") ==="password" ? "text":"password";
    password.setAttribute("type",type);
     event.target.classList.toggle("bi-eye");
     
    
})

document.querySelector("form").addEventListener("submit",(event)=>{
    event.preventDefault();
});
