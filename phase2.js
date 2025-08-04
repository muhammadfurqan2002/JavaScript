// primitive data types  asie sare values jinko store karne per tumhe ek real copy mil jaaye

// string number boolean null undefined symbol bigInt


let a=10;
let b=a;
let name="furqan";
let age=40;
let isMarried=false;
let address=undefined;

let u1=Symbol("uid"); //unique immutable value
let u2=Symbol("uid"); //unique immutable value
// these both are unique

let onj={
    name:"furqan",
    age:40,
    uid:1,
    isMarried:false,
    address:undefined,
    contact:null
}

onj[u1]=100;
onj[u2]="hdfkjsh798";



let contact=null;
let number=BigInt(47596767467896);
let num=5856784967679789798456n;

// reference data types inko copy karne per real copy ni milegi but apko reference milega parent ka
// chnages in reference happen in both the variables
//  arrays objects functions
// [] {} function(){} 


let c=[1,2,3,4,5];
let d=c;

d.pop();

console.log(c);
console.log(d);


// chnage will happen in both objects properties

let x={
    name:"furqan",
}

let n=x;

n.name="Bibi";

console.log(x);
console.log(n);






/////////Dynamic typing/////// 

// js me static typing nhi ha yaha dynamic typing jiska matlab hai ap data ko chnage kar sakte ho

let dynamic=12;
dynamic="furqan";
dynamic=true;
dynamic=undefined;
dynamic=null;
dynamic=n;


// ///////Type Quirks////////

typeof dynamic

1=="1"
null=="object"




// //////Type coercion////////

// concept jismein aapka ek type automatcially convert hojayee ga


"5"+1;  //concatinating "51"
"5"-1;  //concatinating 4



// //////Truthy vs Falsy values//////

// 0 false "" null undefined NaN document.all (these are falsy convert)

!!0// tells whether it's true false just a trick for checking 






// practice 


// true+false // answe will be 1 or true


