// when you need complete detail about specific entity we create object



let obj={
    name:"furqan",
    age:22,
    course:"CS",
    address:{
        city:"gujranwala",
        code:"50250"
    }
} 

obj.name="Muhammad furqan"

obj["course"]


let {city}=obj.address  //destructing



for(let key in obj){
    console.log(obj[key])
}


console.log(Object.keys(obj))
console.log(Object.entries(obj))

let obj2=Object.assign({price:Infinity},obj)

console.log(obj2)


// when you copy objects using reference or through spread operator it only copy top level propeties and pass nexted referneces

let admin="admin"

let object={
    name:"furqan",
    age:22,
    course:"CS",
    address:{
        city:"gujranwala",
        code:"50250"
    }    ,
    [admin]:"not exist"
}


let obj3={...object};

obj3.address.city="sialkot"  // this will chnages in both



// to resolve preicous shallow copy issue

let obj4=JSON.parse(JSON.stringify(object));

console.log(obj4)





