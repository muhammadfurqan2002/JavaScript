var elem = document.querySelector("h1");
var p = document.querySelector("p");

// 1️⃣ Define the handler separately
function changeColor() {
    elem.style.color = "red";
}

// 2️⃣ Add event listener
elem.addEventListener("click", changeColor);

// Paragraph double-click event
p.addEventListener("dblclick", function () {
    p.style.color = "yellow";
    alert("Good Morning");
});





var input = document.querySelectorAll("input")


input[0].addEventListener("input", function (e) {
    if (e.data !== null) {
        console.log(e.data)
    }
    elem.innerText = `${elem.innerText}${e.data}`
    // console.log(e.target.value)
})


document.body.addEventListener("copy", function () {
    p.style.border = "2px solid blue";
    p.style.borderRadius = "5px";
    p.style.color = "white";
    p.style.backgroundColor = "black";


    p.innerText = "Data Copied successfully"
})





// change event tab chalta ha jab apka koi input select ha change ho jata ha


var h3 = document.querySelector("h3")
var select = document.querySelector("select")

select.addEventListener("change", function (e) {
    // console.log(e.data) yaha data ki value ni mile ge
    h3.style.textTransform = "uppercase"
    console.log(e.target.value)
    h3.textContent = `${e.target.value} Device Selected`;
})




let h1 = document.querySelector("h1")

window.addEventListener("keydown", function (e) {
    console.log(e.key);
    if (e.key !== " ") {
        h1.textContent = `${e.key}`
    } else {
        h1.textContent = `SPC`
    }
})



// file picker logic

let btn = document.querySelector("#btn");
let fl = document.querySelector("#file");


btn.addEventListener("click", function () {
    fl.click();
})

fl.addEventListener("change", function (e) {
    console.log(e.target.files[0].name)
    if (e.target.files[0]) {
        btn.textContent = e.target.files[0].name

    }
})




/// form handling


let form = document.querySelector("form");
let inputs = document.querySelectorAll("input")

form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(inputs)
    const card = document.createElement("div");
    // card.classList.add("card")
    const profile = document.createElement("div");
    // profile.classList.add("profile")

    const img = document.createElement("img")
    img.setAttribute("src", "https://www.upwork.com/profile-portraits/c1qE7WUwMC6iHmBRxMx0mZAS0QfrXbNd7IglDoOw1subfxgBZLJSVsgyOAdloRjpq8");

    let h3 = document.createElement("h3")
    h3.textContent = inputs[2].value;
    let h5 = document.createElement("h5")
    h5.textContent = inputs[3].value;
    let p = document.createElement("p")
    p.textContent = inputs[4].value
    profile.appendChild(img);
    card.appendChild(profile)
    card.appendChild(h3)
    card.appendChild(h5)
    card.appendChild(p)


    document.body.appendChild(card)

    input.forEach(function (e) {
        if (e.type !== "submit") {
            e.value = ""

        }
    })
})



// Mouse Moving 
let box = document.querySelector("#lastBox")
// move curosr on screen
window.addEventListener("mousemove", function (e) {
    // console.log(e.clientX,e.clientY)
    box.style.top = e.clientY + "px"
    box.style.left = e.clientX + "px"
})




// EVENT Bubbling

box.addEventListener("click", function (e) {
    // (e) here is event object
})




/// Event Bubbling

// tranfer to parent if not transfer
// jispe event aayega agr uspar listener nahi howa to humaara event uske parent par listener dhundhega aur aisa karte karte upar ki taraf move kare ga
//or agr sab child and parent per event lage ah to wo sab one by one listen hoge
// heirarchy
// main div 
//     nav div     
//         links
//         buttons


let main=document.querySelector("#main")
let nav=document.querySelector("#nav")

nav.addEventListener("click",function(){
    alert("Alert has been happen")
})


// hume target me wohi milta ha jis per click hota agr us per event na bi listen ho tab bi


let ul=document.querySelector("ul")
ul.addEventListener("click",function(e){
    e.target.classList.toggle("li")
})


//  event capturing
// alternate of bubbling
let a=document.querySelector(".a")
let b=document.querySelector(".b")
let c=document.querySelector(".c")
let bt=document.querySelector(".btn")

bt.addEventListener("click",function(e){
    alert("button")
})
a.addEventListener("click",function(e){
    alert("A")
},true) //here i on capture face by using true
b.addEventListener("click",function(e){
    alert("B")
})
c.addEventListener("click",function(e){
    alert("C")
})





// jab bi aap click krte ho ya koi bhi event raise krte ho to aapka event flow two phases mein chalta ha;
// but bydefault capture face start but we not enable it that's why event bubbling happen first
// 1: event top level element se neeche ki taraf aayega  (always it happen first then bubbling perform)
// 2: event raised element se parent ki taraf jaayega 

