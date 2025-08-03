// var , let, const, line-by-line comparison
//  redeclaration is possible with var but not in let further more one thing reinitilization possible in let

var name="furqan"; //global scope  , window mein add hota ,function scoped hota , ap firse redeclare kar sakte ho same name
var name=6456;




let a=45465; ///not redeclare
a="furqan";



const pi=0.10; //cannot re-initilzie 

// pi=909; error



function abcd(){
    if(true){
        var a=45;
    }
}

//  Scope global,block,fucntion


// esa koi  variable jo brackets me ni ha global 


var f=12;

{
    var g=45;   // var block scope ko accept hi ni karta
}


{
    let block=4645645; // block scope 
}

function sample(){
    if(true){
        let m=5; // block scope
        var l=56456;   // function scope ye pore function me accesible ha
    }

    console.log(l)
}
// sample()




////////////////// Temporal Dead Zone ///////////////////

// console.log(ll);
// js ko pta ha variable exist karta ha
// jab ap ne ll banaya to javascript ye nhi kahti ke ll not defined but rather than say ll cannot access before initialization
// that's called dead zone state
// yaha line 60 se 63 tak dead zone , dead zone not implemented on var, it works only on let,const
// let ll=12;





/////////// Hoisting impact per type //////

// hosting -> ek variable ko jab js mein banaate ha to wo variable do hisso me toot jaata ha and uska declare part upar chala jaata
// and uska initialization part neche reh jata ha

console.log(w);

var w=13;




// var->hoisting->undefined
// let->hoisting->X (reference error)
// const->hoisting->X (reference error)




var t=4;
{
    var t=5;
}

console.log(t);


// var has scooped in functions only nothing else

if(true){
    var dd=898;
    let yy=4546;
}

console.log(dd);
// console.log(yy);



// updation of value in object is allowed but reinitilize is not possible