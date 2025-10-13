//asynchronous (jab ready ho jae chalne ke liye)                        and                                synchronous  (line by line)


// koi bi code js me line by line 
// chle ga natural process but kabi
// kabaar aise cases hote hai life me 
// jaha par apka code wait karta ha
// and utni der mein agla code chal jata hai



// console.log("hey1")
// console.log("hey2")
// setTimeout(() => {
//     console.log("hey3")
// }, 0);
// console.log("hey4")







// // function kuchDerbadChaloGa(val) {
// //     setTimeout(() => {
// //         console.log(val)
// //     }, Math.floor(Math.random() * 10)*1000);
// // }


// // kuchDerbadChaloGa(12)




// //callback

// //ek fucntion ko agar ap ek function bhej rhe ho parameter me , to wo paramter wala fucntion callback kehlaata ha

// function kuchDerbadChaloGa(fn) {
//     setTimeout(fn, Math.floor(Math.random() * 10) * 1000);
// }


// kuchDerbadChaloGa(function () {
//     console.log("call Back")
// })



// // callback hell

// function sarePostsLeKarAo(id, cb) {
//     setTimeout(() => {
//         console.log("Post Fetched")
//         cb({ posts: ["1", "2", "3"] })
//     }, 2000)
// }

// function profileLeKarAo(username, cb) {
//     setTimeout(() => {
//         console.log("Profile fetched");
//         cb({ name: username, age: 90 });
//     }, 2000)
// }


// function savedPostNikalo(id, cb) {
//     setTimeout(() => {
//         console.log("Saved Posts Fetched")
//         cb({ savedPosts: ["post1", "post2", "post3"] })
//     }, 2000);
// }

// profileLeKarAo("furqan", function (data) {
//     console.log(data.name);
//     sarePostsLeKarAo(data._id, function (data) {
//         console.log(data.posts);
//         savedPostNikalo(data._id, function (data) {
//             console.log(data.savedPosts);
//         })
//     })
// })







// Promises

//promise banate ho jo do states me se 1 state me ja sakta ha ya to resolve hoga ya to reject hoga

let p = new Promise(function (res, rej) {
    setTimeout(() => {
        let r = Math.floor(Math.random()*10);
        if(r>5){
            res("resolve:"+r)
        }else{
            rej("reject:"+r)
        }
    }, 3000)
})

// p.then(function (val) {
//     console.log(val)
// }).catch(function (val) {
//     console.log(val)
// })



/// async and wait  (use instead of the and catch)

async function abc(){
   try{
        let w=await p;
        console.log(w);
   }catch(e){
    console.log(e);
   } 
}



abc()