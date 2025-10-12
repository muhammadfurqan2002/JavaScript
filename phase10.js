// any movement on page broswer called event which trigger for performing some operations
// Event handling


let h1=document.querySelector("h1")

h1.addEventListener("click",(e)=>{
    e.preventDefault();
    h1.style.fontFamily="cursive"
    console.log(e)
})