// '...' this does deep copy of first level and shallow copy if 
// obj or array is nested

const { objectOf } = require("prop-types");

// DEEP COPY POLYFILL

let person = {
    fistname : "joe",
    lastname : "doe",
    address:{
        street : "North street",
        city:"New york",
        state:"NY",
        country:"USA"
    },

    movies :["Die Hard", "First Avenger"]
}


let deepClone = (object)=>{

    let clone={}
      
    Object.keys(object).map((prop)=>{

        if(Array.isArray(object[prop])){
            clone[prop] = [...object[prop]];
        }else if(typeof object[prop] === "object"){
            clone[prop] = deepClone(object[prop]);
        }else{
            clone[prop] = object[prop]
        }
    })

    return clone;
}


let cloned = deepClone(person)

cloned.fistname = "lask"

console.log(person);
console.log(cloned);