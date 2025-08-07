// arrays

let arr=[1,2,3,4,5]
console.log(arr)

// arr.push(6);
// arr.pop();
// arr.shift()
// arr.unshift(0)

arr.splice(2,1); //it change acutal array
let n=arr.slice(0,2); //it not change acutal array return new array
n.reverse();
var s=n.sort((a,b)=>{
    return b-a;
})
console.log(s)



let numbers=[11,2,45,6,25]

arr.forEach((i)=>{
    console.log(i)
})


// map used when we need to make new arrayon basis of previous one

let mp=numbers.map((e)=>{
    return (e*0.10).toFixed(2);
})
console.log(mp);



//  filter used for filteration of array
let filt=[1,2,3,4,5,6];


let even=filt.filter((i)=>{
    return i%2==0
})
console.log(even)



// reduce used to create compact version of array

// we put initial value of accumulator one default it keep track of every iterated vlaue
let red=filt.reduce((accumulator,val)=>{
    return accumulator+val;
},0)

console.log(red);



// find  used to find target and return value
let val=filt.find((i)=>{
    return i===1
})

console.log(val)




// some used for chekcing whether condition applied on array or not

let som=filt.some((i)=>{
    return i>4   // return true
})

console.log(som)



// every used for check every value alternate of some

let eve=filt.every((i)=>{
    return i>3;
})


console.log(eve)



// destructing and spread operator


let array=[1,2,3,4,5,6,98,34,12,24];
let [a,b,c]=array;  //destructing

let array2=[...array]  // here not pass refrnece just pass value without reference changing in array2 changes not happen in array (spread operator) 


