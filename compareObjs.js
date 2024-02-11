
let a = {a : 1 , b : 2 , z: {c :3}}
let b = {a : 1 , b : 2 , z : {c:3}}


// 1'st approach
//console.log(JSON.stringify(a)==JSON.stringify(b)) // this will not work if {a:1 , b : 2} & {b:2 , a:1}


// 2'nd appraoch

function isObject(obj){
    return obj!=null && typeof obj === "object"
}

function compareObj(obj1 , obj2){
    let key1 = Object.keys(obj1);
    let key2 = Object.keys(obj2);

    if(key1.length != key2.length){
        return false;
    }

    for(let  key of key1){
       
        let v1 = obj1[key];
        let v2 = obj2[key];

        let isObj = isObject(v1) && isObject(v2);
        if(!isObj && v1!==v2){
             return false;
        }

        if(isObj){
            return compareObj(v1,v2)
        }
    }

    return true
}

console.log(compareObj(a,b))

