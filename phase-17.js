//oops

// first thing that run in class is constructor

class CreatePencil {
    constructor(name, company, price, color) {
        this.name = name;
        this.company = company;
        this.price = price;
        this.color = color;
    }


    erase() {
        document.body.querySelectorAll("h1").forEach((elem) => {
            elem.remove()
        })
    }

    write(text) {
        let h1 = document.createElement("h1")
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.appendChild(h1)
    }

}



let p1 = new CreatePencil("hkg", "piano", 10, "black")
let p2 = new CreatePencil("hkg", "camel", 10, "black")

p1.write("Data has been lost in the form of gigs");









class User {
    constructor(name, email, username) {
        this.name = name;
        this.username = username;
        this.role = "";
        this.email = email;
    }

    write(text) {
        let h1 = document.createElement("h1")
        h1.textContent = `${this.name} : ${text}`;
        h1.style.color = this.color;
        document.body.appendChild(h1)
    }
}

class Admin extends User {
    constructor(name, email, username, role) {
        super(name, email, username);
        this.role = role;
    }

    erase() {
        document.body.querySelectorAll("h1").forEach((elem) => {
            elem.remove()
        })
    }


}


let u1 = new User("furqan", "abc@gmail.com",  "BB1")
let u2 = new User("Nontingom", "abc@gmail.com", "BC1")

let admin=new Admin("furqan","nb@gmail.com","BB2")






//prototype inheritance  means object inherit from object




let coffe={
    color:"dark",
    drink:function(){
        console.log("gut gut gut")
    }
}

let arabiataCoffe=Object.create(coffe)

console.log(arabiataCoffe)



// 