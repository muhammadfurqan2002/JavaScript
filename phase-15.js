// scope means ap variables ko kaha tak use kar sakte ha ,global scope kahi bi use ho sakta ha
let sum = 0;
function abcd() { // function scope function ke andar hi use ho sakti ha means {} brackets me hi use ho sakti
    var a = 1324;
}

// if(){} {s} // it's block 

// console.log(a)




// execution content 
//js sabse pehle jaise hi apka function dekhta hai sabse pehle js banata ha execution context, ye ek process ha jo ki do different
// phases mein chalta ha,memory phase and dosre ka naam hai execution phase 

//simply means allocate space in memory jisme hamara code excution hota ha  , first allocate memory then execution that's execution context (it's abstract)



// dynamic vs lexical scopping


//lexical scoping
// ap kaha per physical available ho ye pore tareeke se depend depend karta ha ke aap kya access kr paoge
//js follow lexical scoping
function lexical() {
    let a = 12; // a lexically scoped in lexical function
    function sample() {
        console.log(a)
    }
}



//dynamic scoping means kaha se call akr rhe ho uspe depend kare ga kaya value mile ge

let b = 12;

function dynamic1() {
    console.log(b)
}
function dynamic2() {
    let a = 20;
    dynamic1();
}


dynamic2()



// closures in Javascript 

//clousres hote hai functions jo ki kisi parent function ke andar ho aur andar wala function return ho rha ho, and returning function use kare koi parent fucntion ka koi variable

//ye sach ha ke fnc ke kahatam hone per apka fnc and uske var khtm hojaate ha hai, per jab bhi clusrue banta hai to apka fnc uske variables ka ek backlink banya jaata ha
//aur uska naam hota ha [[envirnmoent]] // simly means copy create kart ha variables ki

function clousre() {
    let a = 12;
    return function () {
        console.log(a)
    }
}

// beneifts
// private variables
//global pollution



function countForMe() {
    let c = 0;
    return function () {
        c++;
        console.log(c)
    }
}

let fn = countForMe() // yaha function mile ga 
let fn2 = countForMe() // yaha function mile ga 
// both have ha their own function with different value of count
fn()
fn()

fn2()
fn2()
fn2()
fn2()
fn2()


// encapsulation
// we hide details and give access that's needed

function clickOne() {
    var click = 0;

    return function () {
        click++;
        if (click < 5) { // here he give access only 5 times print log
            console.log("click")
        } else {
            console.error("Limit exceeded")
        }
    }
}





//confusion points // toaster

function createToaster(config){
    return function(notification){
      let div=  document.createElement("div")
      div.className=`${config.positionX==="right"?"right-10":"left-10"} ${config.positionY==="top"?"top-10":"bottom-10"}  fixed bg-gray-800 text-white px-4 py-2 rounded shadow-lg pointer-events-none`
      div.textContent=notification;  
      document.body.appendChild(div)


    //   div.className+="can add css here" it will concat

      setTimeout(()=>{
        document.body.removeChild(div)
      },2000)
    }
}


let toaster=createToaster({
    positionX:"right",
    positionY:"top",
    theme:"dark",
    duration:3
})



toaster("This is a dummy notification")
