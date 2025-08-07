// what why how
// what function

function dance() {
    console.log("Function Declaration")
    console.log("Dance")
    console.log("Dance")
    console.log("Dance")
}
dance()

let fun = function () {
    // function expression
    console.log("Hi,He,Hlo")
}

fun()

// fat arrow function
const me = () => {
    console.log("Fat Arrow")
}


function party(v1, v2) {
    console.log(`${v1} naach rha rha`)
    return v1 + v2;
}

party(12, 30)


// default patameters
function add(v1 = 0, v2 = 0) {
    console.log(v1 + v2)
}

add()

// rest operator function

function param(a, b, c, ...value) {
    console.log(c)
    return a + b;
}

param(1, 2, 3, 4, 4, 5,)


// first class function

// ese function jisko value ki tarah treat kar sakte ha

function firstClass(val) {
    val();
}

firstClass(function () {
    console.log("Hlo")
})



// higher order functions
// ese functions jote ha wo ki rteurn kare function ya accept kare ik function khud ke parameter me

// abcd ik hihger order function ha

function abcd(val) {
    // ya koi function return kare

    return () => {
        console.log("Rteurning function")
    }
}

// abcd(()=>{
//     console.log("Higher order")
// })

abcd();


///////// Pure and Impure functions


// esa function jo abhir ki value ko chnage na kare pure function

let p = 12;

function pure() {
    console.log("Pure function")
}



// esa function jo abhir ki value ko chnage kare de impure function


function impure() {
    p++;
}




// closures -> ek fnc jo rteurn kare ek aur function aur rteurn hone wala function use karega parent ki koi vlaue


function closure() {
    let a = 454;
    return function () {
        return a++;
    }

}


///////////   lexical scooping ///////

function efgh() { // means scooping of variable 
    let a = 45;
    function deg() {
        let b = 13;
        function ghij() {
            let c = b * a;
        }
    }
}


////////// iifi ////
// immedialty invoked function

(function () {
    console.log("Immediately invoked function")
})();




/////////////  function Hositing   ///////////

hoisting()

// function ki declaration se pehle function ko use kar pa rhe ho

function hoisting() {
    console.log("ki hal chal e 😂")
}


// lekin function expression me work ni kare ga

// let hoisting=()=>{   // it give error
//     console.log("ki hal chal e 😂")
// }








////////// practice /////////////////


let bmi = (weight, height) => {
    return weight / (height * height)
}

console.log(bmi(58, 5.8).toFixed(2))



function discountCalculator(discount) {
    return function (price) {  // ye tab hi call hoga jab discounter call kare ge
        return price - price * (discount/100);
    }
}

let discounter = discountCalculator(10);

console.log(discounter(200))



