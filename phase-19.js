fetch("https://dummyjson.com/carts").then((res) => res.json().then((data) => {
    console.log(data.carts[0].products)
    data.carts[0].products.forEach(element => {
        let main = document.createElement("div")
        let h1 = document.createElement("h1")
        h1.textContent = element.title
        main.appendChild(h1)
        document.body.appendChild(main)
    });
})).catch((error) => { console.log() })



let form = document.querySelector("form")

form.addEventListener("click", function () {
    e.preventDefault();
    fetch("url", {
        method: "POST",
        body: JSON.stringify({
            name: "furqan",
            email,
            password
        })
    })
})
