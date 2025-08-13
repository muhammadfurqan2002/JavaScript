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




// what is dom? how does it represents the html structre;
// it's tree like strutcure and everything thing wirtten inside html is node


// Name the types of nodes in the Dom? 
// Node, Element, Text, Comment


// what's the difference between and element node and text node?
// html element is element node and inside it text called text node . it's alos has child element



//  what is difference between getElementById and querySelector?
//  getElementById we get only id and while queryselector is universal


// what does getElementById return ?
//  html collection  simply you can consider like array






// child nodes

let main=document.getElementsByClassName("main")

console.log(typeof main[0].childNodes);

console.log(main[0].firstChild)
console.log(main[0].lastChild)
console.log(main[0].firstElementChild)
main[0].lastElementChild.textContent="i hope you are well"
console.log(main[0].lastElementChild.innerText)
console.log(typeof main[0].lastElementChild.innerHTML )

console.log(main[0].childNodes[1]===main[0].firstChild)
console.log(main[0].childNodes[1].hasChildNodes)



// Matches , closest, contains  // these only works on elements or variables


// for checking element wheather it's speified or not
console.log(main[0].matches("p"))


// closet used to find closest ancestor start form self and then goes up in search of ancestor

let p=document.getElementsByClassName("child2")
let main_div=p[0].closest(".main")
console.log(p[0])
console.log(main_div)



// contains check whether element exist or not inside parent

console.log(main[0].contains(p[0]))
console.log(p[0].contains(main[0]))





// InsertAdjacent HTML/Text/Element

let sample=document.createElement("div")

sample.innerText=" hljfsd lkjdslkfs lkjdlkgd lkjdklfsjs lkjglkdfg ";



let ad=document.querySelector("#dom")

// ad.insertAdjacentElement("beforeend",sample)
// ad.insertAdjacentElement("afterbegin",sample)
// ad.insertAdjacentElement("beforebegin",sample)
