const showPass =  document.querySelector("#password");
const toggle = document.querySelector("#showPassword");

document.addEventListener("click", e=>{
    let ele = e.target;
    console.log(ele);
    if(ele.getAttribute("class") === "bi bi-eye-slash"){
        ele.setAttribute("class","bi bi-eye");
        showPass.setAttribute("type","text");  
       
    }
    else if(ele.getAttribute("class") === "bi bi-eye"){
        ele.setAttribute("class","bi bi-eye-slash");
        showPass.setAttribute("type","password");  
    }
    
})