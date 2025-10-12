// localStorage -> aapke browser ke ander data store karta ha jab browser band hone par bi delete ni hoga

// sessionStorage -> ye aapka data temporarily store karta ha hai matlab ki tab close howa aur data gya

// cookies -> ye bi data store karta hai and aapka data broswer ke cookies nam ki property mein save hota hai and 
// ye cookie concept kam data ya light data ke liye hota ha use

const btn = document.querySelector("#btn");

function setDarkOrLight() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
    } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    }
}

// Initialize theme on page load
if (localStorage.getItem("theme")) {
    document.body.classList.add(localStorage.getItem("theme"));
} else {
    setDarkOrLight();
}

// Listen for system theme changes
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
    if (!localStorage.getItem("theme")) {
        setDarkOrLight();
    }
});

// Toggle theme on button click
btn.addEventListener("click", function () {
    if (document.body.classList.contains("dark")) {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        localStorage.setItem("theme", "light");
    } else {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }
});






// 

// localStorage.setItem("key","value");
// localStorage.removeItem("key");
// localStorage.getItem("key")



// sessionStorage.setItem("key","vlaue");
// sessionStorage.getItem("key")
// sessionStorage.removeItem("key")



document.cookie="muhammad Furqan"

console.log(document.cookie)