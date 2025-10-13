// special keyword this (it's nature change based on where it will be used)

// global scope

console.log(this)


//function

function abcd() {
    console.log(this)
}


abcd()


//note : never make arrow function or then make again function inside method it will loose this property
// function which is written inside object called method
let obj = {
    name: "furqan",
    sayHello: function () {
        console.log(this.name) // here this refer to this whole object instead of window
    }
}


obj.sayHello();




// Event handler

let h1 = document.querySelector("h1")
h1.addEventListener("click", function () {
    console.log(this) // here it will be event on which it happen
})





// this call apply bind
//function ko call karte waqt aap set kar skte ho iski value kya hogi

let objj = {
    name: "furqan"
}


function bcd(A, B, C) {
    console.log(this)
    console.log(this.name, A, B, C)
}
// bcd.call(objj)
// bcd.call(objj,1,2,3)
// bcd.apply(objj,[1,2,3])
let fun = bcd.bind(objj, 1, 2, 3) // it return new function instead of calling

fun()




// class
// here this value will be blank which will be class object
class Abc {

    constructor() {
        console.log("heyhe")
        this.a = 12;
    }
}


let val = new Abc()

























const userManager = {
    users: [],
    init: function () {
        document.querySelector("form").addEventListener("submit", this.submitForm.bind(this))
    },
    submitForm: function (e) {
        e.preventDefault()
        console.log("form submitted")
        this.addUser()

    },
    addUser: function () {
        this.users.push({
            name: "furqan",
            id: Math.random(),
            age: "25"
        })
        this.renderUser()
    },

    renderUser:function(){
        this.users.forEach((e)=>{
            console.log(e);
        })
    },

    removeUser: function () {

    }
}


userManager.init();