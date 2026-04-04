let obj = {
    name : "qwert",
    age : 1234,
    address : {
        city: "jaipur",
        state : "RJ"
    },
    printDetails : function(){
        console.log(`${this.name}`);  
    },
}
obj.printDetails();
console.log(obj);
Object.seal();
Object.isSealed();
Object.freeze();
Object.isFrozen();

let {name,address} = obj
console.log(name);
console.log(address);

let arr = [1,2,3,4,5]
let [a,b,c] = arr
console.log(a,b,c);

let copyArr = [...arr]
console.log(copyArr);
let copyobj = {...obj}
console.log(copyobj);


function name(...arr){
    console.log(a);
    console.log(arr);
}
export function func(){ // named export
    console.log("this is a function");
}
export default func;