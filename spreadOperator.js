let a = [1,2,3]
let b = ['a','b','c']

let c = [...a,...b];

/*'...' -> spread operator => a aur b ke sare ele c me store ho janege*/

//console.log(c);

let o1 = {
    key1 :1,
    key2 :2
}

let o2 = {
    key3 :3,
    key4 :4,
    ...o1
}

//console.log(o2)

let arr = [4,8,7,9,12,13,16]

let arr3 = [...arr.slice(0,3), 3 ,...arr.slice(3)];

console.log(arr3);