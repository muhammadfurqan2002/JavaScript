// debouncing -> aap koi action kar rahe ho and aap ye nahi chaahte har action per kuch ho
// jab bhi mere actions ke beech mein koi specific gap aajaye to fir action perform ho


let input = document.querySelector("input")

// note jab bi hum debounce() likhe ge ye automatically call ho jae ga jab bracs me call karo ge

function debounce(fnc, delay) {
    let timer;
    return function (...args) {  //acutally this one will run because debounce remove and return this one function on input when will happen
        clearTimeout(timer);
        timer = setTimeout(() => {
            fnc(...args)
        }, delay)
    }
}



//throtle means interval per chalao ga

function throttle(fnc, delay) {
    let timer = 0;
    return function (...args) {  //acutally this one will run because debounce remove and return this one function on input when will happen
        let now = Date.now();
        if (now - timer >= delay) {
            timer = now;
            fnc(...args)
        }
    }
}




input.addEventListener("input", debounce(function (data) {
    console.log(data)
}, 1000))




// Intersection and observer

let imgs = document.querySelectorAll("img")

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add("loaded");
            observer.unobserve(entry)
        }
    })
}, { root: null, threshold: .1 })

imgs.array.forEach(element => {
    observer.observe(element)
});




//createdocumentfragmented