var form =document.querySelector("form")
var _name=document.querySelector("#name")
var _email=document.querySelector("#email")
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
form.addEventListener("submit",function(e){
    e.preventDefault();
    if(_name.value.length<=2){
        document.querySelector(".error").style.display="initial"        
        document.querySelector(".error").textContent="Name should be Two character Long"        
    }else{
        document.querySelector(".error").style.display="none"        
    }
    if(!emailRegex.test(_email.value)){
        document.querySelector(".error").style.display="initial";  
        document.querySelector(".error").textContent="Email should be Valid";      
    }else{
        document.querySelector(".error").style.display="none"        
    }


})