//  design patterns

// module pattern ek design pattern hai jisme hum apna code ek self executing
// function (IIFE) ke andar likhte hain, taki variables aur functions private rahein.

// iske andar se hum wohi cheeze return karte ha jinke ki zaorat hoti ha (encapsulation)


// everything written in iife is private and returning only that needs outside 
let Bank = (function () {
    let bankBalance = 12000;
    function checkBalance() {
        console.log(bankBalance)
    }
    function setBalance(val) {
        bankBalance = val;
    }
    function withDrawal(val) {
        if (val < bankBalance) {
            bankBalance -= val;
            console.log(bankBalance)
        }
    }

    return {
        checkBalance,
        setBalance,
        withDrawal
    }
})();



Bank.checkBalance()





// Revealing Module Pattern is similar like module pattern 
// just when we return object we can decide their object name


let Bank2 = (function () {
    let bankBalance = 12000;
    function checkBalance() {
        console.log(bankBalance)
    }
    function setBalance(val) {
        bankBalance = val;
    }
    function withDrawal(val) {
        if (val < bankBalance) {
            bankBalance -= val;
            console.log(bankBalance)
        }
    }

    return {
        check: checkBalance,
        set: setBalance,
        draw: withDrawal
    }
})();



Bank2.check()


// factory function pattern
// ek fucntion banate ha jo objects banata ha
// return new object without  creating class or using new keyword
// useful when we need same type of many objects



function createProduct(name, price) {
    let stock = 10;
    return {
        name,
        price,
        checkStock() {
            console.log(`Stock : `,stock)
        },
        buy(qty) {
            if (qty <= stock) {
                stock -= qty;
                console.log(`booked - ${stock} pieces left`)
            }
        },
        refill(qty) {
            stock += qty;
            console.log(`refilled the stock - ${stock} pieces left`)
        }
    }
}


let iphone = createProduct("iphone", 70000)




