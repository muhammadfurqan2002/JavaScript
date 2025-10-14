//separation of concerns
// DoM or logic ka code separate hona chahye

let btn = document.querySelector("button")

function add(n1, n2) {
    return n1 + n2;
}
btn.addEventListener("click", function () {
    const num1 = Math.floor(Math.random() * 10)
    const num2 = Math.floor(Math.random() * 10)
    let addition = add(num1, num2)
    let li = document.createElement("li")
    li.textContent = addition;
    document.querySelector("ul").appendChild(li);
})



// custom map -> ek array ke top per chalta ha or ek naya array return karta ha and us naye array mein jo bi map kiya hoga wo mile ga

function myMap(arr, callback) {

}





// call stack


// that's callstack function execution in style of last in first out
function a() {
    console.log("a")
}

function b() {
    a();
    console.log("b")
}

function c(){
    b();
    console.log("c")
}

c()




// event loops


// synchronous & Asynchronous(execute all tasks at same time jo jis order me complete ho aje usko chala do) 
// line by line execution


// fn -> 5sec -> TQ -> CS -> execution done
// event loop working

// jab tak call stack ni hijata tab tak task quwue se call stack me nhi jae ga
// event loop continously check karta ha call stack ko