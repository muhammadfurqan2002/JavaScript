// Dom Manipulation
// dom=body  (everything in body is part of dom)

// const div=document.getElementsByClassName("main-dev")
let div = document.querySelector(".main-dev")
let text = document.getElementById("text")
text.hidden=true;
text.style.fontFamily = "cursive"
console.dir(div);



let sec = document.querySelectorAll("section")

sec.forEach((e,i) => {
    e.style.background = "pink"
    // e.innerText=`${i} section`
    // e.textContent=`hello tum kese ho ${i}`
    e.innerHTML="<strong>hey i hope you are fine</strong>"
})








let a=document.querySelector("a");

a.href="https://www.liknedin.com"

a.setAttribute("href","https://www.google.com")




let img=document.querySelector("img")
img.removeAttribute("src")
console.log(img.getAttribute("src"))





// Dynamic dom manipulation



let h1=document.createElement("h1");
h1.innerText="Furqan"

// document.body.appendChild(h1)
document.body.prepend(h1)






// create element and then append or prepend element chahye

let strong=document.createElement("strong")

strong.innerHTML="<i>Good Morning</i>"

// document.body.appendChild(strong)
a.appendChild(strong)

// a.removeChild(strong)



let color=a.querySelector("strong")
console.log(color)
color.style.fontFamily="Cursive"
color.style.color="green"



let span=document.querySelector("span")
// span.classList.add("hlo")
// span.classList.rmeove("hlo")
span.classList.toggle("hlo")





